import React from 'react';
import { useState } from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator,
          DrawerContentScrollView,
          DrawerItemList,
         } from '@react-navigation/drawer';
import { Box, HStack, VStack, Text, Image, Pressable, Center, Divider} from "@gluestack-ui/themed";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AccountScreen from '../screens/AccountScreen';
import MyBooksScreen from '../screens/MyBooksScreen';
import WishlistScreen from '../screens/WishlistScreen';
import MyTheme from '../theme';

import bookData from "../json/books.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}

const CustomDrawerContent = (props) => {

  return (
    <DrawerContentScrollView {...props}
      contentContainerStyle={{ paddingTop: 0 }}
    >
      <Image
          h={50}
          w={50}
          borderRadius={999}
          mt={40}
          ml={15}
          mb={10}
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/a14c/921b/dcea36fbb59ee6c44fdec352c284fb5b?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AyaCYlh27eIYoF-2guDSrpqgnRLhWWxiDkXCz-VX5him7p~wdXuPxHXmtBs1dRFJdjagDxhdIyQlEXhiNk5MDGAisqZTEbT7cQboGeCAICLwZDbAboBQ06jHmPZSQ-DVQ3YNPWzZIkZgf2JsXxTZwD0TiskicoZeoIz~Vtg1INdOk-hJtuwSjJB-YcJQ0R2PIhpUZn4Jy-GMMQ3KkIk3ympb0RJpOxRYSDGQ3rwg9SQSwkqVwaHiOdXVTHfCsjp6WcEPpA8DF8ZkhV0sNWs-GNO-7C7PsCh74N0n7QN52hUhKllidmSTyxdJSIq~aZWcRcGczUud0mANI9CqkF58lw__'
          }}
          alt='peosonImage'
      />
       <Text fontWeight='500' fontSize={24} marginLeft={16} marginBottom={15}>
        May
      </Text>

      <DrawerItemList {...props} />
      
    </DrawerContentScrollView>
  );
}

const MyDrawer = () => {

  return (
    <Drawer.Navigator 
    initialRouteName="HomeStack"
    screenOptions={{
      drawerActiveBackgroundColor:'white',
      drawerActiveTintColor: '#6200EE',
      drawerInactiveTintColor: '#666666',
      drawerStyle: { width: 250 },
      drawerLabelStyle: { fontSize: 18, fontWeight: '400',lineHeight: 25},
    }}
    drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen 
        name="MyTabs" 
        component={MyTabs} 
        options={{
          headerShown: false,
          title: "Home",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26}/>
          ),
        }}
       
      />
      <Drawer.Screen 
        name="Account" 
        component={AccountStack} 
        options={{
          headerShown: false,
          title: "Account",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Settings" 
        component={SettingsStack} 
        options={{
          headerShown: false,
          title: "Settings",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
          // headerTitleStyle: {
          //   fontWeight: '400',
          //   fontSize: 20
          // },
        }}
      />
    </Drawer.Navigator>
  );  
}

const MyTabs = () => {
  
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarInactiveTintColor: '#666666',
        tabBarActiveTintColor: '#6200EE',
        tabBarStyle:{paddingBottom:5, paddingTop:5}
        // headerShown: false
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={27} />
          ),
        }}
      />
      <Tab.Screen 
        name="WishlistStack" 
        component={WishlistScreen} 
        options={{
          headerShown: false,
          title: "Wishlist",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={27} />
          ),
        }}
      />
      <Tab.Screen 
        name="MyBookStack" 
        component={MyBooksScreen} 
        options={{
          headerShown: false,
          title: "My Books",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={27} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const SettingsStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons 
              name={'menu'} 
              size={20} 
              onPress={() => navigation.openDrawer()}
              style={{marginRight: 20}}
            />            
          ),  
        }}
      />
      <Stack.Screen
        name="DisplaySetting"
        component={SettingsScreen}
        options={{
          title: "Display",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
    </Stack.Navigator>    
  );
}

const HomeStack = ({navigation}) => {
  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
    setToggle(!toggle);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: " ",
          // headerTitleStyle: {
          //   fontWeight: '400',
          //   fontSize: 20
          // },
          headerLeft: () => (
            <MaterialCommunityIcons 
              name={'menu'} 
              size={20} 
              onPress={() => navigation.openDrawer()}
              style={{marginRight: 20}}
            /> 
          ),  
          headerRight: () => (
            <MaterialCommunityIcons
              name={'magnify'}
              size={28}
              onPress={() => alert('查不到')}
            />
          )
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: " ",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              size={30}
              onPress={() => navigation.goBack(null)}
              style={{ marginLeft: 0 }}
            />
          ),
          headerRight: () => (
            <Pressable onPress={() => toggleFunction()}>
              {toggle ? <MaterialCommunityIcons name={'bookmark-outline'} color={'black'} size={26} /> :
                <MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={26} />}
            </Pressable>
          )
         
        }}
      />
    </Stack.Navigator>
  );
}

const AccountStack = ( {navigation} ) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "Account",
          // headerTitleStyle: {
          //   fontWeight: '400',
          //   fontSize: 20
          // },
          headerLeft: () => (
            <MaterialCommunityIcons
                name={'menu'}
                size={20}
                onPress={() => navigation.openDrawer()}
                style={{ marginRight: 20 }}
            />
        )
        }}
      />
     
    </Stack.Navigator>
  );
}

export default Navigation;