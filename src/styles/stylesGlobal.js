import { StatusBar } from "react-native";
import styled from "styled-components/native";
import colors from "./colors";

export const TextDefault = styled.Text`
    color: ${colors.light};
    font-size: 16px;
`;

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${colors.darkPurple};
    padding-top: ${StatusBar.currentHeight}px;
`;

export const EditTextLightGreen = styled.Text`
    color: ${colors.lightGreen};
    font-weight: bold;
`;