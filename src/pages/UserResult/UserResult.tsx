/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {View,Text, Image} from 'react-native';
import styles from './UserResult.style';
import Button from '../../components/Button/Button';

const UserResult = (props:any)=>{
    const user = props.route.params.user;
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Kayıt Başarılı</Text>

            {/* 
            
            <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/e/ef/Success.png'}} style={{width:100}}/>;
            */}
            

            <Text style={styles.text}>
                Üye Adı : 
                <Text style={styles.userText}> {user.userName}</Text>
            </Text>

            <Text style={styles.text}>
                Üye Soyadı : 
                <Text style={styles.userText}> {user.userSurname}</Text> 
            </Text>

            <Text style={styles.text}>
                Üye Yaşı : 
                <Text style={styles.userText}> {user.userAge}</Text> 
            </Text>

            <Text style={styles.text}>
                Üye Maili : 
                <Text style={styles.userText}> {user.userMail}</Text> 
            </Text>

            <Text style={styles.text}>
                Üye Şehri : 
                <Text style={styles.userText}> {user.userCity}</Text> 
            </Text>

            <Button text='Anasayfaya Dön' onPress={() => props.navigation.navigate("Welcome")} />
        </View>
    );
};

export default UserResult;