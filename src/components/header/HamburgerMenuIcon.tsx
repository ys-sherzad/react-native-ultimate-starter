import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// libs
// import EStyleSheet from 'react-native-extended-stylesheet';
import { Scale } from '../../utils';
import IconButton from '../shared/IconButton';


interface HamburgerMenuIconProps {
    navigation: any
}

const HamburgerMenuIcon = ({ navigation }: HamburgerMenuIconProps) => {
    return (
        <IconButton
            onPress={() => navigation.openDrawer()}
            iconName='menu'
            customStyle={{
                marginLeft: Scale.moderateScale(10),
            }}
        />
    );
};

export default HamburgerMenuIcon;

const styles = StyleSheet.create({
    container: {}
});
