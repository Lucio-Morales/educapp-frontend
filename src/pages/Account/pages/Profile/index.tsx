import {
  Avatar,
  Header,
  ProfileContainer,
  UserBio,
  UserInfo,
  UserName,
  Stats,
  StatItem,
  StatCount,
  StatLabel,
  ExtraInfo,
  InfoTitle,
  InfoContent,
  EditProfileButton,
} from './styles';
import image_demo from './styles/img/logo.jpeg';

const Profile = () => {
  return (
    <ProfileContainer>
      <Header>
        <Avatar src={image_demo} alt="Foto de perfil del usuario" />
        <UserInfo>
          <UserName>Lucio Morales</UserName>
          <UserBio>Desarrollador web - Creador de contenido</UserBio>
        </UserInfo>
        <EditProfileButton>Editar perfil</EditProfileButton>
      </Header>

      <Stats>
        <StatItem>
          <StatCount>120</StatCount>
          <StatLabel>Seguidores</StatLabel>
        </StatItem>
        <StatItem>
          <StatCount>150</StatCount>
          <StatLabel>Siguiendo</StatLabel>
        </StatItem>
        <StatItem>
          <StatCount>30</StatCount>
          <StatLabel>Posts</StatLabel>
        </StatItem>
      </Stats>

      <ExtraInfo>
        <InfoTitle>Información Adicional</InfoTitle>
        <InfoContent>
          Aquí puedes agregar cualquier otra información adicional sobre el
          usuario, como intereses, ocupación, etc.
        </InfoContent>
      </ExtraInfo>
    </ProfileContainer>
  );
};

export default Profile;
