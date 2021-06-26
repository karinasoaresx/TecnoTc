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
import ProfileImage from "../../../../assets/foto_perfil.png";
import ButtonPurple from "../../../components/buttonPurple";
import colors from "../../../styles/colors";
import { getUser } from "../../../services/security";
import { api } from "../../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import { Alert, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

function EditProfile() {
  const [userInfo, setUserInfo] = useState([]);
  const [image, setImage] = useState(null);

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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result)

    let localUri = result.uri;
    let fileName = localUri.split("/").pop();
    console.log(fileName)
    let match = /\.(\w+)$/.exec(fileName);
    let type = match ? `image/${match[1]}` : `image`;
    console.log(type)

    const formData = new FormData();
    formData.append('image', { uri: localUri, name: fileName, type })

        await api.post("/user/images", formData, {
            headers: {
              "Content-type": "multipart/form-data",
            },
          });


    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  useEffect(() => {
    loadUserInfo();
  }, []);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert(
            "Desculpa, para o sistema funcionar é necessário a permissão da câmera."
          );
        }
      }
    })();
  }, []);

  return (
    <>
      <Container>
        <ImageProfile
          source={userInfo.profileImage ? {uri : userInfo.profileImage } : imageProfile}
        />
        <ButtonProfile>
          <TextButton onPress={pickImage}> Editar Imagem </TextButton>
        </ButtonProfile>
        <Content>
          <Label> Nome </Label>
          <TextInputEditProfile
            keyboardType="default"
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
