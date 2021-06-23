import React from "react";
import {
    ButtonConfirm,
    Container,
    Header,
    ImageConfirmEmail,
    Mensagem,
    MessageConfirm,
    EmailConfirm,
    TextButtonConfirm
  } from './styles';
import ImgConfirmEmail from "../../../assets/ImageconfirmEmail.png"
  
  function ConfirmEmail({navigation}) {

    const handleBackLogin = (e) => {
      navigation.navigate("Login")
    }
    return (
        <Container>
          <Header>
            <ImageConfirmEmail source={ImgConfirmEmail} alt="Confirmação de email"/>
            <MessageConfirm>Prontinho!</MessageConfirm>
          </Header>
  
          <Mensagem>
            <EmailConfirm>O seu email foi confirmado!</EmailConfirm>
            <EmailConfirm>Aproveite as ferramentas feitas especialmente para você!</EmailConfirm>
  
            <ButtonConfirm onPress={handleBackLogin}> 
              <TextButtonConfirm> Ir para a página principal! </TextButtonConfirm>               
            </ButtonConfirm>
          </Mensagem>
        </Container>
    );
  }
  
  export default ConfirmEmail;
  