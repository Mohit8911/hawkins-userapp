import React from 'react';
import { View, ScrollView, Image, Pressable, Alert } from 'react-native';
import WrapperContainer from '@/components/WrapperContainer';
import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import ButtonComp from '@/components/ButtonComp';
import { useTheme } from '@/context/ThemeContext';
import useIsRTL from '@/hooks/useIsRTL';
import useRTLStyles from './styles';
import { useSelector, useDispatch } from '@/redux/hooks';
import actions from '@/redux/actions';
import { useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '@/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

type CartNavigationProp = NativeStackNavigationProp<MainStackParamList, 'Cart'>;

/**
 * Cart screen component
 */
const Cart = () => {
  const { theme } = useTheme();
  const isRTL = useIsRTL();
  const { t } = useTranslation();
  const styles = useRTLStyles(isRTL, theme);
  const navigation = useNavigation<CartNavigationProp>();
  const dispatch = useDispatch();
  
  const { items, totalItems, subtotal } = useSelector((state) => state.cart);

  const handleQuantityChange = (id: string, increment: boolean) => {
    const item = items.find(item => item.id === id);
    if (item) {
      const newQuantity = increment ? item.quantity + 1 : Math.max(1, item.quantity - 1);
      dispatch(actions.updateItemQuantity(id, newQuantity));
    }
  };

  const handleRemoveItem = (id: string) => {
    Alert.alert(
      t('REMOVE_ITEM'),
      t('REMOVE_ITEM_CONFIRMATION'),
      [
        { text: t('CANCEL'), style: 'cancel' },
        { text: t('REMOVE'), style: 'destructive', onPress: () => dispatch(actions.removeItemFromCart(id)) }
      ]
    );
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      Alert.alert(t('CART_EMPTY'), t('CART_EMPTY_MESSAGE'));
      return;
    }
    
    Alert.alert(
      'Confirm Order',
      'Your order will be placed with Cash on Delivery. Continue?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Confirm', 
          onPress: () => {
            dispatch(actions.clearCartAction());
            Alert.alert(
              'Order Placed Successfully',
              'Your order has been placed successfully. You will receive a confirmation shortly.',
              [{ text: 'OK', onPress: () => navigation.navigate('Home') }]
            );
          }
        }
      ]
    );
  };

  const formatPrice = (price: string) => {
    return price.replace(/[^\d.]/g, '');
  };

  const renderCartItem = (item: any) => (
    <View key={item.id} style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      
      <View style={styles.itemDetails}>
        <TextComp text={item.name} style={styles.itemName} />
        <TextComp text={`₹${formatPrice(item.price)}`} style={styles.itemPrice} />
        
        <View style={styles.quantityContainer}>
          <Pressable 
            style={styles.quantityButton} 
            onPress={() => handleQuantityChange(item.id, false)}
          >
            <TextComp text="-" style={styles.quantityButtonText} />
          </Pressable>
          <TextComp text={item.quantity.toString()} style={styles.quantityValue} />
          <Pressable 
            style={styles.quantityButton} 
            onPress={() => handleQuantityChange(item.id, true)}
          >
            <TextComp text="+" style={styles.quantityButtonText} />
          </Pressable>
        </View>
      </View>
      
      <Pressable 
        style={styles.removeButton} 
        onPress={() => handleRemoveItem(item.id)}
      >
        <TextComp text="REMOVE" style={styles.removeButtonText} />
      </Pressable>
    </View>
  );

  const renderEmptyCart = () => (
    <View style={styles.emptyCartContainer}>
      <TextComp text="CART_EMPTY" style={styles.emptyCartTitle} />
      <TextComp text="CART_EMPTY_MESSAGE" style={styles.emptyCartMessage} />
      <ButtonComp
        title="CONTINUE_SHOPPING"
        onPress={() => navigation.navigate('Home')}
        style={styles.continueShoppingButton}
      />
    </View>
  );

  return (
    <WrapperContainer style={styles.container}>
      <HeaderComp title="SHOPPING_CART" showBack={false} />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {items.length === 0 ? (
          renderEmptyCart()
        ) : (
          <>
            {/* Cart Items */}
            <View style={styles.cartItemsContainer}>
              {items.map(renderCartItem)}
            </View>

            {/* Order Summary */}
            <View style={styles.orderSummaryContainer}>
              <TextComp text="ORDER_SUMMARY" style={styles.orderSummaryTitle} />
              
              <View style={styles.summaryRow}>
                <TextComp text="ITEMS" style={styles.summaryLabel} />
                <TextComp text={totalItems.toString()} style={styles.summaryValue} />
              </View>
              
              <View style={styles.summaryRow}>
                <TextComp text="SUBTOTAL" style={styles.summaryLabel} />
                <TextComp text={`₹${subtotal.toFixed(2)}`} style={styles.summaryValue} />
              </View>
              
              <View style={styles.summaryRow}>
                <TextComp text="TOTAL" style={styles.totalLabel} />
                <TextComp text={`₹${subtotal.toFixed(2)}`} style={styles.totalValue} />
              </View>
              
              <View style={styles.paymentMethodContainer}>
                <TextComp text="PAYMENT_METHOD" style={styles.paymentMethodLabel} />
                <TextComp text="CASH_ON_DELIVERY" style={styles.paymentMethodValue} />
              </View>
            </View>

            {/* Checkout Button */}
            <View style={styles.checkoutContainer}>
              <ButtonComp
                title="PROCEED_TO_CHECKOUT"
                onPress={handleCheckout}
                style={styles.checkoutButton}
              />
            </View>
          </>
        )}
      </ScrollView>
    </WrapperContainer>
  );
};

export default Cart; 