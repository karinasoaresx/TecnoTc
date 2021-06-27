import React from "react";
import { ScrollView, StatusBar } from "react-native";
import SendMessage from "../../components/sendMessage";
import TemplateChatLeft from "../../components/templateChatLeft";
import TemplateChatRight from "../../components/templateChatRight";
import colors from "../../styles/colors";
import { Container, ContatoMensagem, NameContato, ContainerMensagens } from "./styles";

function Chat() {

    StatusBar.setBackgroundColor(colors.darkPurple);

    return (
        <Container>
            <ContatoMensagem>
                <NameContato> karina </NameContato>
            </ContatoMensagem>
            <ContainerMensagens>
                <ScrollView>
                    <TemplateChatLeft/>
                    <TemplateChatRight/>
                    <TemplateChatLeft/>
                    <TemplateChatRight/>
                    <TemplateChatLeft/>
                    <TemplateChatRight/>
                </ScrollView>
            </ContainerMensagens>
            <SendMessage/>
        </Container>
    )
}

export default Chat;