import { StyleSheet } from 'react-native';
import { Colors, ThemeType, commonColors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale, verticalScale } from '@/styles/scaling';
import { useMemo } from 'react';
import { width } from '@/styles/scaling';

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
    imageSection: {
      height: moderateScale(300),
      position: 'relative',
    },
    imageContainer: {
      width: width - 6,
      height: moderateScale(300),
    },
    productImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    imageIndicatorContainer: {
      position: 'absolute',
      bottom: moderateScale(16),
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageIndicator: {
      width: moderateScale(8),
      height: moderateScale(8),
      borderRadius: moderateScale(4),
      backgroundColor: colors.textSecondary,
      marginHorizontal: moderateScale(4),
    },
    activeImageIndicator: {
      backgroundColor: commonColors.primary,
    },
    productInfoSection: {
      padding: moderateScale(16),
      borderBottomWidth: 1,
      borderBottomColor: colors.surface,
    },
    productName: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(20),
      color: colors.text,
      marginBottom: moderateScale(8),
      textAlign: isRTL ? 'right' : 'left',
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: moderateScale(12),
    },
    starIcon: {
      fontSize: moderateScale(16),
      color: '#FFD700',
      marginRight: moderateScale(4),
    },
    ratingText: {
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(14),
      color: colors.textSecondary,
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: moderateScale(16),
    },
    currentPrice: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(24),
      color: commonColors.primary,
      marginRight: moderateScale(8),
    },
    originalPrice: {
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(16),
      color: colors.textSecondary,
      textDecorationLine: 'line-through',
      marginRight: moderateScale(8),
    },
    discountBadge: {
      backgroundColor: '#FF3B30',
      paddingHorizontal: moderateScale(8),
      paddingVertical: moderateScale(4),
      borderRadius: moderateScale(4),
    },
    discountText: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(12),
      color: '#FFFFFF',
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: moderateScale(20),
    },
    quantityLabel: {
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(16),
      color: colors.text,
    },
    quantitySelector: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.surface,
      borderRadius: moderateScale(8),
    },
    quantityButton: {
      width: moderateScale(40),
      height: moderateScale(40),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.surface,
    },
    quantityButtonText: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(18),
      color: colors.text,
    },
    quantityValue: {
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(16),
      color: colors.text,
      paddingHorizontal: moderateScale(16),
    },
    actionButtonsContainer: {
      flexDirection: 'row',
      gap: moderateScale(12),
    },
    addToCartButton: {
      flex: 1,
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: commonColors.primary,
    },
    addToCartButtonText: {
      color: commonColors.primary,
    },
    buyNowButton: {
      flex: 1,
      backgroundColor: commonColors.primary,
    },
    buyNowButtonText: {
      color: '#FFFFFF',
    },
    specificationsSection: {
      padding: moderateScale(16),
      borderBottomWidth: 1,
      borderBottomColor: colors.surface,
    },
    sectionTitle: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(18),
      color: colors.text,
      marginBottom: moderateScale(16),
      textAlign: isRTL ? 'right' : 'left',
    },
    specificationsList: {
      gap: moderateScale(12),
    },
    specificationItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    specificationLabel: {
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(14),
      color: colors.textSecondary,
    },
    specificationValue: {
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(14),
      color: colors.text,
      textAlign: isRTL ? 'left' : 'right',
    },
    featuresSection: {
      padding: moderateScale(16),
      borderBottomWidth: 1,
      borderBottomColor: colors.surface,
    },
    featureItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: moderateScale(8),
    },
    bulletPoint: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(16),
      color: commonColors.primary,
      marginRight: moderateScale(8),
      marginTop: moderateScale(2),
    },
    featureText: {
      fontFamily: fontFamily.regular,
      fontSize: moderateScale(14),
      color: colors.text,
      flex: 1,
      lineHeight: moderateScale(20),
    },
    descriptionSection: {
      padding: moderateScale(16),
      borderBottomWidth: 1,
      borderBottomColor: colors.surface,
    },
    descriptionText: {
      fontFamily: fontFamily.regular,
      fontSize: moderateScale(14),
      color: colors.text,
      lineHeight: moderateScale(20),
      textAlign: isRTL ? 'right' : 'left',
    },
    bulkOrdersSection: {
      padding: moderateScale(16),
      alignItems: 'center',
    },
    bulkOrdersText: {
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(14),
      color: commonColors.primary,
      textDecorationLine: 'underline',
    },
    shareButton: {
      position: 'absolute',
      top: moderateScale(16),
      right: moderateScale(16),
      paddingHorizontal: moderateScale(12),
      paddingVertical: moderateScale(6),
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderRadius: moderateScale(6),
      zIndex: 1,
    },
    shareButtonText: {
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(12),
      color: '#FFFFFF',
    },
  }), [isRTL, theme, colors]);
};

export default useRTLStyles; 