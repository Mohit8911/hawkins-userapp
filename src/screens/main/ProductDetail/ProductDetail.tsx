import React, { useState } from 'react';
import { View, ScrollView, Image, Pressable, Dimensions, Share, Alert } from 'react-native';
import WrapperContainer from '@/components/WrapperContainer';
import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import ButtonComp from '@/components/ButtonComp';
import { useTheme } from '@/context/ThemeContext';
import useIsRTL from '@/hooks/useIsRTL';
import useRTLStyles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { HomeStackParamList } from '@/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { useSelector, useDispatch } from '@/redux/hooks';
import actions from '@/redux/actions';
import { CartItem } from '@/models/Cart';

const { width: screenWidth } = Dimensions.get('window');

type ProductDetailNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'ProductDetail'>;
type ProductDetailRouteProp = RouteProp<HomeStackParamList, 'ProductDetail'>;

// Product data based on Hawkins Futura Hard Anodised series
const getProductData = (productId?: string) => {
  const baseData = {
    thickness: '6.35 mm',
    guarantee: '5 years',
    features: [
      'Hard Anodised body and lid: non-reactive with food; will not tarnish, stays looking new for years',
      'Base 6.35 mm thick - stays flat, works on gas, electric, ceramic and halogen',
      'Super-fast - 46% faster than a microwave oven'
    ],
    description: 'The Futura Hard Anodised Pressure Cooker is designed for modern kitchens with its sleek design and superior performance. The hard anodised surface ensures durability and easy cleaning while maintaining the natural taste of your food.'
  };

  const productMap: { [key: string]: any } = {
    'FP20': {
      ...baseData,
      id: 'FP20',
      name: 'Futura Hard Anodised 2 Litre (FP20)',
      price: '₹3,195',
      originalPrice: '₹3,550',
      discount: '10%',
      rating: 4.5,
      reviews: 1247,
      images: [
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
      ],
      capacity: '2 litre',
      cartonDimensions: '325 x 191 x 190 mm',
      weight: '2.375 kg',
      idealFor: '2 or 3 persons'
    },
    'FP30': {
      ...baseData,
      id: 'FP30',
      name: 'Futura Hard Anodised 3 Litre (FP30)',
      price: '₹3,695',
      originalPrice: '₹4,100',
      discount: '10%',
      rating: 4.2,
      reviews: 445,
      images: [
        'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop',
      ],
      capacity: '3 litre',
      cartonDimensions: '350 x 200 x 200 mm',
      weight: '2.8 kg',
      idealFor: '3 or 4 persons'
    },
    'FP40': {
      ...baseData,
      id: 'FP40',
      name: 'Futura Hard Anodised 4 Litre (FP40)',
      price: '₹4,195',
      originalPrice: '₹4,650',
      discount: '10%',
      rating: 4.3,
      reviews: 892,
      images: [
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
      ],
      capacity: '4 litre',
      cartonDimensions: '375 x 210 x 210 mm',
      weight: '3.2 kg',
      idealFor: '4 or 5 persons'
    },
    'FP60': {
      ...baseData,
      id: 'FP60',
      name: 'Futura Hard Anodised 6 Litre (FP60)',
      price: '₹5,195',
      originalPrice: '₹5,750',
      discount: '10%',
      rating: 4.7,
      reviews: 567,
      images: [
        'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop',
      ],
      capacity: '6 litre',
      cartonDimensions: '400 x 220 x 220 mm',
      weight: '3.8 kg',
      idealFor: '6 or 7 persons'
    }
  };

  return productMap[productId || 'FP20'] || productMap['FP20'];
};

/**
 * ProductDetail screen component
 */
