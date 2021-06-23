import React from "react";
import { Container, ImageProfile, Content, Label, TextInputEditProfile, ButtonProfile, TextButton } from "./styles";
import ButtonPurple from "../../../components/buttonPurple";
import colors from "../../../styles/colors";


function EditProfile() {
    return(
        <>
        <Container>
            <ImageProfile />
            <ButtonProfile>
                <TextButton> Editar Imagem </TextButton>
            </ButtonProfile>
            <Content>
            <Label> Nome </Label>
                <TextInputEditProfile
                    keyboardType="text"
                    autoCapitalize="none"
                    returnKeyType="next"
                    maxLength={100}
                    placeholder="Alterar nome"
                    placeholderTextColor={colors.lightGrey} />
                <Label> E-mail </Label>
                <TextInputEditProfile
                    keyboardType="email-address"
                    autoCompleteType="email"
                    autoCapitalize="none"
                    returnKeyType="next"
                    maxLength={50}
                    placeholder="Alterar e-mail"
                    placeholderTextColor={colors.lightGrey} />
                <Label> Senha </Label>
                <TextInputEditProfile
                    autoCompleteType="password"
                    returnKeyType="send"
                    maxLength={30}
                    placeholder="Alterar senha"
                    placeholderTextColor={colors.lightGrey}
                    //serve pra deixar a senha com *
                    //indica que é um campo de senha
                    secureTextEntry={true} />
                
                <ButtonPurple text="Salvar dados" />
            </Content>
        </Container>
        </>
    )

}

export default EditProfile;