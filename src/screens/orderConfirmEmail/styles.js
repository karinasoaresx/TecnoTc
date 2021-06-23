import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
    width: 350px;
    height: 470px;

    display: flex;

    flex-direction: column;

    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;

    border-radius: 25px;
    border: solid 1px ${colors.darkPurple};

    box-shadow: 2px 2px 35px ${colors.darkGray};
`;

export const Header = styled.View`
    width: 100%;
    height: 155px;

    display: flex;

    flex-direction: column;
    align-items: center;

    background-color: ${colors.darkPurple};
    border-radius: 24px;

    padding-top: 30px;
`;

export const Welcome = styled.Text`
    font-size: 22px;

    color: white;
    font-weight: bold;
`;

export const Mensagem = styled.View`
    width: 100%;
    min-height: 40px;

    padding-top: 30px;
    padding-left: 12px;
    padding-right: 12px;

    flex-direction: column;
    align-items: center;
    display: flex;

    text-align: center;
`;

export const SendConfirmEmail = styled.Text`
    font-size: 17px;
    font-weight: bold;
    text-align: center;
    color: ${colors.darkGray};
`;

export const ImageConfirmEmail = styled.Image`
    width: 140px;
    height: 140px;
`;

export const ButtonConfirm = styled.TouchableOpacity`
    width: 100%;
    height: 35px;
    border-radius: 10px;
    background-color:  ${colors.darkPurple};
    margin-top: 20px;
`;

export const TextButtonConfirm = styled.Text`
    color: white;
    font-weight: bold;
    text-align:center;
    padding: 6px;
    font-size: 15px;
`;