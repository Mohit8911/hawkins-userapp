import React, { useState, useRef, useEffect } from 'react';
import { View, ScrollView, FlatList, Image, Pressable, Dimensions, TouchableOpacity } from 'react-native';
import WrapperContainer from '@/components/WrapperContainer';
import TextComp from '@/components/TextComp';
import { useTheme } from '@/context/ThemeContext';
import useIsRTL from '@/hooks/useIsRTL';
import useRTLStyles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Banner, Category, FeaturedProduct, Recipe } from './home2.types';
import { categoriesData } from './categoriesData';
import { recipesData } from './recipesData';
import { SettingsIcon } from '@/assets/icons';
import { Colors } from '@/styles/colors';
import ModalComp from '@/components/ModalComp';
import ButtonComp from '@/components/ButtonComp';
import { changeLanguageState } from '@/redux/actions/settings';
import { useSelector } from '@/redux/hooks';
import { LanguageInterface } from '@/redux/reducers/settings';
import { secureStorage } from '@/utils/secureStorage';
import { clearDataAction } from '@/redux/actions/auth';

const { width: screenWidth } = Dimensions.get('window');

// Sample banner data
const banners: Banner[] = [
  {
    id: '1',
    image: 'https://stream.jdmagicbox.com/thumbnail/mp-1vefjpbz7cuwdj2-hawkins-contura-tomato-red-pressure-cooker-3-litre-ctr30--11432046/jd-Ott_720x540_Thumbnail.0000003.jpg',
    title: 'Premium Pressure Cookers',
    subtitle: 'Up to 40% off on selected items'
  },
  {
    id: '2',
    image: 'https://www.buyhawkins.in/assets/images/Banner_aqua.webp',
    title: 'New Aqua Collection',
    subtitle: 'Discover our latest cookware range'
  },
  {
    id: '3',
    image: 'https://www.hawkinscookers.com/NewHomePix/website-banner-01-new.jpg',
    title: 'PRO Cookware Series',
    subtitle: 'Professional grade for home chefs'
  }
];

// Sample categories data based on Hawkins website
const categories: Category[] = categoriesData;

// Sample featured products data with variety of Hawkins cookware
const featuredProducts: FeaturedProduct[] = [
  {
    id: 'FP20',
    name: 'Futura Hard Anodised 2 Litre Pressure Cooker',
    price: '₹3,195',
    originalPrice: '₹3,550',
    discount: '10%',
    image: 'https://www.buyhawkins.in/pc_pix/IFP20_1.webp',
    rating: 4.5,
    reviews: 1247
  },
  {
    id: 'TVA24',
    name: 'Hawkins Tava 24cm Non-Stick Fry Pan',
    price: '₹1,295',
    originalPrice: '₹1,450',
    discount: '11%',
    image: 'https://www.buyhawkins.in/cw_pix/AT22_1.webp',
    rating: 4.3,
    reviews: 892
  },
  {
    id: 'KTL15',
    name: 'Hawkins Electric Kettle 1.5 Litre',
    price: '₹1,895',
    originalPrice: '₹2,100',
    discount: '10%',
    image: 'https://www.buyhawkins.in/cw_pix/FKTA1_1.webp',
    rating: 4.7,
    reviews: 567
  },
  {
    id: 'CWR28',
    name: 'Hawkins Cookware Set 28cm Deep Pan',
    price: '₹2,495',
    originalPrice: '₹2,750',
    discount: '9%',
    image: 'https://www.buyhawkins.in/cw_pix/INF16G_1.webp',
    rating: 4.2,
    reviews: 445
  },
  {
    id: 'FP40',
    name: 'Futura Hard Anodised 4 Litre Pressure Cooker',
    price: '₹4,195',
    originalPrice: '₹4,650',
    discount: '10%',
    image: 'https://www.buyhawkins.in/pc_pix/FP7T_1.webp',
    rating: 4.4,
    reviews: 678
  },
  {
    id: 'TVA28',
    name: 'Hawkins Tava 28cm Deep Non-Stick Pan',
    price: '₹1,695',
    originalPrice: '₹1,850',
    discount: '8%',
    image: 'https://www.buyhawkins.in/cw_pix/ICT28_1.webp',
    rating: 4.1,
    reviews: 334
  }
];

/**
 * Hawkins Cookware Home Screen
 */
