import styled from "styled-components/native";
import colors from "../../../styles/colors";
import { TextDefault } from "../../../styles/stylesGlobal";

export const Container = styled.View`
    background-color: ${colors.white};
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const ImageProfile = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 75px;
    background-color: ${colors.darkGray};
`;

export const ButtonProfile = styled.TouchableOpacity`
    width: 150px;
    height: 30px; 
    background-color: ${colors.lightGreen};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const TextButton = styled.Text`
    font-size: 16px;
    color: ${colors.white};
`;

export const Content = styled.View`
    height: 52%;
    width: 100%;
    background-color: ${colors.white};
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    align-items: center;
`;

export const Label = styled(TextDefault)`
    width: 96%;
    align-self: flex-start;
    font-size: 18px;
    margin-bottom: 5px;
    margin-left: 10px;
    color: ${colors.black};
`;

export const TextInputEditProfile = styled.TextInput`
    width: 90%;
    height: 45px;
    font-size: 18px;
    margin-bottom: 15px;
    padding-left: 20px;
    border-radius: 15px;
    border: 1px solid ${colors.darkPurple};
`;