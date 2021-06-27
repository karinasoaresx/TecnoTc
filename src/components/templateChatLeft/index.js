import React from "react";
import { format } from 'date-fns';

import { Container, NameContato, Mensagem, Date } from "./styles";

function TemplateChatLeft({msg}) {
    return(
        <Container>
            <NameContato>{msg.author ? msg.author : msg.User?.Student.name || msg.User?.Teacher.name}</NameContato>
            <Mensagem>{msg.message}</Mensagem>
            {/* {console.log(msg.createdAt)} */}
            <Date>{msg.createdAt}</Date>
        </Container>
    )
}

export default TemplateChatLeft;