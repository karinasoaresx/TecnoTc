import React, { useState, useEffect } from "react";
import imageProfile from '../../../../assets/foto_perfil.png'
import colors from "../../../styles/colors";
import {
  ViewGroup,
  Container,
  InfoUser,
  Background,
  TitleUserProfile,
  ImageProfile,
  NameUser,
  EmailUser,
  ButtonProfile,
  TextButton,
  ViewNote,
  ImageGroup,
  TitleGroup,
  Group,
  SettingsGroup,
  Note,
  TitleNote,
  SettingsNote,
  PerfilLogout,
  IconSignOut,
} from "./styles";
import { FlatList, StatusBar, TouchableOpacity } from "react-native";
import imgBackground from "../../../../assets/backgroundGradiente.png";
import settings from "../../../../assets/settings.png";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { getUser, signOut } from "../../../services/security";
import { api } from "../../../services/api";

function GroupsScreen({ group }) {
  return (
    <>
      <ViewGroup>
        <FlatList
          data={group}
          keyExtractor={(groups) => String(groups.id)}
          renderItem={({ item: groups }) => (
            <Group>
              <SettingsGroup source={settings} />
              <ImageGroup />
              <TitleGroup> {groups.name} </TitleGroup>
            </Group>
          )}
        />
      </ViewGroup>
    </>
  );
}

function NoteScreen({ anotation }) {

  return (
    <>
      <ViewNote>
        <FlatList data={anotation}
        keyExtractor={(annotation) => String(annotation.id)}
        renderItem={({ item: annotation }) =>(
          <Note key={annotation.id}>
          <SettingsNote source={settings} />
          <TitleNote> {annotation.title} </TitleNote>
        </Note>
        )}/>
      </ViewNote>
    </>
  );
}

const Tab = createMaterialTopTabNavigator();

function Profile({ navigation }) {
  StatusBar.setBackgroundColor(colors.darkPurple);

  const [isLoadingFeed, setIsLoadingFeed] = useState(false);
  const [groups, setGroups] = useState([]);
  const [annotations, setAnnotations] = useState([]);
  const [userInfo, setUserInfo] = useState([])

 

  const handleSignOut = () => {
    signOut();
    navigation.navigate("Login");
  };

  const handleEditProfile = async () => {
    navigation.navigate("EditProfile")
  };

  const loadGroups = async () => {
    const response = await api.get("/group");

    setGroups(response.data);

    // console.log(response.data)
  };

  const loadAnnotations = async () => {
    const response = await api.get("/annotations");
    setAnnotations(response.data);
  };

  const loadUserInfo = async () => {

    const user = await getUser();

    try {
      const response = await api.get(`/${user.userRole + "s"}`)
      setUserInfo(response.data)  
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (groups.length === 0) {
      loadGroups();
    }
  }, [groups]);

  useEffect(() => {
    loadAnnotations();
    loadUserInfo();
  }, []);

  return (
    <>
      <Container>
        <InfoUser>
          <Background source={imgBackground} />
          <PerfilLogout>
            <TitleUserProfile> Perfil do Usuário </TitleUserProfile>
            <TouchableOpacity>
              <IconSignOut name="sign-out" onPress={handleSignOut} />
            </TouchableOpacity>
          </PerfilLogout>
          <ImageProfile source={userInfo.profileImage ? userInfo.profileImage : imageProfile}/>
          <NameUser> {userInfo.name} </NameUser>
          <EmailUser> {userInfo.email} </EmailUser>
          <ButtonProfile>
            <TouchableOpacity>
            <TextButton onPress={handleEditProfile}> Editar Perfil </TextButton>
            </TouchableOpacity>
          </ButtonProfile>
        </InfoUser>
      </Container>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "white",
          indicatorStyle: { borderColor: "white", borderBottomWidth: 4 },
          style: {
            backgroundColor: "transparent",
          },
        }}
      >
        <Tab.Screen
          name="Grupos"
          children={() => <GroupsScreen group={groups} />}
        />
        <Tab.Screen
          name="Anotações"
          children={() => <NoteScreen anotation={annotations} />}
        />
      </Tab.Navigator>
    </>
  );
}

export default Profile;
