import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import EStyleSheet from 'react-native-extended-stylesheet';
import HamburgerMenuIcon from './HamburgerMenuIcon';
// import ThemeContext from '../../lib/ThemeContext';

interface HeaderProps {
    navigation: any;
    route: any;
}

const Header = ({ navigation, route }: HeaderProps) => {
    // const { toggleTheme } = useContext(ThemeContext);
    return (
        <View style={styles.container}>
            {/* <Text>Header</Text> */}
            <HamburgerMenuIcon {...{ navigation }} />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 40,
        // backgroundColor: '$headerBackground'
    }
});
