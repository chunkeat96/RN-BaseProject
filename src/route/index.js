import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import LandingPage from '../pages/landingPage';
import ProfileAction from '../redux/actions/profileAction';

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();

const Route = () => {
  useEffect(() => {
    async function initOnFirstLoad() {
      // init singleton class (without token)

      // init singleton class (with token)
      await ProfileAction.init();
    }
    initOnFirstLoad();
  });
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          animation: 'none',
          headerShown: false,
          contentStyle: {
            backgroundColor: '#FFFFFF',
          },
        }}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
