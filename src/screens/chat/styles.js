import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
    height: 100%;
    width: 100%;
    background-color: ${colors.white};
`;

export const ContatoMensagem = styled.View`
    height: 12%;
    width: 100%;
    background-color: ${colors.darkPurple};
`;

export const NameContato = styled.Text`
    color: ${colors.white};
    font-size: 20px;
`;

export const ContainerMensagens = styled.View`
    width: 100%;
    height: 78%;
    padding: 10px;
`;