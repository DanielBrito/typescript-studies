import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Daniel Brito" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Diego Fernandes Oliveira" isBot />
      <UserRow nickname="Fulano da Silva" />
      <UserRow nickname="Sicrano de Sousa" />
      <UserRow nickname="Diego Fernandes Oliveira" isBot />
      <UserRow nickname="Fulano da Silva" />
      <UserRow nickname="Sicrano de Sousa" />
      <UserRow nickname="Diego Fernandes Oliveira" isBot />
      <UserRow nickname="Fulano da Silva" />
      <UserRow nickname="Sicrano de Sousa" />
      <UserRow nickname="Diego Fernandes Oliveira" isBot />
      <UserRow nickname="Fulano da Silva" />
      <UserRow nickname="Sicrano de Sousa" />
      <UserRow nickname="Diego Fernandes Oliveira" isBot />
      <UserRow nickname="Fulano da Silva" />
      <UserRow nickname="Sicrano de Sousa" />
      <UserRow nickname="Diego Fernandes Oliveira" isBot />
      <UserRow nickname="Fulano da Silva" />
      <UserRow nickname="Sicrano de Sousa" />
    </Container>
  );
};

export default UserList;
