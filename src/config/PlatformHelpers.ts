import { Platform } from "react-native"

export const OS_TAGS = {
    _A : 'android',
    _I : 'ios'
}

export const getOS = () => {
    return Platform.OS;
}

export const getVersion = () => {
    return Platform.Version;
}