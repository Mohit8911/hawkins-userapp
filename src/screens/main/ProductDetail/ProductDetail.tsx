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

// Product data for various Hawkins cookware products
const getProductData = (productId?: string) => {
  const productMap: { [key: string]: any } = {
    // Pressure Cookers
    'FP20': {
      id: 'FP20',
      name: 'Futura Hard Anodised 2 Litre Pressure Cooker',
      price: '₹3,195',
      originalPrice: '₹3,550',
      discount: '10%',
      rating: 4.5,
      reviews: 1247,
      images: [
        'https://www.buyhawkins.in/pc_pix/IFP20_1.webp',
        'https://www.buyhawkins.in/pc_pix/IFP20_4.webp',
        'https://www.buyhawkins.in/pc_pix/IFP20_1.webp',
      ],
      thickness: '6.35 mm',
      guarantee: '5 years',
      capacity: '2 litre',
      cartonDimensions: '325 x 191 x 190 mm',
      weight: '2.375 kg',
      idealFor: '2 or 3 persons',
      features: [
        'Hard Anodised body and lid: non-reactive with food; will not tarnish, stays looking new for years',
        'Base 6.35 mm thick - stays flat, works on gas, electric, ceramic and halogen',
        'Super-fast - 46% faster than a microwave oven'
      ],
      description: 'The Futura Hard Anodised Pressure Cooker is designed for modern kitchens with its sleek design and superior performance. The hard anodised surface ensures durability and easy cleaning while maintaining the natural taste of your food.'
    },
    'FP40': {
      id: 'FP40',
      name: 'Futura Hard Anodised 4 Litre Pressure Cooker',
      price: '₹4,195',
      originalPrice: '₹4,650',
      discount: '10%',
      rating: 4.4,
      reviews: 678,
      images: [
        'https://www.buyhawkins.in/pc_pix/FP7T_1.webp',
        'https://www.buyhawkins.in/pc_pix/FP7T_2.webp',
        'https://www.buyhawkins.in/pc_pix/FP7T_3.webp',
      ],
      thickness: '6.35 mm',
      guarantee: '5 years',
      capacity: '4 litre',
      cartonDimensions: '375 x 210 x 210 mm',
      weight: '3.2 kg',
      idealFor: '4 or 5 persons',
      features: [
        'Hard Anodised body and lid: non-reactive with food; will not tarnish, stays looking new for years',
        'Base 6.35 mm thick - stays flat, works on gas, electric, ceramic and halogen',
        'Super-fast - 46% faster than a microwave oven'
      ],
      description: 'The Futura Hard Anodised Pressure Cooker is designed for modern kitchens with its sleek design and superior performance. The hard anodised surface ensures durability and easy cleaning while maintaining the natural taste of your food.'
    },
    // Tava (Non-Stick Pans)
    'TVA24': {
      id: 'TVA24',
      name: 'Hawkins Tava 24cm Non-Stick Fry Pan',
      price: '₹1,295',
      originalPrice: '₹1,450',
      discount: '11%',
      rating: 4.3,
      reviews: 892,
      images: [
        'https://www.buyhawkins.in/cw_pix/AT22_1.webp',
        'https://www.buyhawkins.in/cw_pix/AT22_2.webp',
        'https://www.buyhawkins.in/cw_pix/AT22_3.webp',
      ],
      thickness: '3.0 mm',
      guarantee: '2 years',
      capacity: '24cm diameter',
      cartonDimensions: '280 x 280 x 80 mm',
      weight: '0.85 kg',
      idealFor: '2-3 persons',
      features: [
        'Premium non-stick coating for easy cooking and cleaning',
        'Aluminum body with even heat distribution',
        'Ergonomic handle design for comfortable grip',
        'Suitable for gas, electric, and induction cooktops'
      ],
      description: 'The Hawkins Tava 24cm Non-Stick Fry Pan is perfect for everyday cooking. The premium non-stick coating ensures food doesn\'t stick, making cooking and cleaning effortless. The aluminum body provides even heat distribution for perfect cooking results.'
    },
    'TVA28': {
      id: 'TVA28',
      name: 'Hawkins Tava 28cm Deep Non-Stick Pan',
      price: '₹1,695',
      originalPrice: '₹1,850',
      discount: '8%',
      rating: 4.1,
      reviews: 334,
      images: [
        'https://www.buyhawkins.in/cw_pix/ICT28_1.webp',
        'https://www.buyhawkins.in/cw_pix/ICT28_2.webp',
        'https://www.buyhawkins.in/cw_pix/ICT28_3.webp',
      ],
      thickness: '3.5 mm',
      guarantee: '2 years',
      capacity: '28cm diameter',
      cartonDimensions: '320 x 320 x 100 mm',
      weight: '1.2 kg',
      idealFor: '4-5 persons',
      features: [
        'Deep design for versatile cooking - frying, sautéing, and more',
        'Premium non-stick coating for easy food release',
        'Aluminum body with excellent heat conductivity',
        'Comfortable handle with heat-resistant design'
      ],
      description: 'The Hawkins Tava 28cm Deep Non-Stick Pan offers versatility for various cooking methods. The deep design allows for frying, sautéing, and even shallow frying. The premium non-stick coating ensures easy food release and simple cleaning.'
    },
    // Electric Kettle
    'KTL15': {
      id: 'KTL15',
      name: 'Hawkins Electric Kettle 1.5 Litre',
      price: '₹1,895',
      originalPrice: '₹2,100',
      discount: '10%',
      rating: 4.7,
      reviews: 567,
      images: [
        'https://www.buyhawkins.in/cw_pix/FKTA1_1.webp',
        'https://www.buyhawkins.in/cw_pix/FKTA1_2.webp',
        'https://www.buyhawkins.in/cw_pix/FKTA1_3.webp',
      ],
      thickness: 'Stainless Steel',
      guarantee: '1 year',
      capacity: '1.5 litre',
      cartonDimensions: '200 x 150 x 250 mm',
      weight: '0.95 kg',
      idealFor: 'Family use',
      features: [
        'Stainless steel body for durability and hygiene',
        '1.5 litre capacity for family needs',
        'Auto shut-off feature for safety',
        '360° swivel base for easy handling',
        'Boil-dry protection for added safety'
      ],
      description: 'The Hawkins Electric Kettle 1.5 Litre is designed for modern kitchens with its sleek stainless steel body and advanced safety features. The auto shut-off and boil-dry protection ensure safe operation while the 1.5 litre capacity meets family requirements.'
    },
    // Cookware Set
    'CWR28': {
      id: 'CWR28',
      name: 'Hawkins Cookware Set 28cm Deep Pan',
      price: '₹2,495',
      originalPrice: '₹2,750',
      discount: '9%',
      rating: 4.2,
      reviews: 445,
      images: [
        'https://www.buyhawkins.in/cw_pix/INF16G_1.webp',
        'https://www.buyhawkins.in/cw_pix/INF16G_2.webp',
        'https://www.buyhawkins.in/cw_pix/INF16G_3.webp',
      ],
      thickness: '4.0 mm',
      guarantee: '3 years',
      capacity: '28cm diameter',
      cartonDimensions: '350 x 350 x 120 mm',
      weight: '1.8 kg',
      idealFor: 'Family cooking',
      features: [
        'Premium non-stick coating for effortless cooking',
        'Heavy-duty aluminum construction for durability',
        'Deep design for versatile cooking methods',
        'Comfortable heat-resistant handles',
        'Suitable for all types of cooktops'
      ],
      description: 'The Hawkins Cookware Set 28cm Deep Pan is a versatile addition to any kitchen. The premium non-stick coating and heavy-duty construction ensure long-lasting performance while the deep design accommodates various cooking styles and family-sized meals.'
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
    ...getProductData(route.params.product.id),
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
    // Add item to cart first
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
    
    // Show alert and automatically navigate after a short delay
    // Alert.alert('Buy Now', 'Redirecting to cart...');
    
    // Navigate to cart after a short delay
    setTimeout(() => {
      navigation.navigate('Cart' as any);
    }, 1000);
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