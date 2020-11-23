'use strict';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from './dimensions';

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size: number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (SCREEN_HEIGHT / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.1) => size + (scale(size) - size) * factor;

export {
    scale,
    verticalScale,
    moderateScale
};