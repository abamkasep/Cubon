import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import TransaksiScreen from '../screens/TransaksiScreen';
import {DrawerContent} from '../screens/DrawerContent';

const HomeStack = createStackNavigator();
const TransaksiStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createMaterialBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => {
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        width: 140,
        heigh: 70,
        borderRadius: 35,
        backgroundColor: '#BEECC4',
      }}>
      {children}
    </View>
  </TouchableOpacity>;
};

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#BEECC4',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Beranda"
      component={HomeScreen}
      options={{
        headerTitle: false,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{marginLeft: 20}}>
            <Image
              source={require('../assets/account.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const TransaksiStackScreen = ({navigation}) => (
  <TransaksiStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#BEECC4',
      },
      headerTintColor: '#fff',
    }}>
    <TransaksiStack.Screen
      name="Catatan Transaksi"
      component={TransaksiScreen}
    />
  </TransaksiStack.Navigator>
);

const TabStack = () => (
  <Tab.Navigator
    initialRouteName="Beranda"
    barStyle={{
      backgroundColor: '#ffffff',
    }}
    tabBarOptions={{
      showLabel: false,
      style: {
        position: 'absolute',
        height: 80,
      },
    }}>
    <Tab.Screen
      name="Beranda"
      component={HomeStackScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={
                focused
                  ? require('../assets/home-active.png')
                  : require('../assets/home.png')
              }
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Transaksi"
      component={TransaksiStackScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={
                focused
                  ? require('../assets/order-active.png')
                  : require('../assets/order.png')
              }
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);
const AppStack = () => (
  <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen name="BerandaDrawer" component={TabStack} />
  </Drawer.Navigator>
);

export default AppStack;
