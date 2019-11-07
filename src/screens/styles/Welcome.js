import { StyleSheet } from 'react-native';
import iPhoneSize from '../../utils/phoneSize';
import colors from '../../styles/colors';

let headingTextSize = 30;
if (iPhoneSize() === 'small') {
    headingTextSize = 26;
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.black,
    },
    welcomeWrapper: {
        flex: 1,
        display: 'flex',
        marginTop: 30,
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 50,
        marginBottom: 40,
        resizeMode: 'contain',
    },
    welcomeText: {
        fontSize: headingTextSize,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40,
    },
    facebookButtonIcon: {
        color: colors.orange,
        position: 'relative',
        left: 20,
        zIndex: 8,
    },
});

export default styles;