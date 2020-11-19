import { SCREEN_WIDTH } from '../dimensions';

const rem = SCREEN_WIDTH > 340 ? 18 : 16;

const dark = {
    $rem: rem,
    $primary: 'blue',
    $accent: 'green',
    $background: '#121212',
    $headerBackground: '#202020',
    $surface: 'white',
    $disabled: 'grey',
    $danger: 'red',
    $text: 'rgba(255, 255, 255, 0.87)'
}

export default dark;