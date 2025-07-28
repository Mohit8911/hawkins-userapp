import React, { useState } from 'react';
import { View, ScrollView, Pressable, Alert, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

// Components
import WrapperContainer from '@/components/WrapperContainer';
import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import ButtonComp from '@/components/ButtonComp';

// Hooks and Context
import { useTheme } from '@/context/ThemeContext';
import useIsRTL from '@/hooks/useIsRTL';
import { useSelector, useDispatch } from '@/redux/hooks';

// Actions and Types
import actions from '@/redux/actions';
import { Order } from '@/models/Order';
import { CartItem } from '@/models/Cart';

// Styles
import useRTLStyles from './styles';
import { commonColors } from '@/styles/colors';

/**
 * Profile screen component with horizontal tabs for Profile, Orders, and Contact
 */
const Profile = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { theme } = useTheme();
  const isRTL = useIsRTL();
  const styles = useRTLStyles(isRTL, theme);
  const dispatch = useDispatch();
  
  // Redux state
  const userData = useSelector((state) => state.auth.userData);
  const cartItems = useSelector((state) => state.cart.items);
  
  // Local state
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'contact'>('profile');
  
  // Mock order data based on cart items - in real app, this would come from API
  const mockOrders: Order[] = cartItems.length > 0 ? [
    {
      id: '1',
      orderNumber: 'ORD-2024-001',
      date: '2024-01-15',
      status: 'delivered',
      total: '$299.99',
      items: cartItems.map((item, index) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      })),
      shippingAddress: {
        address: '123 Main Street',
        city: 'Mumbai',
        state: 'Maharashtra',
        zipCode: '400001',
        country: 'India',
      },
      paymentMethod: 'Credit Card',
      trackingNumber: 'TRK123456789',
    },
    {
      id: '2',
      orderNumber: 'ORD-2024-002',
      date: '2024-01-20',
      status: 'shipped',
      total: '$149.99',
      items: cartItems.slice(0, 2).map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      })),
      shippingAddress: {
        address: '123 Main Street',
        city: 'Mumbai',
        state: 'Maharashtra',
        zipCode: '400001',
        country: 'India',
      },
      paymentMethod: 'UPI',
      trackingNumber: 'TRK987654321',
    },
  ] : [];

  // Helper functions
  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return styles.orderStatusPending;
      case 'confirmed':
        return styles.orderStatusConfirmed;
      case 'shipped':
        return styles.orderStatusShipped;
      case 'delivered':
        return styles.orderStatusDelivered;
      case 'cancelled':
        return styles.orderStatusCancelled;
      default:
        return styles.orderStatusPending;
    }
  };

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return t('PENDING');
      case 'confirmed':
        return t('CONFIRMED');
      case 'shipped':
        return t('SHIPPED');
      case 'delivered':
        return t('DELIVERED');
      case 'cancelled':
        return t('CANCELLED');
      default:
        return t('PENDING');
    }
  };

  const handleLogout = () => {
    Alert.alert(
      t('LOGOUT'),
      'Are you sure you want to logout?',
      [
        { text: t('CANCEL'), style: 'cancel' },
        {
          text: t('LOGOUT'),
          style: 'destructive',
          onPress: () => actions.clearDataAction(),
        },
      ]
    );
  };

  const renderProfileHeader = () => (
    <View style={styles.profileHeader}>
      <View style={styles.profileImage}>
        <Image source={{ uri: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg' }} style={{ width: 100, height: 100, borderRadius: 100 }} />
      </View>
      <TextComp
        text={`Mohit Bhardwaj`}
        style={styles.profileName}
        isDynamic
      />
      <TextComp
        text={'mohit@gmail.com'}
        style={styles.profileEmail}
        isDynamic
      />
    </View>
  );

  const renderTabButtons = () => (
    <View style={styles.tabContainer}>
      {[
        { key: 'profile', title: t('USER_PROFILE') },
        { key: 'orders', title: t('ORDER_HISTORY') },
        { key: 'contact', title: t('CONTACT_US') },
      ].map((tab) => (
        <Pressable
          key={tab.key}
          style={[
            styles.tabButton,
            activeTab === tab.key && styles.activeTabButton
          ]}
          onPress={() => setActiveTab(tab.key as any)}
        >
          <TextComp
            text={tab.title}
            style={[
              styles.tabButtonText,
              activeTab === tab.key && styles.activeTabButtonText
            ]}
            isDynamic
          />
        </Pressable>
      ))}
    </View>
  );

  const renderProfileSection = () => (
    <View style={styles.sectionContainer}>
      <TextComp text="PERSONAL_INFORMATION" style={styles.sectionTitle} />
      
      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <TextComp text="FULL_NAME" style={styles.infoLabel} />
          <TextComp 
            text={"Mohit Bhardwaj"} 
            style={styles.infoValue} 
            isDynamic 
          />
        </View>
        
        <View style={styles.infoRow}>
          <TextComp text="EMAIL_ADDRESS" style={styles.infoLabel} />
          <TextComp 
            text={'mohit@gmail.com'} 
            style={styles.infoValue} 
            isDynamic 
          />
        </View>
        
        <View style={styles.infoRow}>
          <TextComp text="PHONE" style={styles.infoLabel} />
          <TextComp 
            text={userData.phone || '+91 6239719929'} 
            style={styles.infoValue} 
            isDynamic 
          />
        </View>
        
        <View style={styles.infoRow}>
          <TextComp text="GENDER" style={styles.infoLabel} />
          <TextComp 
            text={userData.gender || t('Male')} 
            style={styles.infoValue} 
            isDynamic 
          />
        </View>
      </View>
      
      <ButtonComp
        title="LOGOUT"
        onPress={handleLogout}
        variant="secondary"
        style={{ marginTop: 24 }}
      />
    </View>
  );

  const renderOrderHistory = () => (
    <View style={styles.sectionContainer}>
      <TextComp text="ORDER_HISTORY" style={styles.sectionTitle} />
      
      {mockOrders.length > 0 ? (
        mockOrders.map((order) => (
          <Pressable key={order.id} style={styles.orderCard} onPress={() => Alert.alert('Order Details', `Order ${order.orderNumber}`)}>
            <View style={styles.orderHeader}>
              <TextComp text={`${t('ORDER_ID')}: ${order.orderNumber}`} style={styles.orderId} />
              <View style={[styles.orderStatus, getStatusColor(order.status)]}>
                <TextComp text={getStatusText(order.status)} style={{ color: 'inherit' }} isDynamic />
              </View>
            </View>
            <View style={styles.orderDetails}>
              <TextComp text={`${t('ORDER_DATE')}: ${order.date}`} style={styles.orderDate} />
              <TextComp text={`${t('ORDER_TOTAL')}: ${order.total}`} style={styles.orderTotal} />
            </View>
            <View style={styles.orderItems}>
              <TextComp text={`${t('ITEMS')}: ${order.items.length}`} style={styles.orderItemsText} />
            </View>
          </Pressable>
        ))
      ) : (
        <View style={styles.emptyState}>
          <TextComp text="NO_ORDERS_FOUND" style={styles.emptyStateText} />
        </View>
      )}
    </View>
  );

  const renderContactSection = () => (
    <View style={styles.sectionContainer}>
      <TextComp text="CONTACT_US" style={styles.sectionTitle} />
      
      <View style={styles.contactCard}>
        <TextComp text="HEAD_OFFICE" style={styles.contactTitle} />
        <TextComp
          text="New Udyog Mandir II, Pitamber Lane, Mahim West, Mumbai- 400016, Maharashtra, India"
          style={styles.contactValue}
          isDynamic
        />
      </View>
      
      <View style={styles.contactCard}>
        <TextComp text="REGISTERED_OFFICE" style={styles.contactTitle} />
        <TextComp
          text="Hawkins Cookers Ltd. , Maker Tower, Cuffe Parade, Mumbai- 400005, Maharashtra, India"
          style={styles.contactValue}
          isDynamic
        />
      </View>
      
      <View style={styles.contactCard}>
        <TextComp text="PHONE_NUMBER_1" style={styles.contactTitle} />
        <TextComp
          text="+91-22-2444 0807"
          style={styles.contactValue}
          isDynamic
        />
      </View>
      
      <View style={styles.contactCard}>
        <TextComp text="PHONE_NUMBER_2" style={styles.contactTitle} />
        <TextComp
          text="+91-22-4242 6200"
          style={styles.contactValue}
          isDynamic
        />
      </View>
      
      <View style={styles.contactCard}>
        <TextComp text="EMAIL_ENQUIRY" style={styles.contactTitle} />
        <TextComp
          text="enquiry@hawkinscookers.com"
          style={styles.contactValue}
          isDynamic
        />
      </View>
      
      <View style={styles.contactCard}>
        <TextComp text="CIN" style={styles.contactTitle} />
        <TextComp
          text="L28997MH1959PLC011304"
          style={styles.contactValue}
          isDynamic
        />
      </View>
    </View>
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'profile':
        return renderProfileSection();
      case 'orders':
        return renderOrderHistory();
      case 'contact':
        return renderContactSection();
      default:
        return renderProfileSection();
    }
  };

  return (
    <WrapperContainer style={styles.container}>
      <HeaderComp showBack={false} title="PROFILE" />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {renderProfileHeader()}
        {renderTabButtons()}
        {renderActiveTab()}
      </ScrollView>
    </WrapperContainer>
  );
};

export default Profile;
