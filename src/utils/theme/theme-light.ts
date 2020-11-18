import { SCREEN_WIDTH } from '../dimensions';

const rem = SCREEN_WIDTH > 340 ? 18 : 16;

const THEME_LIGHT = {
    $rem: rem,
    $primary: 'blue',
    $accent: 'green',
    $background: 'white',
    $surface: 'white',
    $disabled: 'grey',
    $danger: 'red',
    $text: 'black'
}

export default THEME_LIGHT;