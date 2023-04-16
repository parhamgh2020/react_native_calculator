import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TouchableOpacity, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";


interface ButtonProps {
    onPress: () => void;
    isBlue?: boolean;
    isGrey?: boolean;
    title: string;
}


export default function Button({ onPress, isBlue, isGrey, title }: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <>
            <TouchableOpacity style={
                isBlue
                    ? Styles.btnBlue
                    : isGrey
                        ? Styles.btnGray
                        : theme === "light"
                            ? Styles.btnLight
                            : Styles.btnDark
            } onPress={onPress}>
                <Text
                    style={
                        isBlue || isGrey
                            ? Styles.smallTextLight
                            : theme === "dark"
                                ? Styles.smallTextLight
                                : Styles.smallTextDark
                    }
                >
                    {title}
                </Text>
            </TouchableOpacity>
        </>
    )

}

