import React, { useState } from "react";
import { StatusBar} from "react-native";
import colors from "../../styles/colors";
import { Container } from "../../styles/stylesGlobal";
import {Content, TitleForgotPassword, ImageForgotPassword, TextForgotPassword, Label, TextInputForgotPassword} from "./styles";
import ImgForgotPassword from "../../../assets/esqueceuSenha.gif";
import ButtonLightGreen from "../../components/buttonLightGreen";
import { api } from "../../services/api";

function ForgotPassword({navigation}) {

    StatusBar.setBackgroundColor(colors.darkPurple);

    const [forgotEmail, setForgotEmail] = useState({
        email: "",
    });

    const handleEmail = (e) => {
        setForgotEmail({ ...forgotEmail, email: e });
    };

    const handleSubmit = async () => {
        try {
            const response = await api.get(`/emailpassword/${forgotEmail.email}`);
            console.log(api.get)

            console.log("Email de recuperação enviado");

            navigation.navigate("OrderConfirmEmail")

        } catch (error) {
            console.error(error);
            alert(error.response.data.error);
        }
    }

    return(
        <Container>
            <Content>
                <TitleForgotPassword> Esqueceu sua senha? </TitleForgotPassword>
                <ImageForgotPassword source={ImgForgotPassword} alt="Esqueceu a senha" />
                <TextForgotPassword> 
                    Está tudo bem! Digite seu e-mail abaixo{"\n"} para receber um link e redefinir{"\n"} sua senha!
                </TextForgotPassword>
                <Label> Digite seu e-mail: </Label>
                <TextInputForgotPassword
                    keyboardType="email-address"
                    autoCompleteType="email"
                    autoCapitalize="none"
                    returnKeyType="next"
                    maxLength={30}
                    placeholder="Digite aqui seu e-mail"
                    onChangeText={handleEmail}
                    placeholderTextColor={colors.lightGrey}/>
                <ButtonLightGreen text="Enviar link de recuperação" handlePress={handleSubmit}/>
            </Content>
        </Container>
    );
}

export default ForgotPassword;