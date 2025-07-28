import React from 'react';
import { View, FlatList, Pressable, Image } from 'react-native';
import WrapperContainer from '@/components/WrapperContainer';
import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import { useTheme } from '@/context/ThemeContext';
import useIsRTL from '@/hooks/useIsRTL';
import useRTLStyles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SubCategory } from '../Home2/home2.types';

/**
 * SubCategories screen component that displays subcategories for a selected category
 */
const SubCategories = () => {
  const { theme } = useTheme();
  const isRTL = useIsRTL();
  const styles = useRTLStyles(isRTL, theme);
  const navigation = useNavigation();
  const route = useRoute();
  
  const { category, subcategories } = route.params as {
    category: { name: string; icon: string };
    subcategories: SubCategory[];
  };

  const renderSubCategoryItem = ({ item }: { item: SubCategory }) => (
    <Pressable 
      style={styles.subCategoryItem} 
      onPress={() => (navigation as any).navigate('ProductList', { 
        category: category.name,
        subcategory: item.name 
      })}
    >
      <View style={styles.subCategoryIcon}>
        <TextComp text={item.icon} style={styles.subCategoryIconText} />
      </View>
      <View style={styles.subCategoryInfo}>
        <TextComp text={item.name} style={styles.subCategoryName} />
        {item.description && (
          <TextComp text={item.description} style={styles.subCategoryDescription} />
        )}
        <TextComp text={item.count} style={styles.subCategoryCount} />
      </View>
      <View style={styles.arrowContainer}>
        <TextComp text="→" style={styles.arrowIcon} />
      </View>
    </Pressable>
  );

  return (
    <WrapperContainer style={styles.container}>
      <HeaderComp 
        title={category.name} 
        showBack={true}
      />
      
      <View style={styles.content}>
        <FlatList
          data={subcategories}
          renderItem={renderSubCategoryItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </WrapperContainer>
  );
};

export default SubCategories; 