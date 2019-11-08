import {
  createStackNavigator,
} from 'react-navigation-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from "../screens/HomeScreen";
import MapOneScreen from "../screens/MapOneScreen";
import MapTwoScreen from "../screens/MapTwoScreen";

const AppRouteConfigs = createStackNavigator({
  Welcome: { screen: WelcomeScreen },
  Home: {screen: HomeScreen},
  MapOne: {screen: MapOneScreen},
  MapTwo: {screen: MapTwoScreen},
  LogIn: { screen: LoginScreen },
});

export default AppRouteConfigs;
