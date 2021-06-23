import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
    width: 300px;
    height: 400px;

    display: flex;

    margin-top: 50px;

    margin-left: auto;
    margin-right: auto;

    border-radius: 25px;
    border: solid 1px ${colors.darkPurple};
`;

export const Header = styled.View`
    width: 100%;
    height: 200px;

    display: flex;

    flex-direction: column;
    align-items: center;

    background-color:  ${colors.darkPurple};
    border-radius: 24px;

    padding-top: 10px;
`;

export const MessageConfirm = styled.Text`
    font-size: 25px;

    color: white;
    font-weight: bold;
`;

export const ImageConfirmEmail = styled.Image`
    width: 130px;
    height: 130px;
`;

export const Mensagem = styled.View`
    width: 100%;
    height: 40px;

    padding-top: 40px;
    padding-left: 12px;
    padding-right: 12px;

    flex-direction: column;
    align-items: center;
    display: flex;

    text-align: center;
`;

export const EmailConfirm = styled.Text`
    font-size: 17px;
    font-weight: bold;
    text-align: center;
    color:  ${colors.darkGray};
`;

export const ButtonConfirm = styled.TouchableOpacity`
    width: 100%;
    height: 35px;

    border-radius: 10px;

    background-color:  ${colors.darkPurple};

    

    margin-top: 30px;
`;

export const TextButtonConfirm = styled.Text`
    color: white;
    font-weight: bold;
    text-align:center;
    padding: 5px;
    font-size: 15px;
`;