import LocalizedStrings from 'react-native-localization';

const Strings = new LocalizedStrings({
    en: {
        hello: 'Hello',
    },
    fa: {
        hello: 'سلام',
    },
    ar: {
        hello: 'مرحبا'
    }
});

export default Strings;