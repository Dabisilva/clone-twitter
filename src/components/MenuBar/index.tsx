import React from 'react';
import Button from '../Button';

import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  MenuButtonMore,
  HomeIcon,
  Hashtag,
  SearchIcon,
  BellIcon,
  MailIcon,
  FlagIcon,
  ListIcon,
  PerfilIcon,
  MoreIcon,
  EditButton,
  Buttonfeather,
  FeatherIcon,
  BotSide,
  ProfileData,
  Avatar,
  ArrowIcon
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <Hashtag />
          <span>Explorar</span>
        </MenuButton>

        <MenuButton>
          <SearchIcon />
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <MailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FlagIcon />
          <span>Itens salvos</span>
        </MenuButton>

        <MenuButton>
          <ListIcon />
          <span>Listas</span>
        </MenuButton>

        <MenuButton className="active">
          <PerfilIcon />
          <span>Perfil</span>
        </MenuButton>

        <MenuButtonMore>
          <MoreIcon />
          <span>Mais</span>
        </MenuButtonMore>

        <MenuButton>
          <EditButton>Twettar</EditButton>

          <Buttonfeather>
            <FeatherIcon />
          </Buttonfeather>
        </MenuButton>
      </TopSide>

      <BotSide>
          <Avatar />
       
          <ProfileData>
            <strong>Davi Barbosa</strong>
            <span>@Dabisilva1</span>
          </ProfileData>
  

        <ArrowIcon />
      </BotSide>
    </Container>
  );
};

export default MenuBar;
