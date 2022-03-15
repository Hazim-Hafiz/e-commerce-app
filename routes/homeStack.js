import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import tw, { create } from 'twrnc';
import Login from '../screens/login';
import Home from '../screens/home';

const screens = {
    Login: {
        screen: Login,
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
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)
