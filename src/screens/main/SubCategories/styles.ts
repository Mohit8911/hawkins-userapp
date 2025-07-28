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
    content: {
      flex: 1,
      paddingHorizontal: moderateScale(16),
    },
    listContainer: {
      paddingVertical: verticalScale(16),
    },
    subCategoryItem: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      backgroundColor: colors.surface,
      borderRadius: moderateScale(12),
      padding: moderateScale(16),
      marginBottom: verticalScale(12),
      shadowColor: colors.text,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    subCategoryIcon: {
      width: moderateScale(48),
      height: moderateScale(48),
      borderRadius: moderateScale(24),
      backgroundColor: commonColors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: isRTL ? 0 : moderateScale(16),
      marginLeft: isRTL ? moderateScale(16) : 0,
    },
    subCategoryIconText: {
      fontSize: moderateScale(24),
      color: colors.background,
    },
    subCategoryInfo: {
      flex: 1,
    },
    subCategoryName: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(16),
      color: colors.text,
      marginBottom: verticalScale(4),
      textAlign: isRTL ? 'right' : 'left',
    },
    subCategoryDescription: {
      fontFamily: fontFamily.regular,
      fontSize: moderateScale(14),
      color: colors.textSecondary,
      marginBottom: verticalScale(4),
      textAlign: isRTL ? 'right' : 'left',
    },
    subCategoryCount: {
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(12),
      color: commonColors.primary,
      textAlign: isRTL ? 'right' : 'left',
    },
    arrowContainer: {
      width: moderateScale(24),
      height: moderateScale(24),
      justifyContent: 'center',
      alignItems: 'center',
    },
    arrowIcon: {
      fontSize: moderateScale(18),
      color: colors.textSecondary,
      transform: [{ rotate: isRTL ? '180deg' : '0deg' }],
    },
  }), [isRTL, theme, colors]);
};

export default useRTLStyles; 