
import { appColors, textColors } from "./colors.js"
import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
       flex:1,
        paddingTop: 20,
        padding: 20,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.primary
    },
    text: {
        light: {
            color: textColors.whiteText
        },
        dark: {
            color: textColors.darkText
        },
        title: {
            fontSize: 30,
            fontWeight: 'bold',
        },
        body:{
              fontSize: 18,
        }

    }
})