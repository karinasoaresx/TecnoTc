import React from "react";
import colors from "../../styles/colors";
import { Container, TextInputChat, ButtonSend } from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';


function SendMessage({msg, message, m}) {
    return(
        <Container>
            <TextInputChat
                placeholder="Digite aqui sua mensagem"
                onChange={(e) => {
                    message(e.target.value)
                }}
                value={m}
                placeholderTextColor={colors.white} />
            <ButtonSend onClick={msg}>
                <Icon name="paper-plane" size={30} color="#ffffff" />
            </ButtonSend>
        </Container>
    )
};

export default SendMessage;