import React from "react";
import {
  ButtonConfirm,
  Container,
  Header,
  ImageConfirmEmail,
  Mensagem,
  Welcome,
  SendConfirmEmail,
  TextButtonConfirm
} from './styles';
import ImgConfirmEmail from "../../../assets/GifConfirmEmail.gif"

function OrderConfirmEmail({ navigation }) {

  const handleBackLogin = async (e) => {
    navigation.navigate("Login");
  }

  return (
    <Container>
      <Header>
        <Welcome>Bem vinda(o) ao TecnoTc!</Welcome>
      </Header>

      <Mensagem>
        <SendConfirmEmail>A equipe agradece o seu cadastro!</SendConfirmEmail>
        <SendConfirmEmail>
          Enviaremos uma confirmação ao email cliente.exemplo@hotmail.com, ok?
            </SendConfirmEmail>

        <ImageConfirmEmail source={ImgConfirmEmail}
          alt="Confirmação de email" />

        <ButtonConfirm>
          <TextButtonConfirm onPress={handleBackLogin}> OK! </TextButtonConfirm>

        </ButtonConfirm>

      </Mensagem>
    </Container>
  );
}

export default OrderConfirmEmail;
