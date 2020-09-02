
/**
 * Design tokens
 * -------------------- 
 * Colors
 */
const colors = {

    black: '#000',
    white: '#fff',
    transparent: 'transparent',
    light: '',
    disabled: '',

    text: '#0a1f44',

    primary100:  '#f2f6ff',
    primary200:  '#d9e4ff',
    primary300:  '#a6c1ff',
    primary400:  '#598bff',
    primary500:  '#3366ff',
    primary600:  '#274bdb',
    primary700:  '#1a34b8',
    primary800:  '#102694',
    primary900:  '#091c7a',

    black100:  '#707d91',
    black200:  '#626f88',
    black300:  '#596680',
    black400:  '#4e5c78',
    black500:  '#455571',
    black600:  '#374766',
    black700:  '#293a5b',
    black800:  '#13284b',
    black900:  '#0a1f44',

    gray100:  '#f7f8f9',
    gray200:  '#f7f8f9',
    gray300:  '#f1f2f4',
    gray400:  '#e1e4e8',
    gray500:  '#c9ced6',
    gray600:  '#afb7c3',
    gray700:  '#a6aebb',
    gray800:  '#98a1b1',
    gray900:  '#8a94a6',

    success100:  '#f0fff5',
    success200:  '#ccfce3',
    success300:  '#8cfac7',
    success400:  '#2ce69b',
    success500:  '#00d68f',
    success600:  '#00b887',
    success700:  '#00997a',
    success800:  '#007d6c',
    success900:  '#004a45',

    info100:  '#f2f8ff',
    info200:  '#c7e2ff',
    info300:  '#94cbff',
    info400:  '#42aaff',
    info500:  '#0095ff',
    info600:  '#006fd6',
    info700:  '#0057c2',
    info800:  '#0041a8',
    info900:  '#002885',

    warning100:  '#fffdf2',
    warning200:  '#fff1c2',
    warning300:  '#ffe59e',
    warning400:  '#ffc94d',
    warning500:  '#ffaa00',
    warning600:  '#db8b00',
    warning700:  '#b86e00',
    warning800:  '#945400',
    warning900:  '#703c00',

    danger100:  '#fff2f2',
    danger200:  '#ffd6d9',
    danger300:  '#ffa8b4',
    danger400:  '#ff708d',
    danger500:  '#ff3d71',
    danger600:  '#db2c66',
    danger700:  '#b81d5b',
    danger800:  '#94124e',
    danger900:  '#700940',

    btnPrimary: '#3366ff',

    backgroundBasic100: '#fff',
    backgroundBasic200: '#f7f8f9',

    textBasic500: '#30435c',
    textBasic900: '#30435c',
 
    skeletonBackground: 'rgba(0, 0, 0, 0.08)',

    modes: {
        dark: {
            text: 'warning400',
            background: '#0a1f44',
            btnPrimary: '#ff3d71',

            backgroundBasic100: '#000',
            backgroundBasic200: '#303030',

            skeletonBackground: 'rgba(255, 255, 255, 0.25)',
            textBasic500: '#fff',
            textBasic900: '#fff',
            
        }
    }


};

const defaultColorVariants = {
    primary :  colors.primary500,
    black   :  colors.black500,
    gray    :  colors.gray500,
    success :  colors.success500,
    info    :  colors.info500,
    warning :  colors.warning500,
    danger  :  colors.danger500
}

const capitalAzurColorTheme = {
    lightBlue: '#017CFE',
    darkBlue: '#08286A',
}

export default {...colors, ...defaultColorVariants, ...capitalAzurColorTheme};