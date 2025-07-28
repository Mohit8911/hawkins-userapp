import React, { useState } from 'react';
import { View, ScrollView, Image, TouchableOpacity, Share } from 'react-native';
import WrapperContainer from '@/components/WrapperContainer';
import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import ButtonComp from '@/components/ButtonComp';
import { useTheme } from '@/context/ThemeContext';
import useIsRTL from '@/hooks/useIsRTL';
import useRTLStyles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Recipe } from '@/screens/main/Home2/home2.types';
import { Colors } from '@/styles/colors';

interface RouteParams {
  recipe: Recipe;
}

/**
 * Recipe Detail Screen
 * Displays full recipe with ingredients, instructions, and Hawkins product recommendations
 */
const RecipeDetail = () => {
  const { theme } = useTheme();
  const isRTL = useIsRTL();
  const styles = useRTLStyles(isRTL, theme);
  const navigation = useNavigation();
  const route = useRoute();
  const { recipe } = route.params as RouteParams;
  const colors = Colors[theme];
  
  const [isSaved, setIsSaved] = useState(false);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out this amazing ${recipe.name} recipe! Made with Hawkins cookware for perfect results.`,
        title: recipe.name,
      });
    } catch (error) {
      console.error('Error sharing recipe:', error);
    }
  };

  const handleSaveRecipe = () => {
    setIsSaved(!isSaved);
    // TODO: Implement save to favorites functionality
  };

  const getHawkinsProducts = () => {
    const productMap: { [key: string]: string[] } = {
      'Rice & other grains': [
        'Hawkins Futura Hard Anodised Pressure Cooker (FP20/FP40)',
        'Hawkins Classic Pressure Cooker',
        'Hawkins Stainless Steel Cookware Set'
      ],
      'Poultry': [
        'Hawkins Futura Hard Anodised Pressure Cooker (FP60)',
        'Hawkins Bigboy Pressure Cooker',
        'Hawkins Stainless Steel Handi'
      ],
      'Paneer': [
        'Hawkins Nonstick Frying Pan',
        'Hawkins Hard Anodised Cookware',
        'Hawkins Stainless Steel Saucepan'
      ],
      'Legumes, dals & curries': [
        'Hawkins Futura Pressure Cooker',
        'Hawkins Classic Pressure Cooker',
        'Hawkins Stainless Steel Handi'
      ],
      'Pizza': [
        'Hawkins Nonstick Pizza Pan',
        'Hawkins Hard Anodised Tava',
        'Hawkins Stainless Steel Cookware'
      ],
      'Seafood': [
        'Hawkins Nonstick Frying Pan',
        'Hawkins Stainless Steel Cookware',
        'Hawkins Hard Anodised Saucepan'
      ]
    };
    
    return productMap[recipe.category] || [
      'Hawkins Futura Pressure Cooker',
      'Hawkins Stainless Steel Cookware',
      'Hawkins Nonstick Cookware'
    ];
  };

  const hawkinsProducts = getHawkinsProducts();

  return (
    <WrapperContainer style={styles.container}>
      <HeaderComp 
        title="RECIPE_DETAIL" 
        showBack={true}
      />
      
      {/* Custom Header Actions */}
      <View style={styles.headerActions}>
        <TouchableOpacity style={styles.headerAction} onPress={handleShare}>
          <TextComp text="📤" style={styles.headerActionIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerAction} onPress={handleSaveRecipe}>
          <TextComp text={isSaved ? "❤️" : "🤍"} style={styles.headerActionIcon} />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Recipe Image */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
          <View style={styles.imageOverlay}>
            <View style={styles.recipeMeta}>
              <View style={styles.metaItem}>
                <TextComp text="⏱" style={styles.metaIcon} />
                <TextComp text={recipe.cookingTime} style={styles.metaText} />
              </View>
              <View style={styles.metaItem}>
                <TextComp text="👥" style={styles.metaIcon} />
                <TextComp text={recipe.servings} style={styles.metaText} />
              </View>
              <View style={[styles.difficultyBadge, styles[`difficulty${recipe.difficulty}`]]}>
                <TextComp text={recipe.difficulty} style={styles.difficultyText} />
              </View>
            </View>
          </View>
        </View>

        {/* Recipe Info */}
        <View style={styles.content}>
          <TextComp text={recipe.name} style={styles.recipeTitle} />
          <TextComp text={recipe.category} style={styles.recipeCategory} />
          <TextComp text={recipe.description} style={styles.recipeDescription} />

          {/* Hawkins Products Section */}
          <View style={styles.hawkinsSection}>
            <TextComp text="RECOMMENDED_HAWKINS_PRODUCTS" style={styles.sectionTitle} />
            <TextComp text="HAWKINS_PRODUCTS_DESCRIPTION" style={styles.hawkinsDescription} />
            <View style={styles.productsList}>
              {hawkinsProducts.map((product, index) => (
                <View key={index} style={styles.productItem}>
                  <TextComp text="✓" style={styles.checkIcon} />
                  <TextComp text={product} style={styles.productText} />
                </View>
              ))}
            </View>
          </View>

          {/* Ingredients Section */}
          <View style={styles.section}>
            <TextComp text="INGREDIENTS" style={styles.sectionTitle} />
            <View style={styles.ingredientsList}>
              {recipe.ingredients.map((ingredient, index) => (
                <View key={index} style={styles.ingredientItem}>
                  <TextComp text="•" style={styles.bulletPoint} />
                  <TextComp text={ingredient} style={styles.ingredientText} />
                </View>
              ))}
            </View>
          </View>

          {/* Instructions Section */}
          <View style={styles.section}>
            <TextComp text="INSTRUCTIONS" style={styles.sectionTitle} />
            <View style={styles.instructionsList}>
              {recipe.instructions.map((instruction, index) => (
                <View key={index} style={styles.instructionItem}>
                  <View style={styles.stepNumber}>
                    <TextComp text={`${index + 1}`} style={styles.stepNumberText} />
                  </View>
                  <TextComp text={instruction} style={styles.instructionText} />
                </View>
              ))}
            </View>
          </View>

          {/* Cooking Tips */}
          <View style={styles.section}>
            <TextComp text="COOKING_TIPS" style={styles.sectionTitle} />
            <View style={styles.tipsContainer}>
              <TextComp text="HAWKINS_COOKING_TIPS" style={styles.tipText} />
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <ButtonComp
              title="SHARE_RECIPE"
              onPress={handleShare}
              variant="secondary"
              style={styles.actionButton}
            />
            <ButtonComp
              title={isSaved ? "RECIPE_SAVED" : "SAVE_RECIPE"}
              onPress={handleSaveRecipe}
              variant="primary"
              style={styles.actionButton}
            />
          </View>
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default RecipeDetail; 