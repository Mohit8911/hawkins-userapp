//import liraries
import ModalComp from '@/components/ModalComp';
import TextComp from '@/components/TextComp';
import { useTheme } from '@/context/ThemeContext';
import useIsRTL from '@/hooks/useIsRTL';
import { Colors, commonColors, ThemeType } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';
import React, { useMemo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSelector } from '@/redux/hooks';
import { useTranslation } from 'react-i18next';


// create a component
const MyTabBar = ({ state, descriptors, navigation }: any) => {
    const isRTL = useIsRTL();
    const { theme } = useTheme();
    const { t } = useTranslation();
    const styles = useRTLStyles(isRTL, theme);
    const colors = Colors[theme];
    const { totalItems } = useSelector((state) => state.cart);
    return (
        <View style={styles.container}>
            {state?.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({ type: 'tabLongPress', target: route.key });
                };

                const icon = options.tabBarIcon
                    ? options.tabBarIcon({
                        focused: isFocused,
                    })
                    : null;
                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.subContainer}
                    >
                        <View style={styles.iconContainer}>
                            {icon}
                            {route.name === 'Cart' && totalItems > 0 && (
                                <View style={styles.badge}>
                                    <TextComp
                                        text={totalItems.toString()}
                                        style={styles.badgeText}
                                    />
                                </View>
                            )}
                        </View>
                        <TextComp
                            text={route.name === 'Cart' ? 'CART' : route.name}
                            isDynamic={false}
                            style={{
                                color: isFocused ? commonColors.primary : colors.inputPlaceholder,
                                marginTop: moderateScale(8)
                            }}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

// define your styles

const useRTLStyles = (isRTL: boolean, theme: ThemeType) => {
    const colors = Colors[theme];
    return useMemo(() => StyleSheet.create({
        container: {
            flexDirection: isRTL ? 'row-reverse' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: colors.background,
            paddingHorizontal: moderateScale(30),
            minHeight: moderateScale(72),
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 3,
        },
        subContainer: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        iconContainer: {
            position: 'relative',
        },
        badge: {
            position: 'absolute',
            top: -5,
            right: -8,
            backgroundColor: commonColors.error,
            borderRadius: moderateScale(10),
            minWidth: moderateScale(20),
            height: moderateScale(20),
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: moderateScale(4),
        },
        badgeText: {
            color: commonColors.white,
            fontSize: moderateScale(10),
            fontFamily: 'Inter-Bold',
        },
    }), [isRTL, theme]);
};

//make this component available to the app
export default React.memo(MyTabBar);
