import React from "react";
import { Container, Text } from "./styles";

function ButtonPurple({text, handlePress, ...rest}) {
    return(
        <Container onPress={handlePress} {...rest}>
            <Text>{text}</Text>
        </Container>
    )
}

export default ButtonPurple;