const ProductDetail = () => {
  const { theme } = useTheme();
  const isRTL = useIsRTL();
  const styles = useRTLStyles(isRTL, theme);
  const navigation = useNavigation<ProductDetailNavigationProp>();
  const route = useRoute<ProductDetailRouteProp>();
  const dispatch = useDispatch();
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  // Get product data - use route product if available, otherwise use default
  const productData = route.params?.product ? {
    ...getProductData(),
    ...route.params.product
  } : getProductData();

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out this amazing ${productData.name} from Hawkins! Price: ${productData.price}`,
        title: productData.name,
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to share product');
    }
  };

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: productData.id,
      name: productData.name,
      price: productData.price,
      originalPrice: productData.originalPrice,
      quantity: quantity,
      image: productData.images[0],
      capacity: productData.capacity,
      thickness: productData.thickness,
      weight: productData.weight,
      guarantee: productData.guarantee,
      cartonDimensions: productData.cartonDimensions,
      idealFor: productData.idealFor,
    };
    
    dispatch(actions.addItemToCart(cartItem));
    Alert.alert('Success', 'Product added to cart!');
  };

  const handleBuyNow = () => {
    Alert.alert('Buy Now', 'Redirecting to checkout...');
  };

  const handleQuantityChange = (increment: boolean) => {
    if (increment) {
      setQuantity(prev => prev + 1);
    } else if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const renderImageItem = ({ item, index }: { item: string; index: number }) => (
    <Image source={{ uri: item }} style={styles.productImage} />
  );

  const renderImageIndicator = () => (
    <View style={styles.imageIndicatorContainer}>
      {productData.images.map((_: string, index: number) => (
        <View
          key={index}
          style={[
            styles.imageIndicator,
            index === currentImageIndex && styles.activeImageIndicator
          ]}
        />
      ))}
    </View>
  );

  return (
    <WrapperContainer style={styles.container}>
      <HeaderComp 
        title="PRODUCT_DETAIL" 
        showBack={true}
      />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Product Images */}
        <View style={styles.imageSection}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(event) => {
              const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
              setCurrentImageIndex(index);
            }}
          >
            {productData.images.map((image: string, index: number) => (
              <View key={index} style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.productImage} />
              </View>
            ))}
          </ScrollView>
          
          {/* Share Button - Positioned over images */}
          <Pressable onPress={handleShare} style={styles.shareButton}>
            <TextComp text="SHARE_PRODUCT" style={styles.shareButtonText} />
          </Pressable>
          
          {renderImageIndicator()}
        </View>

        {/* Product Info */}
        <View style={styles.productInfoSection}>
          <TextComp text={productData.name} style={styles.productName} />
          
          <View style={styles.ratingContainer}>
            <TextComp text="★" style={styles.starIcon} />
            <TextComp text={`${productData.rating} (${productData.reviews} reviews)`} style={styles.ratingText} />
          </View>

          <View style={styles.priceContainer}>
            <TextComp text={productData.price} style={styles.currentPrice} />
            <TextComp text={productData.originalPrice} style={styles.originalPrice} />
            <View style={styles.discountBadge}>
              <TextComp text={productData.discount} style={styles.discountText} />
            </View>
          </View>

          {/* Quantity Selector */}
          <View style={styles.quantityContainer}>
            <TextComp text="QUANTITY" style={styles.quantityLabel} />
            <View style={styles.quantitySelector}>
              <Pressable 
                style={styles.quantityButton} 
                onPress={() => handleQuantityChange(false)}
              >
                <TextComp text="-" style={styles.quantityButtonText} />
              </Pressable>
              <TextComp text={quantity.toString()} style={styles.quantityValue} />
              <Pressable 
                style={styles.quantityButton} 
                onPress={() => handleQuantityChange(true)}
              >
                <TextComp text="+" style={styles.quantityButtonText} />
              </Pressable>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtonsContainer}>
            <ButtonComp
              title="ADD_TO_CART"
              onPress={handleAddToCart}
              style={styles.addToCartButton}
              textStyle={styles.addToCartButtonText}
            />
            <ButtonComp
              title="BUY_NOW"
              onPress={handleBuyNow}
              style={styles.buyNowButton}
              textStyle={styles.buyNowButtonText}
            />
          </View>
        </View>

        {/* Specifications */}
        <View style={styles.specificationsSection}>
          <TextComp text="SPECIFICATIONS" style={styles.sectionTitle} />
          <View style={styles.specificationsList}>
            <View style={styles.specificationItem}>
              <TextComp text="THICKNESS" style={styles.specificationLabel} />
              <TextComp text={productData.thickness} style={styles.specificationValue} />
            </View>
            <View style={styles.specificationItem}>
              <TextComp text="CAPACITY" style={styles.specificationLabel} />
              <TextComp text={productData.capacity} style={styles.specificationValue} />
            </View>
            <View style={styles.specificationItem}>
              <TextComp text="CARTON_DIMENSIONS" style={styles.specificationLabel} />
              <TextComp text={productData.cartonDimensions} style={styles.specificationValue} />
            </View>
            <View style={styles.specificationItem}>
              <TextComp text="WEIGHT" style={styles.specificationLabel} />
              <TextComp text={productData.weight} style={styles.specificationValue} />
            </View>
            <View style={styles.specificationItem}>
              <TextComp text="GUARANTEE" style={styles.specificationLabel} />
              <TextComp text={productData.guarantee} style={styles.specificationValue} />
            </View>
            <View style={styles.specificationItem}>
              <TextComp text="IDEAL_FOR" style={styles.specificationLabel} />
              <TextComp text={productData.idealFor} style={styles.specificationValue} />
            </View>
          </View>
        </View>

        {/* Product Features */}
        <View style={styles.featuresSection}>
          <TextComp text="PRODUCT_FEATURES" style={styles.sectionTitle} />
          {productData.features.map((feature: string, index: number) => (
            <View key={index} style={styles.featureItem}>
              <TextComp text="•" style={styles.bulletPoint} />
              <TextComp text={feature} style={styles.featureText} />
            </View>
          ))}
        </View>

        {/* Product Description */}
        <View style={styles.descriptionSection}>
          <TextComp text="PRODUCT_DESCRIPTION" style={styles.sectionTitle} />
          <TextComp text={productData.description} style={styles.descriptionText} />
        </View>

        {/* Bulk Orders */}
        <View style={styles.bulkOrdersSection}>
          <TextComp text="BULK_ORDERS" style={styles.bulkOrdersText} />
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default ProductDetail; 