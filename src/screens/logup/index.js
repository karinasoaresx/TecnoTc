import React, { useState} from "react";
import { StatusBar } from "react-native";
import colors from "../../styles/colors";
import ButtonLightGreen from "../../components/buttonLightGreen";
import { Container } from "../../styles/stylesGlobal";
import { Content, TextInputLogup, Label, TitleLogup, EditTextLightGreen, SubtitleLogup, EnterAccount, Span, ImageTeacher, ImageStudent, ImageOther, ContainerImage, ContainerOpcoesUsuario, UserOption } from "./styles";
import imgTeacher from "../../../assets/GifProfessores.gif";
import imgStudent from "../../../assets/GifAlunos.gif";
import imgOther from "../../../assets/GifOutros.gif";

import { api } from "../../services/api";
import { signIn } from "../../services/security";

import { TouchableOpacity } from "react-native-gesture-handler";

function Logup({ navigation }) {

    StatusBar.setBackgroundColor(colors.darkPurple);

   
    const [userRegister, setUserRegister] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleEmail = (e) => {
		setUserRegister({ ...userRegister, email: e });
	};

    const handleName = (e) => {
		setUserRegister({ ...userRegister, name: e });
	};

	const handlePassword = (e) => {
		setUserRegister({ ...userRegister, password: e });
	};

    const handleSubmit = async (e) => {
        e.preventDefault();
 
        try {
    
          const response = await api.post('/students', userRegister);
          
          
          navigation.navigate("OrderConfirmEmail");
        } catch (error) {
          console.error(error);
          alert(error.response.data.error);
        }
      };


    const handleReturnLogin = () => {
        navigation.navigate("Login")
    }


    return (
        <Container>
            <Content>
                <TitleLogup> TecnoTc! </TitleLogup>
                <SubtitleLogup> Junte-se à nossa comunidade! </SubtitleLogup>
                <Span> Você é: </Span>
                <ContainerOpcoesUsuario>
                    <ContainerImage>
                        <ImageTeacher source={imgTeacher} alt="Professor" />
                        <UserOption> Professor </UserOption>
                    </ContainerImage>
                    <ContainerImage>
                        <ImageStudent source={imgStudent} alt="Aluno" />
                        <UserOption> Aluno </UserOption>
                    </ContainerImage>
                    <ContainerImage>
                        <ImageOther source={imgOther} alt="Outro" />
                        <UserOption> Outro </UserOption>
                    </ContainerImage>
                </ContainerOpcoesUsuario>
                <Label> Nome completo </Label>
                <TextInputLogup
                    autoCompleteType="name"
                    returnKeyType="next"
                    maxLength={50}
                    onChangeText={handleName}
                    placeholder="Digite aqui seu nome completo"
                    placeholderTextColor={colors.lightGrey} />
                <Label> E-mail </Label>
                <TextInputLogup
                    keyboardType="email-address"
                    autoCompleteType="email"
                    autoCapitalize="none"
                    returnKeyType="next"
                    maxLength={30}
                    onChangeText={handleEmail}
                    placeholder="Digite aqui seu e-mail"
                    placeholderTextColor={colors.lightGrey} />
                <Label> Senha </Label>
                <TextInputLogup
                    autoCompleteType="password"
                    returnKeyType="send"
                    maxLength={30}
                    onChangeText={handlePassword}
                    placeholder="Digite aqui sua senha"
                    placeholderTextColor={colors.lightGrey}
                    //serve pra deixar a senha com *
                    //indica que é um campo de senha
                    secureTextEntry={true} />
                <ButtonLightGreen
                    text="Criar conta"
                    handlePress={handleSubmit}
                    />
                {/* //só habilita o botão de entrar se os campos email ou password não estiverem vazios
                    disabled={login.email === "" || login.password === "" } */}






                <TouchableOpacity>

                    <EnterAccount> Já possui conta?
                        <EditTextLightGreen onPress={handleReturnLogin}> Entre agora!</EditTextLightGreen>
                    </EnterAccount>
                </TouchableOpacity>

            </Content>
        </Container>
    )
}

export default Logup;