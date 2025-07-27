import { StyleSheet } from 'react-native';
import { Colors, ThemeType, commonColors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale, verticalScale } from '@/styles/scaling';
import { useMemo } from 'react';

const { width: screenWidth } = require('react-native').Dimensions.get('window');

const useRTLStyles = (isRTL: boolean, theme: ThemeType) => {
  const colors = Colors[theme];
  
  return useMemo(() => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollView: {
      flex: 1,
    },
    
    // Banner Section
    bannerSection: {
      height: verticalScale(200),
      marginBottom: verticalScale(20),
    },
    bannerContainer: {
      width: screenWidth,
      height: verticalScale(200),
      position: 'relative',
    },
    bannerImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    bannerOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: moderateScale(16),
    },
    bannerTitle: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(18),
      color: '#FFFFFF',
      marginBottom: moderateScale(4),
    },
    bannerSubtitle: {
      fontFamily: fontFamily.regular,
      fontSize: moderateScale(14),
      color: '#FFFFFF',
      opacity: 0.9,
    },
    indicatorContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: moderateScale(10),
      left: 0,
      right: 0,
    },
    indicator: {
      width: moderateScale(8),
      height: moderateScale(8),
      borderRadius: moderateScale(4),
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      marginHorizontal: moderateScale(4),
    },
    activeIndicator: {
      backgroundColor: commonColors.white,
      width: moderateScale(20),
    },
    
    // Section Styles
    section: {
      marginBottom: verticalScale(24),
      paddingHorizontal: moderateScale(16),
    },
    sectionTitle: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(20),
      color: colors.text,
      marginBottom: verticalScale(16),
      textAlign: isRTL ? 'right' : 'left',
    },
    
    // Categories
    categoriesContainer: {
      paddingRight: moderateScale(16),
    },
    categoryItem: {
      alignItems: 'center',
      marginRight: moderateScale(20),
      width: moderateScale(80),
    },
    categoryIcon: {
      width: moderateScale(60),
      height: moderateScale(60),
      borderRadius: moderateScale(30),
      backgroundColor: commonColors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: moderateScale(8),
    },
    categoryIconText: {
      fontSize: moderateScale(24),
    },
    categoryName: {
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(12),
      color: colors.text,
      textAlign: 'center',
      marginBottom: moderateScale(4),
    },
    categoryCount: {
      fontFamily: fontFamily.regular,
      fontSize: moderateScale(10),
      color: colors.textSecondary,
      textAlign: 'center',
    },
    
    // Featured Products
    productsContainer: {
      paddingRight: moderateScale(16),
      marginBottom: verticalScale(24),
    },
    productItem: {
      width: moderateScale(160),
      marginRight: moderateScale(16),
      backgroundColor: colors.surface,
      borderRadius: moderateScale(12),
      overflow: 'hidden',
      elevation: 2,
      shadowColor: commonColors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    productImage: {
      width: '100%',
      height: moderateScale(120),
      resizeMode: 'cover',
    },
    productInfo: {
      padding: moderateScale(12),
    },
    productName: {
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(14),
      color: colors.text,
      marginBottom: moderateScale(8),
      textAlign: isRTL ? 'right' : 'left',
    },
    priceContainer: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      marginBottom: moderateScale(8),
    },
    productPrice: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(16),
      color: commonColors.primary,
      marginRight: moderateScale(8),
    },
    originalPrice: {
      fontFamily: fontFamily.regular,
      fontSize: moderateScale(12),
      color: colors.textSecondary,
      textDecorationLine: 'line-through',
      marginRight: moderateScale(8),
    },
    discountBadge: {
      backgroundColor: commonColors.secondary,
      paddingHorizontal: moderateScale(6),
      paddingVertical: moderateScale(2),
      borderRadius: moderateScale(4),
    },
    discountText: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(10),
      color: commonColors.white,
    },
    ratingContainer: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
    },
    starIcon: {
      fontSize: moderateScale(12),
      color: '#FFD700',
      marginRight: moderateScale(4),
    },
    ratingText: {
      fontFamily: fontFamily.regular,
      fontSize: moderateScale(12),
      color: colors.textSecondary,
    },
  }), [isRTL, theme, colors]);
};

export default useRTLStyles; 