import React from "react";
import { Container, NameContato, Mensagem, Date } from "./styles";

function TemplateChatRight({msg}) {
    return(
        <Container>
            <NameContato>{msg.author ? msg.author : msg.User?.Student.name || msg.User?.Teacher.name}</NameContato>
            <Mensagem>{msg.message}</Mensagem>
            <Date>{msg.createdAt}</Date>
        </Container>
    )
}

export default TemplateChatRight;