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
    
    // Header Actions
    headerActions: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
    },
    headerAction: {
      padding: moderateScale(8),
      marginLeft: moderateScale(8),
    },
    headerActionIcon: {
      fontSize: moderateScale(20),
    },
    
    // Recipe Image
    imageContainer: {
      height: verticalScale(250),
      position: 'relative',
    },
    recipeImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    imageOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      padding: moderateScale(16),
    },
    recipeMeta: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    metaItem: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
    },
    metaIcon: {
      fontSize: moderateScale(16),
      marginRight: moderateScale(4),
      color: commonColors.white,
    },
    metaText: {
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(14),
      color: commonColors.white,
    },
    difficultyBadge: {
      paddingHorizontal: moderateScale(8),
      paddingVertical: moderateScale(4),
      borderRadius: moderateScale(4),
    },
    difficultyEasy: {
      backgroundColor: '#4CAF50',
    },
    difficultyMedium: {
      backgroundColor: '#FF9800',
    },
    difficultyHard: {
      backgroundColor: '#F44336',
    },
    difficultyText: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(12),
      color: commonColors.white,
    },
    
    // Content
    content: {
      padding: moderateScale(16),
    },
    recipeTitle: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(24),
      color: colors.text,
      marginBottom: moderateScale(8),
      textAlign: isRTL ? 'right' : 'left',
    },
    recipeCategory: {
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(16),
      color: commonColors.primary,
      marginBottom: moderateScale(12),
      textAlign: isRTL ? 'right' : 'left',
    },
    recipeDescription: {
      fontFamily: fontFamily.regular,
      fontSize: moderateScale(16),
      color: colors.textSecondary,
      lineHeight: moderateScale(24),
      marginBottom: verticalScale(24),
      textAlign: isRTL ? 'right' : 'left',
    },
    
    // Hawkins Products Section
    hawkinsSection: {
      backgroundColor: colors.surface,
      borderRadius: moderateScale(12),
      padding: moderateScale(16),
      marginBottom: verticalScale(24),
      borderLeftWidth: 4,
      borderLeftColor: commonColors.primary,
    },
    hawkinsDescription: {
      fontFamily: fontFamily.regular,
      fontSize: moderateScale(14),
      color: colors.textSecondary,
      marginBottom: moderateScale(12),
      textAlign: isRTL ? 'right' : 'left',
    },
    productsList: {
      marginTop: moderateScale(8),
    },
    productItem: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      marginBottom: moderateScale(8),
    },
    checkIcon: {
      fontSize: moderateScale(16),
      color: commonColors.primary,
      marginRight: moderateScale(8),
      fontFamily: fontFamily.bold,
    },
    productText: {
      fontFamily: fontFamily.medium,
      fontSize: moderateScale(14),
      color: colors.text,
      flex: 1,
      textAlign: isRTL ? 'right' : 'left',
    },
    
    // Sections
    section: {
      marginBottom: verticalScale(24),
    },
    sectionTitle: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(20),
      color: colors.text,
      marginBottom: verticalScale(16),
      textAlign: isRTL ? 'right' : 'left',
    },
    
    // Ingredients
    ingredientsList: {
      backgroundColor: colors.surface,
      borderRadius: moderateScale(12),
      padding: moderateScale(16),
    },
    ingredientItem: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'flex-start',
      marginBottom: moderateScale(8),
    },
    bulletPoint: {
      fontSize: moderateScale(16),
      color: commonColors.primary,
      marginRight: moderateScale(8),
      marginTop: moderateScale(2),
    },
    ingredientText: {
      fontFamily: fontFamily.regular,
      fontSize: moderateScale(16),
      color: colors.text,
      flex: 1,
      lineHeight: moderateScale(24),
      textAlign: isRTL ? 'right' : 'left',
    },
    
    // Instructions
    instructionsList: {
      backgroundColor: colors.surface,
      borderRadius: moderateScale(12),
      padding: moderateScale(16),
    },
    instructionItem: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'flex-start',
      marginBottom: verticalScale(16),
    },
    stepNumber: {
      width: moderateScale(28),
      height: moderateScale(28),
      borderRadius: moderateScale(14),
      backgroundColor: commonColors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: moderateScale(12),
    },
    stepNumberText: {
      fontFamily: fontFamily.bold,
      fontSize: moderateScale(14),
      color: commonColors.white,
    },
    instructionText: {
      fontFamily: fontFamily.regular,
      fontSize: moderateScale(16),
      color: colors.text,
      flex: 1,
      lineHeight: moderateScale(24),
      textAlign: isRTL ? 'right' : 'left',
    },
    
    // Cooking Tips
    tipsContainer: {
      backgroundColor: colors.surface,
      borderRadius: moderateScale(12),
      padding: moderateScale(16),
    },
    tipText: {
      fontFamily: fontFamily.regular,
      fontSize: moderateScale(16),
      color: colors.text,
      lineHeight: moderateScale(24),
      textAlign: isRTL ? 'right' : 'left',
    },
    
    // Action Buttons
    actionButtons: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      justifyContent: 'space-between',
      marginTop: verticalScale(16),
      marginBottom: verticalScale(32),
    },
    actionButton: {
      flex: 0.48,
    },
  }), [isRTL, theme, colors]);
};

export default useRTLStyles; 