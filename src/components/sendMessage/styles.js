import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const TextInputChat = styled.TextInput` 
      border: 0;
      padding-left: 15px;
      padding-right: 10px;
      border-radius: 25px;
      width: 70%;
      height: 50px;
      font-size: 16px;
      color: white;
      background-color: ${colors.darkPurple};
`;

export const ButtonSend = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background-color: ${colors.lightGreen};
    border-radius: 25px;
    margin-left: 10px;
    justify-content: center;
    align-items: center;
`;