const Home2 = () => {
  const { theme, toggleTheme } = useTheme();
  const isRTL = useIsRTL();
  const styles = useRTLStyles(isRTL, theme);
  const navigation = useNavigation();
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const bannerRef = useRef<FlatList<Banner>>(null);
  const colors = Colors[theme];

  const { defaultTheme, defaultLanguage } = useSelector(state => state.settings);
  const { isFirstTime } = useSelector(state => state.auth);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (bannerRef.current && banners.length > 1) {
        const nextIndex = (currentBannerIndex + 1) % banners.length;
        bannerRef.current.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
        setCurrentBannerIndex(nextIndex);
      }
    }, 3000); // Change banner every 3 seconds

    return () => clearInterval(interval);
  }, [currentBannerIndex, banners.length]);

  const renderBannerItem = ({ item, index }: { item: Banner; index: number }) => (
    <View style={styles.bannerContainer}>
      <Image source={{ uri: item.image }} style={styles.bannerImage} />
      <View style={styles.bannerOverlay}>
        <TextComp text={item.title} style={styles.bannerTitle} />
        <TextComp text={item.subtitle} style={styles.bannerSubtitle} />
      </View>
    </View>
  );

  const renderCategoryItem = ({ item }: { item: Category }) => (
    <Pressable 
      style={styles.categoryItem} 
      onPress={() => {
        if (item.subcategories && item.subcategories.length > 0) {
          (navigation as any).navigate('SubCategories', { 
            category: { name: item.name, icon: item.icon },
            subcategories: item.subcategories 
          });
        } else {
          (navigation as any).navigate('ProductDetail', { product: featuredProducts[0] });
        }
      }}
    >
      <View style={styles.categoryIcon}>
        {item.imageUrl ? (
          <Image 
            source={{ uri: item.imageUrl }} 
            style={styles.categoryIcon}
            resizeMode="contain"
            defaultSource={require('@/assets/images/logo.png')}
          />
        ) : (
          <TextComp text={item.icon} style={styles.categoryEmoji} />
        )}
      </View>
      <TextComp text={item.name} style={styles.categoryName} />
      <TextComp text={item.count} style={styles.categoryCount} />
    </Pressable>
  );

  const renderProductItem = ({ item }: { item: FeaturedProduct }) => (
    <Pressable style={styles.productItem} onPress={() => (navigation as any).navigate('ProductDetail', { product: item })}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <TextComp text={item.name} style={styles.productName} />
        <View style={styles.priceContainer}>
          <TextComp text={item.price} style={styles.productPrice} />
          <TextComp text={item.originalPrice} style={styles.originalPrice} />
          <View style={styles.discountBadge}>
            <TextComp text={item.discount} style={styles.discountText} />
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <TextComp text="★" style={styles.starIcon} />
          <TextComp text={`${item.rating} (${item.reviews})`} style={styles.ratingText} />
        </View>
      </View>
    </Pressable>
  );

  const renderRecipeItem = ({ item }: { item: Recipe }) => (
    <Pressable style={styles.recipeItem} onPress={() => (navigation as any).navigate('RecipeDetail', { recipe: item })}>
      <Image source={{ uri: item.image }} style={styles.recipeImage} />
      <View style={styles.recipeInfo}>
        <TextComp text={item.name} style={styles.recipeName} />
        <TextComp text={item.category} style={styles.recipeCategory} />
        <View style={styles.recipeMeta}>
          <View style={styles.recipeMetaItem}>
            <TextComp text="⏱" style={styles.recipeIcon} />
            <TextComp text={item.cookingTime} style={styles.recipeMetaText} />
          </View>
          <View style={styles.recipeMetaItem}>
            <TextComp text="👥" style={styles.recipeIcon} />
            <TextComp text={item.servings} style={styles.recipeMetaText} />
          </View>
          <View style={[styles.difficultyBadge, styles[`difficulty${item.difficulty}`]]}>
            <TextComp text={item.difficulty} style={styles.difficultyText} />
          </View>
        </View>
        <TextComp text={item.description} style={styles.recipeDescription} numberOfLines={2} />
      </View>
    </Pressable>
  );

  const renderBannerIndicator = () => (
    <View style={styles.indicatorContainer}>
      {banners.map((_, index) => (
        <Pressable
          key={index}
          style={[
            styles.indicator,
            index === currentBannerIndex && styles.activeIndicator
          ]}
          onPress={() => {
            if (bannerRef.current) {
              bannerRef.current.scrollToIndex({
                index,
                animated: true,
              });
              setCurrentBannerIndex(index);
            }
          }}
        />
      ))}
    </View>
  );

  const changedTheme = async () => {
    const newTheme = defaultTheme.myTheme === 'light' ? 'dark' : 'light';
    await secureStorage.setItem('THEME', newTheme);
    toggleTheme();
    closeModal();
  }

  const changedLanguage = (language: LanguageInterface) => {
    changeLanguageState(language);
    closeModal();
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }

  const onLogout = () => {
    closeModal();
    setTimeout(() => {
      clearDataAction();
    }, 400);
  }

  return (
    <WrapperContainer style={styles.container}>
      {/* Custom Header with Logo, Title, and Settings */}
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Image 
            source={require('@/assets/images/logo.png')} 
            style={styles.logoImage}
            resizeMode="contain"
          />
          
          <TextComp text="HAWKINS" style={styles.headerTitle} />
          
          <TouchableOpacity 
            style={styles.settingsButton}
            onPress={() => setIsModalVisible(true)}
          >
            <SettingsIcon fill={colors.text} width={20} height={20} />
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Banner Carousel */}
        <View style={styles.bannerSection}>
          <FlatList
            ref={bannerRef}
            data={banners}
            renderItem={renderBannerItem}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(event) => {
              const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
              setCurrentBannerIndex(index);
            }}
            onScrollBeginDrag={() => {
              // Pause auto-scroll when user starts manually scrolling
              if (bannerRef.current) {
                bannerRef.current.setNativeProps({ scrollEnabled: true });
              }
            }}
          />
          {renderBannerIndicator()}
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <TextComp text="CATEGORIES" style={styles.sectionTitle} />
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          />
        </View>

        {/* Featured Products */}
        <View style={styles.section}>
          <TextComp text="FEATURED_PRODUCTS" style={styles.sectionTitle} />
          <FlatList
            data={featuredProducts}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productsContainer}
          />
        </View>

        {/* Recipes Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <TextComp text="RECIPES" style={styles.sectionTitle} />
            <TouchableOpacity onPress={() => (navigation as any).navigate('AllRecipes')}>
              <TextComp text="VIEW_ALL" style={styles.viewAllText} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={recipesData}
            renderItem={renderRecipeItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recipesContainer}
          />
        </View>
      </ScrollView>

      <ModalComp isVisible={isModalVisible} onClose={closeModal}>
        <View style={styles.modalContainer}>
          <TextComp
            text="SETTINGS"
            style={styles.modalTitle}
          />
          <View style={styles.modalSection}>
            <TextComp
              text="LANGUAGE"
              style={styles.sectionTitle}
            />
            <View style={styles.optionRow}>
              <TouchableOpacity
                style={[styles.optionButton, defaultLanguage?.sortName === 'en' && styles.optionButtonActive]}
                onPress={() => changedLanguage({ name: 'English', sortName: 'en' })}
              >
                <TextComp text="English" isDynamic style={[
                  styles.optionText,
                  defaultLanguage?.sortName === 'en' && styles.optionTextActive
                ]} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.optionButton, defaultLanguage?.sortName === 'hi' && styles.optionButtonActive]}
                onPress={() => changedLanguage({ name: 'हिंदी', sortName: 'hi' })}
              >
                <TextComp text="हिंदी" isDynamic style={[
                  styles.optionText,
                  defaultLanguage?.sortName === 'hi' && styles.optionTextActive
                ]} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.modalSection}>
            <TextComp
              text="THEME"
              style={styles.sectionTitle}
              isDynamic={false}
            />
            <View style={styles.optionRow}>
              <TouchableOpacity
                style={[styles.optionButton, theme === 'light' && styles.optionButtonActive]}
                onPress={changedTheme}
              >
                <TextComp text="LIGHT" style={[
                  styles.optionText,
                  theme === 'light' && styles.optionTextActive
                ]} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.optionButton, theme === 'dark' && styles.optionButtonActive]}
                onPress={changedTheme}
              >
                <TextComp text="DARK" style={[
                  styles.optionText,
                  theme === 'dark' && styles.optionTextActive
                ]} />
              </TouchableOpacity>
            </View>
          </View>

          {isFirstTime ? <ButtonComp title="LOGOUT" onPress={onLogout} /> : null}
        </View>
      </ModalComp>
    </WrapperContainer>
  );
};

export default Home2; 