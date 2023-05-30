/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unreachable */
import React, { useState } from "react";
import { View,Alert,ScrollView } from "react-native";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";


const UserSign = (props:any) =>
{
    const [userName, setUserName] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userMail, setUserMail] = useState(null);
    const [userCity, setUserCity] = useState(null);

    const submit =() =>{
        if(!userName||!userSurname ||!userAge ||!userMail ||!userCity)
        {
            Alert.alert("Üye Kaydı","Bilgiler boş geçilemez!");
            return;
        }

       const user={
        userName: userName,
        userSurname: userSurname,
        userAge: userAge,
        userMail: userMail,
        userCity: userCity,
       };

       props.navigation.navigate('UserResult',{user});
       
       console.log(user);

    };
    
    return(
        
        <ScrollView>
            <Input label='Adı' placeholder='Adınızı giriniz...' onChangeText={setUserName}/>
            <Input label='Soyadı' placeholder='Soyadınızı giriniz...' onChangeText={setUserSurname}/>
            <Input label='Yaş' placeholder='Yaşınızı giriniz...' onChangeText={setUserAge}/>
            <Input label='Mail' placeholder='Mail adresinizi giriniz...' onChangeText={setUserMail}/>
            <Input label='Yaşadığı Yer' placeholder='Yaşadınız yeri giriniz...' onChangeText={setUserCity}/>

            <Button text="Kaydet" onPress={submit}/>

        </ScrollView>
    );
};

export default UserSign;