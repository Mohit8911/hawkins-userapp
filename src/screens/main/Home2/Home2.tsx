import React, { useState, useRef, useEffect } from 'react';
import { View, ScrollView, FlatList, Image, Pressable, Dimensions } from 'react-native';
import WrapperContainer from '@/components/WrapperContainer';
import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import { useTheme } from '@/context/ThemeContext';
import useIsRTL from '@/hooks/useIsRTL';
import useRTLStyles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Banner, Category, FeaturedProduct } from './home2.types';

const { width: screenWidth } = Dimensions.get('window');

// Sample banner data
const banners: Banner[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop',
    title: 'Premium Pressure Cookers',
    subtitle: 'Up to 40% off on selected items'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=400&fit=crop',
    title: 'New Aqua Collection',
    subtitle: 'Discover our latest cookware range'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop',
    title: 'PRO Cookware Series',
    subtitle: 'Professional grade for home chefs'
  }
];

// Sample categories data based on Hawkins website
const categories: Category[] = [
  { id: '1', name: 'PRESSURE_COOKERS', icon: '🥘', count: '50+' },
  { id: '2', name: 'HARD_ANODISED', icon: '🍳', count: '30+' },
  { id: '3', name: 'NONSTICK', icon: '🫕', count: '25+' },
  { id: '4', name: 'STAINLESS_STEEL', icon: '🥄', count: '40+' },
  { id: '5', name: 'CERAMIC', icon: '🍽️', count: '20+' },
  { id: '6', name: 'CAST_IRON', icon: '🫖', count: '15+' },
  { id: '7', name: 'TRI_PLY', icon: '🥣', count: '35+' },
  { id: '8', name: 'DIE_CAST', icon: '🍲', count: '18+' },
  { id: '9', name: 'ACCESSORIES', icon: '🔧', count: '60+' },
  { id: '10', name: 'COOKWARE_SETS', icon: '📦', count: '25+' }
];

// Sample featured products data based on Hawkins website
const featuredProducts: FeaturedProduct[] = [
  {
    id: 'FP20',
    name: 'Futura Hard Anodised 2 Litre (FP20)',
    price: '₹3,195',
    originalPrice: '₹3,550',
    discount: '10%',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
    rating: 4.5,
    reviews: 1247
  },
  {
    id: 'FP40',
    name: 'Futura Hard Anodised 4 Litre (FP40)',
    price: '₹4,195',
    originalPrice: '₹4,650',
    discount: '10%',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=300&h=300&fit=crop',
    rating: 4.3,
    reviews: 892
  },
  {
    id: 'FP60',
    name: 'Futura Hard Anodised 6 Litre (FP60)',
    price: '₹5,195',
    originalPrice: '₹5,750',
    discount: '10%',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
    rating: 4.7,
    reviews: 567
  },
  {
    id: 'FP30',
    name: 'Futura Hard Anodised 3 Litre (FP30)',
    price: '₹3,695',
    originalPrice: '₹4,100',
    discount: '10%',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=300&h=300&fit=crop',
    rating: 4.2,
    reviews: 445
  }
];

/**
 * Hawkins Cookware Home Screen
 */
const Home2 = () => {
  const { theme } = useTheme();
  const isRTL = useIsRTL();
  const styles = useRTLStyles(isRTL, theme);
  const navigation = useNavigation();
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const bannerRef = useRef<FlatList<Banner>>(null);

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
    <Pressable style={styles.categoryItem} onPress={() => (navigation as any).navigate('ProductDetail', { product: featuredProducts[0] })}>
      <View style={styles.categoryIcon}>
        <TextComp text={item.icon} style={styles.categoryIconText} />
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

  return (
    <WrapperContainer style={styles.container}>
      <HeaderComp title="HAWKINS" showBack={false} />
      
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
      </ScrollView>
    </WrapperContainer>
  );
};

export default Home2; 