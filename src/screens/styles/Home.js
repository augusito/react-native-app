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
        backgroundColor: colors.white,
    },
    welcomeWrapper: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        padding: 20,
    },
    welcomeText: {
        fontSize: headingTextSize,
        color: colors.black,
        fontWeight: '300',
        marginBottom: 40,
    },

    map: {
        ...StyleSheet.absoluteFillObject,
        bottom: 50,
    },
});

export default styles;