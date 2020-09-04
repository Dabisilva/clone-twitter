import React from 'react';
import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';


const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Davi Barbosa</h1>
        <h2>@Dabisilva1</h2>

        <p>
          18 anos. Um pouquinho chato xd. Desenvolvedor de software ... E só
        </p>

        <ul>
          <li>
            <LocationIcon />
            Brasília, Brasil
          </li>

          <li>
            <CakeIcon />
            Nascido(a) 28 de outubro de 2001
          </li>
        </ul>

        <Followage>
          <span>
            <strong>112 </strong>seguindo
          </span>

          <span>
            <strong>6 </strong>seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed/>
    </Container>
  );
};

export default ProfilePage;
