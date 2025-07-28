import React, { useState, useEffect } from 'react';
import { View, FlatList, Pressable, Image, Dimensions } from 'react-native';
import WrapperContainer from '@/components/WrapperContainer';
import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import { useTheme } from '@/context/ThemeContext';
import useIsRTL from '@/hooks/useIsRTL';
import useRTLStyles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Product } from './productList.types';

const { width: screenWidth } = Dimensions.get('window');

/**
 * ProductList screen component that displays products in a grid layout
 */
const ProductList = () => {
  const { theme } = useTheme();
  const isRTL = useIsRTL();
  const styles = useRTLStyles(isRTL, theme);
  const navigation = useNavigation();
  const route = useRoute();
  const { t } = useTranslation();
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  const { category, subcategory } = route.params as {
    category: string;
    subcategory: string;
  };

  useEffect(() => {
    // Simulate API call to fetch products based on category and subcategory
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Mock data - replace with actual API call
        const mockProducts = getExtendedProducts(category, subcategory);
        setProducts(mockProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, subcategory]);

  const renderProductItem = ({ item }: { item: Product }) => (
    <Pressable 
      style={styles.productItem} 
      onPress={() => (navigation as any).navigate('ProductDetail', { product: item })}
    >
      <View style={styles.productImageContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        {item.discount && (
          <View style={styles.discountBadge}>
            <TextComp text={item.discount} style={styles.discountText} />
          </View>
        )}
      </View>
      
      <View style={styles.productInfo}>
        <TextComp text={item.name} style={styles.productName} numberOfLines={2} />
        
        <View style={styles.priceContainer}>
          <TextComp text={item.price} style={styles.productPrice} />
          {item.originalPrice && item.originalPrice !== item.price && (
            <TextComp text={item.originalPrice} style={styles.originalPrice} />
          )}
        </View>
        
        {item.rating > 0 && (
          <View style={styles.ratingContainer}>
            <TextComp text="★" style={styles.starIcon} />
            <TextComp text={`${item.rating} (${item.reviews})`} style={styles.ratingText} />
          </View>
        )}
        
        {item.features && item.features.length > 0 && (
          <View style={styles.featuresContainer}>
            {item.features.slice(0, 2).map((feature: string, index: number) => (
              <TextComp 
                key={index} 
                text={feature} 
                style={styles.featureText} 
                numberOfLines={1}
              />
            ))}
          </View>
        )}
      </View>
    </Pressable>
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <TextComp text={`${category} - ${subcategory}`} style={styles.headerTitle} />
      <TextComp text={`${products.length} PRODUCTS`} style={styles.productCount} />
    </View>
  );

  return (
    <WrapperContainer style={styles.container}>
      <HeaderComp 
        title={subcategory} 
        showBack={true}
      />
      
      <View style={styles.content}>
        <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          ListHeaderComponent={renderHeader}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    </WrapperContainer>
  );
};

// Mock data function - replace with actual API call
const getMockProducts = (category: string, subcategory: string): Product[] => {
  const baseProducts: Product[] = [
    {
      id: '1',
      name: 'Hawkins Classic Pressure Cooker 1.5L',
      price: '₹1,125',
      originalPrice: '₹1,250',
      discount: '10% OFF',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop&crop=center',
      rating: 4.5,
      reviews: 128,
      features: ['1.5 Litre', 'Aluminium', 'Classic Design']
    },
    {
      id: '2',
      name: 'Hawkins Induction Classic 2L',
      price: '₹1,260',
      originalPrice: '₹1,400',
      discount: '10% OFF',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center',
      rating: 4.3,
      reviews: 95,
      features: ['2 Litre', 'Induction Compatible', 'Tall Design']
    },
    {
      id: '3',
      name: 'Hawkins Classic Pressure Cooker 3L',
      price: '₹1,505',
      originalPrice: '₹1,675',
      discount: '10% OFF',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop&crop=center',
      rating: 4.7,
      reviews: 156,
      features: ['3 Litre', 'Aluminium', 'Wide Design']
    },
    {
      id: '4',
      name: 'Hawkins Induction Classic 4L',
      price: '₹1,910',
      originalPrice: '₹2,125',
      discount: '10% OFF',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center',
      rating: 4.4,
      reviews: 87,
      features: ['4 Litre', 'Induction Compatible', 'Classic Design']
    },
    {
      id: '5',
      name: 'Hawkins Classic Pressure Cooker 5L',
      price: '₹2,045',
      originalPrice: '₹2,275',
      discount: '10% OFF',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop&crop=center',
      rating: 4.6,
      reviews: 203,
      features: ['5 Litre', 'Aluminium', 'With Separator']
    },
    {
      id: '6',
      name: 'Hawkins Induction Classic 6.5L',
      price: '₹2,295',
      originalPrice: '₹2,550',
      discount: '10% OFF',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center',
      rating: 4.2,
      reviews: 67,
      features: ['6.5 Litre', 'Induction Compatible', 'Tall Design']
    },
    {
      id: '7',
      name: 'Hawkins Classic Pressure Cooker 8L',
      price: '₹2,475',
      originalPrice: '₹2,750',
      discount: '10% OFF',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop&crop=center',
      rating: 4.8,
      reviews: 134,
      features: ['8 Litre', 'Aluminium', 'Wide Design']
    },
    {
      id: '8',
      name: 'Hawkins Classic Pressure Cooker 10L',
      price: '₹2,880',
      originalPrice: '₹3,200',
      discount: '10% OFF',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop&crop=center',
      rating: 4.5,
      reviews: 89,
      features: ['10 Litre', 'Aluminium', 'With Separator']
    }
  ];

  // Filter products based on category and subcategory
  // In a real app, this would be an API call
  return baseProducts.filter(product => {
    if (category.toLowerCase().includes('pressure cooker')) {
      return product.name.toLowerCase().includes('pressure cooker');
    }
    return true;
  });
};

// Extended product data for different categories
const getExtendedProducts = (category: string, subcategory: string): Product[] => {
  const cookwareProducts: Product[] = [
    {
      id: 'cookware-1',
      name: 'Hawkins Nonstick Frying Pan 24cm',
      price: '₹1,200',
      originalPrice: '₹1,500',
      discount: '20% OFF',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop&crop=center',
      rating: 4.6,
      reviews: 89,
      features: ['24cm', 'Nonstick', 'Induction Compatible']
    },
    {
      id: 'cookware-2',
      name: 'Hawkins Hard Anodised Tava 28cm',
      price: '₹1,800',
      originalPrice: '₹2,200',
      discount: '18% OFF',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center',
      rating: 4.4,
      reviews: 67,
      features: ['28cm', 'Hard Anodised', 'Durable']
    },
    {
      id: 'cookware-3',
      name: 'Hawkins Stainless Steel Saucepan 2L',
      price: '₹2,100',
      originalPrice: '₹2,600',
      discount: '19% OFF',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop&crop=center',
      rating: 4.7,
      reviews: 123,
      features: ['2 Litre', 'Stainless Steel', 'Tri-ply Base']
    },
    {
      id: 'cookware-4',
      name: 'Hawkins Cast Iron Handi 3L',
      price: '₹3,200',
      originalPrice: '₹3,800',
      discount: '16% OFF',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center',
      rating: 4.8,
      reviews: 156,
      features: ['3 Litre', 'Cast Iron', 'Traditional']
    },
    {
      id: 'cookware-5',
      name: 'Hawkins Ceramic Nonstick Pan 26cm',
      price: '₹1,600',
      originalPrice: '₹1,900',
      discount: '16% OFF',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop&crop=center',
      rating: 4.5,
      reviews: 78,
      features: ['26cm', 'Ceramic', 'Nonstick']
    },
    {
      id: 'cookware-6',
      name: 'Hawkins Die Cast Kadai 24cm',
      price: '₹2,400',
      originalPrice: '₹2,900',
      discount: '17% OFF',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center',
      rating: 4.6,
      reviews: 92,
      features: ['24cm', 'Die Cast', 'Heavy Duty']
    }
  ];

  const electricalProducts: Product[] = [
    {
      id: 'electrical-1',
      name: 'Hawkins Electric Pressure Cooker 6L',
      price: '₹4,500',
      originalPrice: '₹5,200',
      discount: '13% OFF',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop&crop=center',
      rating: 4.7,
      reviews: 234,
      features: ['6 Litre', 'Electric', 'Digital Display']
    },
    {
      id: 'electrical-2',
      name: 'Hawkins Electric Kettle 1.5L',
      price: '₹1,800',
      originalPrice: '₹2,100',
      discount: '14% OFF',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center',
      rating: 4.4,
      reviews: 167,
      features: ['1.5 Litre', 'Electric', 'Auto Shut-off']
    },
    {
      id: 'electrical-3',
      name: 'Hawkins Electric Pan 24cm',
      price: '₹2,800',
      originalPrice: '₹3,300',
      discount: '15% OFF',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop&crop=center',
      rating: 4.5,
      reviews: 89,
      features: ['24cm', 'Electric', 'Nonstick']
    }
  ];

  const accessoriesProducts: Product[] = [
    {
      id: 'accessory-1',
      name: 'Hawkins Pressure Cooker Gasket',
      price: '₹150',
      originalPrice: '₹200',
      discount: '25% OFF',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center',
      rating: 4.3,
      reviews: 456,
      features: ['Universal Fit', 'Durable', 'Replacement']
    },
    {
      id: 'accessory-2',
      name: 'Hawkins Safety Valve Set',
      price: '₹120',
      originalPrice: '₹150',
      discount: '20% OFF',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop&crop=center',
      rating: 4.6,
      reviews: 234,
      features: ['Safety Valve', 'Universal', 'High Quality']
    },
    {
      id: 'accessory-3',
      name: 'Hawkins Handle Set',
      price: '₹180',
      originalPrice: '₹220',
      discount: '18% OFF',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center',
      rating: 4.4,
      reviews: 123,
      features: ['Ergonomic', 'Heat Resistant', 'Easy Grip']
    },
    {
      id: 'accessory-4',
      name: 'Hawkins Lid Set',
      price: '₹200',
      originalPrice: '₹250',
      discount: '20% OFF',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop&crop=center',
      rating: 4.5,
      reviews: 89,
      features: ['Universal', 'Stainless Steel', 'Durable']
    }
  ];

  // Return products based on category
  if (category.toLowerCase().includes('cookware')) {
    return cookwareProducts;
  } else if (category.toLowerCase().includes('electrical')) {
    return electricalProducts;
  } else if (category.toLowerCase().includes('accessories') || category.toLowerCase().includes('parts')) {
    return accessoriesProducts;
  } else {
    // Default to pressure cookers
    const baseProducts: Product[] = [
      {
        id: '1',
        name: 'Hawkins Classic Pressure Cooker 1.5L',
        price: '₹1,125',
        originalPrice: '₹1,250',
        discount: '10% OFF',
        image: 'https://www.buyhawkins.in/pc_pix/CL15_1.webp',
        rating: 4.5,
        reviews: 128,
        features: ['1.5 Litre', 'Aluminium', 'Classic Design']
      },
      {
        id: '2',
        name: 'Hawkins Induction Classic 2L',
        price: '₹1,260',
        originalPrice: '₹1,400',
        discount: '10% OFF',
        image: 'https://www.buyhawkins.in/pc_pix/ICL2T_1.webp',
        rating: 4.3,
        reviews: 95,
        features: ['2 Litre', 'Induction Compatible', 'Tall Design']
      },
      {
        id: '3',
        name: 'Hawkins Classic Pressure Cooker 3L',
        price: '₹1,505',
        originalPrice: '₹1,675',
        discount: '10% OFF',
        image: 'https://www.buyhawkins.in/pc_pix/CL3T_1.webp',
        rating: 4.7,
        reviews: 156,
        features: ['3 Litre', 'Aluminium', 'Wide Design']
      },
      {
        id: '4',
        name: 'Hawkins Induction Classic 4L',
        price: '₹1,910',
        originalPrice: '₹2,125',
        discount: '10% OFF',
        image: 'https://www.buyhawkins.in/pc_pix/ICL2T_1.webp',
        rating: 4.4,
        reviews: 87,
        features: ['4 Litre', 'Induction Compatible', 'Classic Design']
      },
      {
        id: '5',
        name: 'Hawkins Classic Pressure Cooker 5L',
        price: '₹2,045',
        originalPrice: '₹2,275',
        discount: '10% OFF',
        image: 'https://www.buyhawkins.in/pc_pix/ICL50_1.webp',
        rating: 4.6,
        reviews: 203,
        features: ['5 Litre', 'Aluminium', 'With Separator']
      },
      {
        id: '6',
        name: 'Hawkins Induction Classic 6.5L',
        price: '₹2,295',
        originalPrice: '₹2,550',
        discount: '10% OFF',
        image: 'https://www.buyhawkins.in/pc_pix/ICL50_1.webp',
        rating: 4.2,
        reviews: 67,
        features: ['6.5 Litre', 'Induction Compatible', 'Tall Design']
      },
      {
        id: '7',
        name: 'Hawkins Classic Pressure Cooker 8L',
        price: '₹2,475',
        originalPrice: '₹2,750',
        discount: '10% OFF',
        image: 'https://www.buyhawkins.in/pc_pix/CL8T_1.webp',
        rating: 4.8,
        reviews: 134,
        features: ['8 Litre', 'Aluminium', 'Wide Design']
      },
      {
        id: '8',
        name: 'Hawkins Classic Pressure Cooker 10L',
        price: '₹2,880',
        originalPrice: '₹3,200',
        discount: '10% OFF',
        image: 'https://www.buyhawkins.in/pc_pix/CL8W_1.webp',
        rating: 4.5,
        reviews: 89,
        features: ['10 Litre', 'Aluminium', 'With Separator']
      }
    ];
    return baseProducts;
  }
};

export default ProductList; 