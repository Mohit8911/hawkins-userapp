import { StyleSheet } from 'react-native';
import { Colors, ThemeType, commonColors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale, verticalScale } from '@/styles/scaling';
import { useMemo } from 'react';

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
    emptyCartContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: moderateScale(20),
      paddingVertical: verticalScale(50),
    },
    emptyCartTitle: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(24),
      color: colors.text,
      marginBottom: moderateScale(10),
      textAlign: 'center',
    },
    emptyCartMessage: {
      fontFamily: fontFamily.regular,
      fontSize: moderateScale(16),
      color: colors.textSecondary,
      marginBottom: moderateScale(30),
      textAlign: 'center',
    },
    continueShoppingButton: {
      backgroundColor: commonColors.primary,
      paddingHorizontal: moderateScale(30),
      paddingVertical: moderateScale(12),
      borderRadius: moderateScale(8),
    },
    cartItemsContainer: {
      paddingHorizontal: moderateScale(16),
      paddingVertical: moderateScale(10),
    },
    cartItem: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      backgroundColor: colors.surface,
      borderRadius: moderateScale(12),
      padding: moderateScale(16),
      marginBottom: moderateScale(12),
      alignItems: 'center',
    },
    itemImage: {
      width: moderateScale(80),
      height: moderateScale(80),
      borderRadius: moderateScale(8),
      marginRight: isRTL ? 0 : moderateScale(12),
      marginLeft: isRTL ? moderateScale(12) : 0,
    },
    itemDetails: {
      flex: 1,
    },
    itemName: {
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(16),
      color: colors.text,
      marginBottom: moderateScale(4),
    },
    itemPrice: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(18),
      color: commonColors.primary,
      marginBottom: moderateScale(8),
    },
    quantityContainer: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
    },
    quantityButton: {
      backgroundColor: commonColors.primary,
      width: moderateScale(32),
      height: moderateScale(32),
      borderRadius: moderateScale(16),
      justifyContent: 'center',
      alignItems: 'center',
    },
    quantityButtonText: {
      color: colors.background,
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(18),
    },
    quantityValue: {
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(16),
      color: colors.text,
      marginHorizontal: moderateScale(12),
      minWidth: moderateScale(30),
      textAlign: 'center',
    },
    removeButton: {
      backgroundColor: commonColors.error,
      paddingHorizontal: moderateScale(12),
      paddingVertical: moderateScale(6),
      borderRadius: moderateScale(6),
    },
    removeButtonText: {
      color: colors.background,
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(12),
    },
    orderSummaryContainer: {
      backgroundColor: colors.surface,
      marginHorizontal: moderateScale(16),
      marginVertical: moderateScale(20),
      borderRadius: moderateScale(12),
      padding: moderateScale(20),
    },
    orderSummaryTitle: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(20),
      color: colors.text,
      marginBottom: moderateScale(16),
      textAlign: isRTL ? 'right' : 'left',
    },
    summaryRow: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: moderateScale(12),
    },
    summaryLabel: {
      fontFamily: fontFamily.regular,
      fontSize: moderateScale(16),
      color: colors.textSecondary,
    },
    summaryValue: {
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(16),
      color: colors.text,
    },
    totalLabel: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(18),
      color: colors.text,
    },
    totalValue: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(18),
      color: commonColors.primary,
    },
    paymentMethodContainer: {
      marginTop: moderateScale(16),
      paddingTop: moderateScale(16),
      borderTopWidth: 1,
      borderTopColor: colors.inputBorder,
    },
    paymentMethodLabel: {
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(16),
      color: colors.text,
      marginBottom: moderateScale(4),
      textAlign: isRTL ? 'right' : 'left',
    },
    paymentMethodValue: {
      fontFamily: fontFamily.regular,
      fontSize: moderateScale(14),
      color: colors.textSecondary,
      textAlign: isRTL ? 'right' : 'left',
    },
    checkoutContainer: {
      paddingHorizontal: moderateScale(16),
      paddingBottom: moderateScale(20),
    },
    checkoutButton: {
      backgroundColor: commonColors.primary,
      paddingVertical: moderateScale(16),
      borderRadius: moderateScale(12),
    },
  }), [isRTL, theme, colors]);
};

export default useRTLStyles; 