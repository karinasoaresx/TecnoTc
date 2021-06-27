import React, { useEffect } from "react";
import { ScrollView, StatusBar } from "react-native";
import SendMessage from "../../components/sendMessage";
import TemplateChatLeft from "../../components/templateChatLeft";
import TemplateChatRight from "../../components/templateChatRight";
import colors from "../../styles/colors";
import { api } from "../../services/api";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  ContatoMensagem,
  NameContato,
  ContainerMensagens,
  ContainerInput,
  TextInputChat,
  ButtonSend
} from "./styles";
import { useState } from "react";
import io from "socket.io-client";
import { getUser } from "../../services/security";

const CONNECTION_PORT = "https://tecno-tcc-chat.herokuapp.com/";
let socket;
function Chat(group) {
  StatusBar.setBackgroundColor(colors.darkPurple);

  const [groupInfo, setGroupInfo] = useState([]);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [userToken, setUserToken] = useState([]);
  const [inRoom, setInRoom] = useState(false);

  const { groupId, chatId } = group.route.params;

  useEffect(() => {
    socket = io(CONNECTION_PORT, {
      transports: ["websocket", "polling", "flashsocket"],
    });
  }, [CONNECTION_PORT]);

  const handleMessage = (e) => {
    setMessage(e);
};

  const loadInfoGroup = async () => {
    try {
      const response = await api.get(`/group/${groupId}`);
      setGroupInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadInfoGroup();
  }, []);

  const loadUserInfo = async () => {
    const user = await getUser();
    setUserToken(user);

    try {
      const response = await api.get(`/${user.userRole + "s"}`);
      setUserInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList([...messageList, data]);
    });
  });

  const connectToRoom = () => {
    setInRoom(true);
    socket.emit("join_room", chatId);
  };

  const loadMessages = async () => {
    const response = await api.get(`/messages/${chatId}`);
    setMessageList(response.data);
  };

  useEffect(() => {
    connectToRoom();
    loadMessages();
    loadUserInfo();
  }, []);

  const sendMessage = async () => {
    let messageContent = {
      userId: userToken.userId,
      groupId: groupId,
      chatId: chatId,
      author: userInfo.name,
      message: message,
      createdAt: new Date().toISOString(),
    };

    await socket.emit("send_message", messageContent);
    setMessageList([...messageList, messageContent]);
    setMessage("");
  };

  return (
    <Container>
      <ContatoMensagem>
        <NameContato> karina </NameContato>
      </ContatoMensagem>
      <ContainerMensagens>
        <ScrollView>
          {messageList.map((message) => (
            <>
              {userToken.userId === message.userId ? (
                <TemplateChatLeft key={message.id} msg={message} />
              ) : (
                <TemplateChatRight msg={message} />
              )}
            </>
          ))}
        </ScrollView>
      </ContainerMensagens>
      <ContainerInput>
        <TextInputChat
          placeholder="Digite aqui sua mensagem"
          onChangeText={handleMessage}
          value={message}
          placeholderTextColor={colors.white}
        />
        <ButtonSend onPress={sendMessage}>
          <Icon name="paper-plane" size={30} color="#ffffff" />
        </ButtonSend>
      </ContainerInput>
    </Container>
  );
}

export default Chat;
