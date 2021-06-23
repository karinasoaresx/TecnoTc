import React, { useState, useEffect } from "react";
import colors from "../../../styles/colors";
import {
  ViewGroup, Container, InfoUser, Background, TitleUserProfile,
  ImageProfile, NameUser, EmailUser, ButtonProfile, TextButton, ViewNote,
  ImageGroup, TitleGroup, Group, SettingsGroup, Note, TitleNote, SettingsNote,
  PerfilLogout, IconSignOut
} from "./styles";
import { FlatList, StatusBar, TouchableOpacity } from "react-native";
import imgBackground from "../../../../assets/backgroundGradiente.png";
import settings from "../../../../assets/settings.png";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { signOut } from "../../../services/security";
import { api } from "../../../services/api";


function GroupsScreen({ group }) {
  return (
    <>
      <ViewGroup>
        <FlatList data={group}
        keyExtractor={(groups) => String(groups.id)}
        renderItem={({item: groups}) => (
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

function NoteScreen({anotations}) {
  return (
    <>
      <ViewNote>
        <Note>
          <SettingsNote source={settings} />
          <TitleNote> titulo da anotação </TitleNote>
        </Note>

        <Note>
          <SettingsNote source={settings} />
          <TitleNote> titulo da anotação </TitleNote>
        </Note>
      </ViewNote>
    </>
  );
}

const Tab = createMaterialTopTabNavigator();

function Profile({ navigation }) {

  StatusBar.setBackgroundColor(colors.darkPurple);

  const [isLoadingFeed, setIsLoadingFeed] = useState(false);
  const [groups, setGroups] = useState([]);
  const [anotations, setAnotations] = useState([])

  const handleSignOut = () => {
    signOut();
    navigation.navigate("Login");
  };

  const loadGroups = async () => {

    const response = await api.get("/group");

    setGroups(response.data)

    // console.log(response.data)

  }

  useEffect(() => {
    if (groups.length === 0) {
      loadGroups();
    }
  }, [groups])

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

          <ImageProfile />
          <NameUser> karina soares </NameUser>
          <EmailUser> karina@gmail.com </EmailUser>
          <ButtonProfile>
            <TextButton> Editar Perfil </TextButton>
          </ButtonProfile>
        </InfoUser>
      </Container>
      <Tab.Navigator tabBarOptions={{
        activeTintColor: 'white',
        indicatorStyle: { borderColor: 'white', borderBottomWidth: 4 },
        style: {
          backgroundColor: 'transparent',
        }
      }}>

        <Tab.Screen name="Grupos" children={() => <GroupsScreen group={groups} />} />
        <Tab.Screen name="Anotações" children={() => <NoteScreen anotation={anotations} />} />
      </Tab.Navigator>
    </>
  );
};

export default Profile;