import React from 'react';
import { TouchableWithoutFeedback, TouchableOpacity, TouchableNativeFeedback, View, StyleSheet } from 'react-native';
// import EStyleSheet from 'react-native-extended-stylesheet';
// utils
import { PlatformUtils } from '../../utils';
// theme context
import { useTheme } from '../../lib/ThemeContext';

type Props = React.ComponentProps<typeof TouchableWithoutFeedback> & {
    withoutFeedback?: boolean;
    children: React.ReactNode;
};

const Button = (props: Props) => {
    const { theme } = useTheme();
    const { withoutFeedback = false, children, ...rest } = props;

    const touchableWithoutFeedback = () => (
        <TouchableWithoutFeedback
            testID="touchableWithoutFeedback"
            {...rest}>
            <View style={rest.style}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    );

    const touchableNativeFeedback = () => (
        <TouchableNativeFeedback
            testID='touchableWithFeedback'
            {...rest}
            useForeground={TouchableNativeFeedback.canUseNativeForeground()}
            background={TouchableNativeFeedback.Ripple(theme.$rippleColor, true)}
        >
            <View style={rest.style}>
                {children}
            </View>
        </TouchableNativeFeedback>
    )

    const touchableOpacity = () => (
        <TouchableOpacity testID="touchableOpacity" {...rest}>
            {children}
        </TouchableOpacity>
    );


    if (withoutFeedback) {
        return touchableWithoutFeedback();
    } else if (PlatformUtils.isAndroid) {
        return touchableNativeFeedback();
    } else {
        return touchableOpacity();
    }
};

export default Button;
