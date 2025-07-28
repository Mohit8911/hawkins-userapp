import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
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
    content: {
      flex: 1,
      paddingHorizontal: moderateScale(16),
    },
    profileHeader: {
      alignItems: 'center',
      paddingVertical: verticalScale(24),
      borderBottomWidth: 1,
      borderBottomColor: colors.inputBorder,
    },
    profileImage: {
      width: moderateScale(80),
      height: moderateScale(80),
      borderRadius: moderateScale(40),
      backgroundColor: colors.surface,
      marginBottom: verticalScale(12),
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileImageText: {
      fontSize: moderateScale(32),
      fontFamily: fontFamily.bold,
      color: commonColors.primary,
    },
    profileName: {
      fontSize: moderateScale(20),
      fontFamily: fontFamily.bold,
      color: colors.text,
      marginBottom: verticalScale(4),
      textAlign: 'center',
    },
    profileEmail: {
      fontSize: moderateScale(14),
      fontFamily: fontFamily.regular,
      color: colors.textSecondary,
      textAlign: 'center',
    },
    sectionContainer: {
      marginTop: verticalScale(24),
    },
    sectionTitle: {
      fontSize: moderateScale(18),
      fontFamily: fontFamily.bold,
      color: colors.text,
      marginBottom: verticalScale(16),
      textAlign: isRTL ? 'right' : 'left',
    },
    menuItem: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      paddingVertical: verticalScale(16),
      paddingHorizontal: moderateScale(16),
      backgroundColor: colors.surface,
      borderRadius: moderateScale(12),
      marginBottom: verticalScale(8),
    },
    menuItemIcon: {
      width: moderateScale(24),
      height: moderateScale(24),
      marginRight: isRTL ? 0 : moderateScale(12),
      marginLeft: isRTL ? moderateScale(12) : 0,
    },
    menuItemContent: {
      flex: 1,
    },
    menuItemTitle: {
      fontSize: moderateScale(16),
      fontFamily: fontFamily.medium,
      color: colors.text,
      textAlign: isRTL ? 'right' : 'left',
    },
    menuItemSubtitle: {
      fontSize: moderateScale(14),
      fontFamily: fontFamily.regular,
      color: colors.textSecondary,
      marginTop: verticalScale(2),
      textAlign: isRTL ? 'right' : 'left',
    },
    menuItemArrow: {
      width: moderateScale(16),
      height: moderateScale(16),
      marginLeft: isRTL ? 0 : moderateScale(8),
      marginRight: isRTL ? moderateScale(8) : 0,
    },
    orderCard: {
      backgroundColor: colors.surface,
      borderRadius: moderateScale(12),
      padding: moderateScale(16),
      marginBottom: verticalScale(12),
    },
    orderHeader: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: verticalScale(12),
    },
    orderId: {
      fontSize: moderateScale(16),
      fontFamily: fontFamily.bold,
      color: colors.text,
      textAlign: isRTL ? 'right' : 'left',
    },
    orderStatus: {
      fontSize: moderateScale(12),
      fontFamily: fontFamily.medium,
      paddingHorizontal: moderateScale(8),
      paddingVertical: verticalScale(4),
      borderRadius: moderateScale(12),
    },
    orderStatusPending: {
      backgroundColor: commonColors.warning + '20',
      color: commonColors.warning,
    },
    orderStatusConfirmed: {
      backgroundColor: commonColors.primary + '20',
      color: commonColors.primary,
    },
    orderStatusShipped: {
      backgroundColor: commonColors.info + '20',
      color: commonColors.info,
    },
    orderStatusDelivered: {
      backgroundColor: commonColors.success + '20',
      color: commonColors.success,
    },
    orderStatusCancelled: {
      backgroundColor: commonColors.error + '20',
      color: commonColors.error,
    },
    orderDetails: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    orderDate: {
      fontSize: moderateScale(14),
      fontFamily: fontFamily.regular,
      color: colors.textSecondary,
      textAlign: isRTL ? 'right' : 'left',
    },
    orderTotal: {
      fontSize: moderateScale(16),
      fontFamily: fontFamily.bold,
      color: colors.text,
      textAlign: isRTL ? 'right' : 'left',
    },
    contactCard: {
      backgroundColor: colors.surface,
      borderRadius: moderateScale(12),
      padding: moderateScale(16),
      marginBottom: verticalScale(12),
    },
    contactHeader: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      marginBottom: verticalScale(12),
    },
    contactIcon: {
      width: moderateScale(24),
      height: moderateScale(24),
      marginRight: isRTL ? 0 : moderateScale(12),
      marginLeft: isRTL ? moderateScale(12) : 0,
    },
    contactTitle: {
      fontSize: moderateScale(16),
      fontFamily: fontFamily.bold,
      color: colors.text,
      textAlign: isRTL ? 'right' : 'left',
    },
    contactValue: {
      fontSize: moderateScale(14),
      fontFamily: fontFamily.regular,
      color: commonColors.primary,
      textAlign: isRTL ? 'right' : 'left',
    },
    emptyState: {
      alignItems: 'center',
      paddingVertical: verticalScale(40),
    },
    emptyStateText: {
      fontSize: moderateScale(16),
      fontFamily: fontFamily.medium,
      color: colors.textSecondary,
      textAlign: 'center',
      marginTop: verticalScale(12),
    },
    scrollView: {
      flex: 1,
    },
    tabContainer: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      marginBottom: verticalScale(16),
      backgroundColor: colors.surface,
      borderRadius: moderateScale(12),
      padding: moderateScale(4),
    },
    tabButton: {
      flex: 1,
      paddingVertical: verticalScale(12),
      paddingHorizontal: moderateScale(16),
      borderRadius: moderateScale(8),
      alignItems: 'center',
    },
    activeTabButton: {
      backgroundColor: commonColors.primary,
    },
    tabButtonText: {
      fontSize: moderateScale(14),
      fontFamily: fontFamily.medium,
      color: colors.textSecondary,
    },
    activeTabButtonText: {
      color: commonColors.white,
    },
    infoCard: {
      backgroundColor: colors.surface,
      borderRadius: moderateScale(12),
      padding: moderateScale(16),
      marginBottom: verticalScale(16),
    },
    infoRow: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: verticalScale(8),
      borderBottomWidth: 1,
      borderBottomColor: colors.inputBorder,
    },
    infoLabel: {
      fontSize: moderateScale(14),
      fontFamily: fontFamily.medium,
      color: colors.textSecondary,
      textAlign: isRTL ? 'right' : 'left',
      flex: 1,
    },
    infoValue: {
      fontSize: moderateScale(14),
      fontFamily: fontFamily.regular,
      color: colors.text,
      textAlign: isRTL ? 'right' : 'left',
      flex: 2,
    },
    orderItems: {
      marginTop: verticalScale(8),
      paddingTop: verticalScale(8),
      borderTopWidth: 1,
      borderTopColor: colors.inputBorder,
    },
    orderItemsText: {
      fontSize: moderateScale(12),
      fontFamily: fontFamily.regular,
      color: colors.textSecondary,
      textAlign: isRTL ? 'right' : 'left',
    },
  }), [isRTL, theme, colors]);
};

export default useRTLStyles;