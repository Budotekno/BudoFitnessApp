/* eslint-disable prettier/prettier */
import React from "react";
import {View,Text} from "react-native";
import Button from "../../components/Button/Button";
import styles from "./Welcome.style";


const Home = (props:any) =>
{
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Budo Fitness Salonu</Text>
            <Button text='Kayıt Ol' onPress={()=> props.navigation.navigate('UserSign')}/>
        </View>
    );
};



export default Home;