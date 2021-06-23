import styled from "styled-components/native";
import colors from "../../styles/colors";
import { TextDefault } from "../../styles/stylesGlobal";
import { Dimensions } from "react-native";

export const Content = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const TitleNewPassword = styled.Text`
    font-weight: bold;
    color: ${colors.white};
    font-size: 24px;
    margin-bottom: 20px;
`;

export const ImageNewPassword = styled.Image`
    height: 200px;
    width: 200px;
`;

export const TextNewPassword = styled.Text`
    color: ${colors.white};
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
`;

export const Label = styled(TextDefault)`
    width: 96%;
    align-self: flex-start;
    font-size: 18px;
    margin-bottom: 5px;
    margin-left: 10px;
    color: ${colors.white};
`;

export const TextInputNewPassword = styled.TextInput`
    width: 90%;
    height: 45px;
    font-size: 18px;
    margin-bottom: 15px;
    padding-left: 20px;
    border-radius: 15px;
    border: 1px solid ${colors.lightGrey};
`;