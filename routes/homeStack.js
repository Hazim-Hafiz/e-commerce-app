import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import tw, { create } from 'twrnc';
import Login from '../screens/login';
import Signup from '../screens/signup';
import Home from '../screens/home';
import ProductDetails from "../screens/details";

const screens = {
    Login: {
        screen: Login,
        navigationOptions: { headerShown: false }
    },
    Signup: {
        screen: Signup,
        navigationOptions: { headerShown: false }
    },
    Home: {
        screen: Home,
        navigationOptions:{ 
            headerStyle: tw.style('bg-purple-600'),
            headerTitleStyle: tw.style('text-white'),
            headerLeft: null,
            header:  null
    },
    },
    ProductDetails: {
        screen: ProductDetails,
        navigationOptions:{ 
            headerStyle: tw.style('bg-purple-600'),
            headerTitleStyle: tw.style('text-white'),
            headerLeft: null,
            header:  null
    },
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)
