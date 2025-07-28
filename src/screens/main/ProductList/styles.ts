import { StyleSheet, Dimensions } from 'react-native';
import { Colors, ThemeType, commonColors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale, verticalScale } from '@/styles/scaling';
import { useMemo } from 'react';

const { width: screenWidth } = Dimensions.get('window');

const useRTLStyles = (isRTL: boolean, theme: ThemeType) => {
  const colors = Colors[theme];
  
  return useMemo(() => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      flex: 1,
    },
    listContainer: {
      paddingHorizontal: moderateScale(16),
      paddingBottom: verticalScale(20),
    },
    columnWrapper: {
      justifyContent: 'space-between',
    },
    headerContainer: {
      paddingVertical: verticalScale(16),
      borderBottomWidth: 1,
      borderBottomColor: colors.inputBorder,
      marginBottom: verticalScale(16),
    },
    headerTitle: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(20),
      color: colors.text,
      marginBottom: verticalScale(4),
      textAlign: isRTL ? 'right' : 'left',
    },
    productCount: {
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(14),
      color: colors.textSecondary,
      textAlign: isRTL ? 'right' : 'left',
    },
    productItem: {
      width: (screenWidth - moderateScale(48)) / 2, // Screen width minus padding and gap
      backgroundColor: colors.surface,
      borderRadius: moderateScale(12),
      marginBottom: verticalScale(16),
      shadowColor: commonColors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      overflow: 'hidden',
    },
    productImageContainer: {
      position: 'relative',
      width: '100%',
      height: moderateScale(160),
    },
    productImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    discountBadge: {
      position: 'absolute',
      top: moderateScale(8),
      left: moderateScale(8),
      backgroundColor: commonColors.error,
      paddingHorizontal: moderateScale(8),
      paddingVertical: moderateScale(4),
      borderRadius: moderateScale(12),
    },
    discountText: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(10),
      color: commonColors.white,
    },
    productInfo: {
      padding: moderateScale(12),
    },
    productName: {
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(14),
      color: colors.text,
      marginBottom: verticalScale(8),
      lineHeight: moderateScale(20),
      textAlign: isRTL ? 'right' : 'left',
    },
    priceContainer: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      marginBottom: verticalScale(6),
    },
    productPrice: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(16),
      color: colors.text,
      marginRight: isRTL ? 0 : moderateScale(8),
      marginLeft: isRTL ? moderateScale(8) : 0,
    },
    originalPrice: {
      fontFamily: fontFamily.regular,
      fontSize: moderateScale(12),
      color: colors.textSecondary,
      textDecorationLine: 'line-through',
    },
    ratingContainer: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      marginBottom: verticalScale(6),
    },
    starIcon: {
      fontSize: moderateScale(12),
      color: commonColors.warning,
      marginRight: isRTL ? 0 : moderateScale(4),
      marginLeft: isRTL ? moderateScale(4) : 0,
    },
    ratingText: {
      fontFamily: fontFamily.regular,
      fontSize: moderateScale(12),
      color: colors.textSecondary,
    },
    featuresContainer: {
      marginTop: verticalScale(4),
    },
    featureText: {
      fontFamily: fontFamily.regular,
      fontSize: moderateScale(10),
      color: colors.textSecondary,
      backgroundColor: colors.inputBorder,
      paddingHorizontal: moderateScale(6),
      paddingVertical: moderateScale(2),
      borderRadius: moderateScale(8),
      marginBottom: verticalScale(2),
      textAlign: isRTL ? 'right' : 'left',
    },
  }), [isRTL, theme, colors]);
};

export default useRTLStyles; 