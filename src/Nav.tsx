import React from 'react';
import { Navigator } from './components/rental/NavigatorCmp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './components/Home';
export const Nav = (props: any) => {
    const Stack = createNativeStackNavigator();
    const HOME_TAG = 'Home';
    const SEARCH_TAG = 'Search';
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={HOME_TAG}>
                <Stack.Screen name={SEARCH_TAG} component={Navigator} options={{ headerTitle:'Booking Details', headerBackVisible:true, headerShadowVisible:false,headerTitleAlign:'center'}}/>
                <Stack.Screen name={HOME_TAG} component={Home} options={{headerShown:false,headerTransparent:true}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};
