import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
    min-height: 25px;
    height: auto;
    overflow: hidden;
    width: 250px;
    border-radius: 10px;
    padding: 5px;
    padding-right: 20px;
    padding-left: 20px;
    margin-right: auto;
    margin-bottom: 20px;
    background-color: ${colors.darkPurple};
`;

export const NameContato = styled.Text`
    font-size: 18px;
    color: ${colors.lightGreen};
`;

export const Mensagem = styled.Text`
    color: white;
    font-size: 16px;
`;

export const Date = styled.Text`
    margin-left: auto;
    font-size: 12px;
    color: ${colors.lightGreen};
`;