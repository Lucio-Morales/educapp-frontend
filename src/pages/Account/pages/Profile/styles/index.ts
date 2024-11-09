import styled from 'styled-components';
import padding from '../../../../../styles/constants/padding';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${padding.regular};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;

  @media (max-width: 768px) {
    padding: ${padding.regular};
  }
`;

const EditProfileButton = styled.button`
  margin-left: auto;
  padding: 0.5rem 1rem;
  background-color: #94b9ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;

  //   &:hover {
  //     background-color: #6882b4;
  //   }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: ${padding.regular};
  margin-bottom: ${padding.regular};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.border};

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryText};

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const UserBio = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondaryText};

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const Stats = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  padding: ${padding.regular} 0;
  border-top: 1px solid ${({ theme }) => theme.border};
  border-bottom: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 768px) {
    gap: 1rem;
    justify-content: space-around;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatCount = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryText};

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const StatLabel = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.secondaryText};

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const ExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${padding.regular};
`;

const InfoTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryText};

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const InfoContent = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondaryText};

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export {
  ProfileContainer,
  Header,
  Avatar,
  UserInfo,
  UserName,
  UserBio,
  Stats,
  StatItem,
  StatCount,
  StatLabel,
  ExtraInfo,
  InfoTitle,
  InfoContent,
  EditProfileButton,
};
