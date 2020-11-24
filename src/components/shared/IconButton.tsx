import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-easy-icon';
// utils
import { Scale, Shape } from '../../utils';
// components
import Button from './Button';
// types
import { IconType } from 'react-native-easy-icon/src/Icon';
// hooks
import useTheme from '../../hooks/useTheme';

interface Props {
    iconType?: IconType;
    iconName: string;
    onPress: () => void;
    customStyle?: any;
    iconSize?: number;
    iconColor?: string;
}

const IconButton = ({ iconType, iconName, onPress, customStyle, iconSize, iconColor }: Props) => {
    const { theme } = useTheme();

    return (
        <Button onPress={onPress} style={[styles.container, customStyle]}>
            <Icon
                type={iconType || 'feather'}
                name={iconName}
                size={iconSize || Scale.moderateScale(20)}
                color={iconColor || theme.$iconColor}
            />
        </Button>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        ...Shape.round,
    },
});
