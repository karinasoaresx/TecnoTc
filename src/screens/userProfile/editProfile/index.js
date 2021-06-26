import React from "react";
import {
  Container,
  ImageProfile,
  Content,
  Label,
  TextInputEditProfile,
  ButtonProfile,
  TextButton,
} from "./styles";
import ButtonPurple from "../../../components/buttonPurple";
import colors from "../../../styles/colors";
import { getUser } from "../../../services/security";
import { api } from "../../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import { Alert } from "react-native";

function EditProfile() {
  const [userInfo, setUserInfo] = useState([]);

  const [editProfile, setEditProfile] = useState({
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
  });

  const handleEmail = (e) => {
    setEditProfile({ ...editProfile, email: e });
  };

  const handleNewPassword = (e) => {
    setEditProfile({ ...editProfile, newPassword: e });
  };

  const handleName = (e) => {
    setEditProfile({ ...editProfile, name: e });
  };

  const handleCurrentPassword = (e) => {
    setEditProfile({ ...editProfile, currentPassword: e });
  };

  const handleSubmit = async (e) => {
    const user = await getUser();
    console.log(user.userRole);
    try {
      const response = await api.put(`${user.userRole + "s"}`, editProfile);

      Alert.alert("Sucesso", "Dados atualizados com sucesso");
    } catch (error) {
      console.log(error);
      if (error.response) {
        Alert.alert("Ops", error.response.data.error);
      }
    }
  };

  const loadUserInfo = async () => {
    const user = await getUser();

    try {
      const response = await api.get(`/${user.userRole + "s"}`);
      setUserInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadUserInfo();
  }, []);

  return (
    <>
      <Container>
        <ImageProfile />
        <ButtonProfile>
          <TextButton> Editar Imagem </TextButton>
        </ButtonProfile>
        <Content>
          <Label> Nome </Label>
          <TextInputEditProfile
            keyboardType="text"
            autoCapitalize="none"
            returnKeyType="next"
            maxLength={100}
            onChangeText={handleName}
            placeholder="Alterar nome"
            placeholderTextColor={colors.lightGrey}
          />
          <Label> E-mail </Label>
          <TextInputEditProfile
            keyboardType="email-address"
            autoCompleteType="email"
            autoCapitalize="none"
            returnKeyType="next"
            maxLength={50}
            onChangeText={handleEmail}
            placeholder="Alterar e-mail"
            placeholderTextColor={colors.lightGrey}
          />
          <Label> Senha atual </Label>
          <TextInputEditProfile
            autoCompleteType="password"
            returnKeyType="send"
            maxLength={30}
            placeholder="Alterar senha"
            onChangeText={handleCurrentPassword}
            placeholderTextColor={colors.lightGrey}
            //serve pra deixar a senha com *
            //indica que é um campo de senha
            secureTextEntry={true}
          />

          <Label> Nova senha </Label>
          <TextInputEditProfile
            autoCompleteType="password"
            returnKeyType="send"
            maxLength={30}
            placeholder="Alterar senha"
            onChangeText={handleNewPassword}
            placeholderTextColor={colors.lightGrey}
            //serve pra deixar a senha com *
            //indica que é um campo de senha
            secureTextEntry={true}
          />

          <ButtonPurple text="Salvar dados" onPress={handleSubmit} />
        </Content>
      </Container>
    </>
  );
}

export default EditProfile;
