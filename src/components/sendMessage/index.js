import React from "react";
import colors from "../../styles/colors";
import { Container, TextInputChat, ButtonSend } from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';


function SendMessage() {
    return(
        <Container>
            <TextInputChat
                placeholder="Digite aqui sua mensagem"
                placeholderTextColor={colors.white} />
            <ButtonSend>
                <Icon name="paper-plane" size={30} color="#ffffff" />
            </ButtonSend>
        </Container>
    )
};

export default SendMessage;