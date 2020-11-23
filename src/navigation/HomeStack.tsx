import React from 'react';
// libs
import { createStackNavigator } from '@react-navigation/stack';
// scenes
import Home from '../containers/HomeScreen';
// components
import useTheme from '../hooks/useTheme';
import IconButton from '../components/shared/IconButton';
// utils
import { Scale } from '../utils';


interface HomeStackProps { }

const HomeStackNavigator = createStackNavigator();

const HomeStack = ({ }: HomeStackProps) => {
    const { theme } = useTheme();
    return (
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen
                name='home'
                component={Home}
                options={({ navigation }) => ({
                    headerTitleStyle: { color: theme.$text },
                    headerStyle: { backgroundColor: theme.$headerBackground },
                    headerLeft: () => (
                        <IconButton
                            onPress={() => navigation.openDrawer()}
                            iconName='menu'
                            customStyle={{
                                marginLeft: Scale.moderateScale(10),
                            }}
                        />
                    ),
                    headerRight: () => (
                        <IconButton
                            onPress={() => navigation.navigate('settings')}
                            iconName='settings'
                            customStyle={{
                                marginRight: Scale.moderateScale(10)
                            }}
                        />
                    )
                })}
            />
        </HomeStackNavigator.Navigator>
    );
};

export default HomeStack;
