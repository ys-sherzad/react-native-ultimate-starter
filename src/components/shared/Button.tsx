import React from 'react';
import { TouchableWithoutFeedback, TouchableOpacity, TouchableNativeFeedback, View, ViewStyle, StyleProp } from 'react-native';
// utils
import { PlatformUtils } from '../../utils';
// hooks
import useTheme from '../../hooks/useTheme';

type ButtonProps = React.ComponentProps<typeof TouchableWithoutFeedback> & {
    withoutFeedback?: boolean;
    withHitSlop?: boolean;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};

const hitSlop = { top: 10, left: 10, right: 10, bottom: 10 };

const Button = (props: ButtonProps) => {
    const { theme } = useTheme();
    const { withoutFeedback = false, children, style, withHitSlop = false, ...rest } = props;



    const touchableWithoutFeedback = () => (
        <TouchableWithoutFeedback
            testID="touchableWithoutFeedback"
            {...withHitSlop && { hitSlop }}
            {...rest}>
            <View {...{ style }}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    );

    const touchableNativeFeedback = () => (
        <TouchableNativeFeedback
            testID='touchableWithFeedback'
            useForeground={true}
            {...withHitSlop && { hitSlop }}
            background={
                PlatformUtils.isAndroidVersion21AndAbove ?
                    TouchableNativeFeedback.Ripple(theme.$rippleColor, true) :
                    TouchableNativeFeedback.SelectableBackground()
            }
            {...rest}
        >
            <View style={[style, { overflow: 'hidden' }]}>
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
