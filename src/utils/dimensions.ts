'use strict';

import { Dimensions } from 'react-native';
import { isIOS } from './platform';

/**
 * device's height and width dimensions
 */
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = isIOS ? Dimensions.get('window').height : require('react-native-extra-dimensions-android').get('REAL_WINDOW_HEIGHT');


/**
 * Add other dimension needs here
 */

export {
    SCREEN_HEIGHT,
    SCREEN_WIDTH
};