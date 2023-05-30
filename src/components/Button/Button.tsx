/* eslint-disable prettier/prettier */
import React from "react";
import {TouchableOpacity,Text} from "react-native";
import styles from "./Button.style";



const Button = ({text,onPress}:any) =>
{
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};



export default Button;