import { StyleSheet } from 'react-native';
import { Colors, ThemeType } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
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
      padding: moderateScale(16),
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(24),
      color: colors.text,
      textAlign: isRTL ? 'right' : 'left',
    },
  }), [isRTL, theme, colors]);
};

export default useRTLStyles; 