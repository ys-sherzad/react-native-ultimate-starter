'use strict';

import { Platform } from 'react-native';

const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const isTVOS = Platform.isTV;
const isAndroidVersion21AndAbove = Platform.Version >= 21;
// const isAndroidRTL = I18nManager.isRTL && isAndroid;
// const isDeviceTablet = isTablet();


/**
 * Add other platform utils
 */

export {
    isIOS,
    isAndroid,
    isTVOS,
    isAndroidVersion21AndAbove
};