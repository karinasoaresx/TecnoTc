import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.TouchableOpacity`
    width: 90%;
    border-radius: 15px;
    /* border-color: ${({disabled}) => disabled ? colors.darkGray : colors.light}; */
    padding: 10px;
    align-items: center;
    background-color: ${colors.lightGreen};
    margin-top: 25px;
`;

export const Text = styled.Text`
    font-size: 20px;
    color: ${colors.white};
`;