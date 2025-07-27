import React from 'react';
import { View } from 'react-native';
import WrapperContainer from '@/components/WrapperContainer';
import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import { useTheme } from '@/context/ThemeContext';
import useIsRTL from '@/hooks/useIsRTL';
import useRTLStyles from './styles';

/**
 * ProductDetail screen component
 */
const ProductDetail = () => {
  const { theme } = useTheme();
  const isRTL = useIsRTL();
  const styles = useRTLStyles(isRTL, theme);
  
  return (
    <WrapperContainer style={styles.container}>
      <HeaderComp title="PRODUCT_DETAIL" showBack={true} />
      
      <View style={styles.content}>
        <TextComp text="PRODUCT_DETAIL_SCREEN" style={styles.title} />
      </View>
    </WrapperContainer>
  );
};

export default ProductDetail; 