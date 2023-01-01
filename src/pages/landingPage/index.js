import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef, useState} from 'react';
import {AppState, BackHandler, Image, SafeAreaView} from 'react-native';
import {
  HomeActive,
  HomeInactive,
  MatchActive,
  MatchInactive,
  ProfileActive,
  ProfileInactive,
} from '../../assets';
import {Colors as AppColors} from '../../global/colors';
import HomePage from '../home';
import styles from './style';

const Tab = createBottomTabNavigator();

const LandingPage = () => {
  const appState = useRef(AppState.currentState);
  const [currentAppState, setCurrentAppState] = useState('');

  var backTimestamp = 0;

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        const timeDiff = Date.now() - backTimestamp;
        backTimestamp = Date.now();
        if (timeDiff < 2000) {
          return false;
        } else {
          showToast('再次点击退出应用');
          return true;
        }
      },
    );

    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setCurrentAppState(nextAppState);
      }

      appState.current = nextAppState;
      setCurrentAppState('');
    });

    return () => {
      subscription.remove();
      backHandler.remove();
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: {
            height: 55,
            paddingVertical: 4,
          },
          tabBarLabelStyle: {
            fontWeight: '500',
            fontSize: 11,
          },
          tabBarInactiveTintColor: AppColors.colorInactiveTab,
          tabBarActiveTintColor: AppColors.colorPrimary,
          tabBarStyle: {
            height: 55,
          },
        }}>
        <Tab.Screen
          name="HomePage"
          component={HomePage}
          options={{
            tabBarLabel: '首页',
            headerShown: false,
            tabBarIcon: props => (
              <Image
                style={[styles.tabBarIcon]}
                source={props.focused ? HomeActive : HomeInactive}
              />
            ),
          }}
        />
        <Tab.Screen
          name="MatchPage"
          component={HomePage}
          options={{
            tabBarLabel: '比赛',
            headerShown: false,
            tabBarIcon: props => (
              <Image
                style={[styles.tabBarIcon]}
                source={props.focused ? MatchActive : MatchInactive}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ProfilePage"
          component={HomePage}
          options={{
            tabBarLabel: '我的',
            headerShown: false,
            tabBarIcon: props => (
              <Image
                style={[styles.tabBarIcon]}
                source={props.focused ? ProfileActive : ProfileInactive}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default LandingPage;
