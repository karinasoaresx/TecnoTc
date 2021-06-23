import React, { useState } from "react";
import { StatusBar, ScrollView } from "react-native";
import ButtonLightGreen from "../../components/buttonLightGreen";
import colors from "../../styles/colors";
import { Container } from "../../styles/stylesGlobal";
import { Content, TitleNewPassword, ImageNewPassword, TextNewPassword, TextInputNewPassword, Label } from "./styles";
import ImgNewPassword from "../../../assets/novaSenha.gif";
import { api } from "../../services/api";
import * as Linking from 'expo-linking';


function NewPassword({navigation}) {

    StatusBar.setBackgroundColor(colors.darkPurple);

    const [newPassword, setNewPassword] = useState({
        password: '',
        repeatPassword: '',
    });

    const handlePassword = (e) => {
        setNewPassword({ ...newPassword, password: e });
    };

    const passwordTokenab = "jiarwrnsfjnasjfas";

    const handleRepeatpassword = (e) => {
        setNewPassword({ ...newPassword, repeatPassword: e });
    };

    const handleSubmitPassword = async (e) => {
        try {
            const response = await api.put('passwordreset', {
                params: {
                    passwordToken: passwordTokenab
                },
            })
        } catch (error) {
            console.error(error);
            alert(error.response.data.error);
        }
    }

    return (
        <Container>
            <ScrollView style={{ width: "100%" }}>
                <Content>
                    <TitleNewPassword> Nova Senha </TitleNewPassword>
                    <ImageNewPassword source={ImgNewPassword} alt="Esqueceu a senha" />
                    <TextNewPassword>
                        Defina uma senha fácil de lembrar{"\n"} e de alta segurança!
                </TextNewPassword>
                    <Label> Nova senha: </Label>
                    <TextInputNewPassword
                        autoCompleteType="password"
                        returnKeyType="send"
                        maxLength={30}
                        placeholder="Digite aqui sua nova senha"
                        onChangeText={handlePassword}
                        placeholderTextColor={colors.lightGrey} />
                    <Label> Confirmar senha: </Label>
                    <TextInputNewPassword
                        autoCompleteType="password"
                        returnKeyType="send"
                        maxLength={30}
                        placeholder="Confirme aqui sua nova senha"
                        onChangeText={handleRepeatpassword}
                        placeholderTextColor={colors.lightGrey} />
                    <ButtonLightGreen text="Redefinir Senha" onPress={handleSubmitPassword} />
                </Content>
            </ScrollView>
        </Container>
    );
}

export default NewPassword;