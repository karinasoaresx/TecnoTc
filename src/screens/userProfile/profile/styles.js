import { StatusBar } from "react-native"
import styled from "styled-components/native";
import colors from "../../../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";

//styles profile

export const Container = styled.View`
    background-color: ${colors.white};
    height: 290px;
    align-items: center;
    padding-top: ${StatusBar.currentHeight}px;
`;

export const InfoUser = styled.View`
    width: 100%;
    height: 130%;
    align-items: center;
    padding-top: 10px;
`;

export const Background = styled.Image`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: -1;
`;

export const TitleUserProfile = styled.Text`
    color: ${colors.white};
    font-size: 20px;
    margin-bottom: 10px;
`;
export const PerfilLogout = styled.View`
    display: flex;
    width: 100%;
    margin-left: 100px;
    justify-content: space-evenly;
    flex-direction: row;
`;

export const IconSignOut = styled(Icon)`
	font-size: 24px;
	color: white;
	right: 4px;
`;


export const ImageProfile = styled.View`
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background-color: ${colors.darkGray};
`;

export const NameUser = styled.Text`
    color: ${colors.white};
    font-size: 18px;
`;

export const EmailUser = styled.Text`
    color: ${colors.white};
    font-size: 16px;
`;

export const ButtonProfile = styled.TouchableOpacity`
    width: 30%;
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

//styles profile

//styles groups

export const ViewGroup = styled.View`
    height: 100%;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    background-color: #f3f2f1;
`;

export const Group = styled.View`
    background-color: ${colors.white};
    border: 1px solid #e8e8e8;
    width: 170px;
    height: 220px;
    align-items: center;
    border-radius: 10px;
    margin: 14px;
`;

export const SettingsGroup = styled.Image`
    width: 10px;
    height: 20px;
    left: 65px;
    top: 15px;
`;

export const ImageGroup = styled.View`
    height: 80px;
    width: 80px;
    background-color: ${colors.lightGreen};
    border-radius: 10px;
    margin-top: 15px;
`;

export const TitleGroup = styled.Text`
    color: ${colors.black};
    font-size: 20px;
    margin-top: 18px;
`;

//styles groups

//styles notes

export const ViewNote = styled.View`
    height: 100%;
    width: 100%;
    align-items: center;
    padding: 5px;
    background-color: #f3f2f1;
`;

export const Note = styled.View`
    background-color: ${colors.white};
    margin-top: 10px;
    border-radius: 10px;
    width: 330px;
    height: 50px;
    justify-content: center;
    padding: 10px;
    border: 1px solid #e8e8e8;
`;

export const SettingsNote = styled.Image`
    width: 10px;
    height: 20px;
    left: 290px;
    top: 4px;
`;

export const TitleNote = styled.Text`
    color: ${colors.black};
    font-size: 20px;
    margin-top: -20px;
`;

//styles notes

