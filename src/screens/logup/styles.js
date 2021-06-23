import styled from "styled-components/native";
import colors from "../../styles/colors";
import { TextDefault } from "../../styles/stylesGlobal";

export const Content = styled.View`
    padding-top: 20px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const TitleLogup = styled.Text`
    font-size: 30px;
    color: ${colors.lightGreen};
    font-weight: bold;
`;

export const EditTextLightGreen = styled.Text`
    color: ${colors.lightGreen};
    font-weight: bold;
`;

export const SubtitleLogup = styled.Text`
    font-size: 18px;
    color: ${colors.white};
    margin-bottom: 50px;
`;

export const Span = styled.Text`
    color: ${colors.white};
    align-self: flex-start;
    margin-left: 10px;
    font-size: 18px;
`;

export const ContainerOpcoesUsuario = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const ContainerImage = styled.View`
    width: 32%;
`;

export const UserOption = styled.Text`
    color: ${colors.white};
    font-size: 17px;
    margin-bottom: 30px;
    text-align: center;
`;

export const ImageTeacher = styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 50px;
`;

export const ImageStudent = styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 50px;
`;

export const ImageOther = styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 50px;
`;

export const Label = styled(TextDefault)`
    width: 96%;
    align-self: flex-start;
    font-size: 18px;
    margin-bottom: 5px;
    margin-left: 10px;
    color: ${colors.white};
`;

export const TextInputLogup = styled.TextInput`
    width: 90%;
    height: 45px;
    font-size: 18px;
    margin-bottom: 15px;
    padding-left: 20px;
    border-radius: 15px;
    border: 1px solid ${colors.lightGrey};
`;

export const EnterAccount = styled.Text`
    font-size: 16px;
    color: ${colors.white};
    font-weight: bold;
    margin-top: 10px;
`;