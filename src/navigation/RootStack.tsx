import React from 'react';
// libs
import { createStackNavigator } from '@react-navigation/stack';

// components
import IconButton from '../components/shared/IconButton';

// scenes
import DrawerStack from './DrawerStack';
import Second from '../containers/SettingsScreen';
// import EStyleSheet from 'react-native-extended-stylesheet';

// utils
import { Scale } from '../utils';
import { useTheme } from '../lib/ThemeContext';


interface RooStackProps { }

const RootStackNavigator = createStackNavigator();

const RooStack = ({ }: RooStackProps) => {
    const { theme } = useTheme()
    return (
        <RootStackNavigator.Navigator initialRouteName='home'>
            <RootStackNavigator.Screen
                name='drawer'
                component={DrawerStack}
                options={{ headerShown: false }}
            />
            <RootStackNavigator.Screen
                name='settings'
                component={Second}
                options={({ navigation }) => ({
                    headerTitleStyle: { color: theme.$text },
                    headerStyle: { backgroundColor: theme.$headerBackground },
                    headerLeft: () => (
                        <IconButton
                            onPress={() => navigation.pop()}
                            iconName='arrow-left'
                            customStyle={{
                                marginLeft: Scale.moderateScale(10)
                            }}
                        />
                    )
                })}
            />

        </RootStackNavigator.Navigator>
    );
};

export default RooStack;
