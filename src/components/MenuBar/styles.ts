import styled, { css } from 'styled-components';
import {
  Twitter,
  Home,
  Hash,
  Search,
  Notifications,
  Email,
  Flag2,
  DocumentText,
  Person,
  EllipsisHorizontal,
  FeatherAlt,
  KeyboardArrowDown,
} from '../../styles/icons';
import Button from '../Button';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;
    max-height: 100vh;
  }
`;

export const TopSide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

const iconsCSS = css`
  width: 35px;
  height: 35px;

  flex-shrink: 0;
  cursor: pointer;
`;

export const Logo = styled(Twitter)`
  width: 50px;
  height: 50px;

  flex-shrink: 0;
  cursor: pointer;

  margin: 10px 10px;
  padding: 10px;
  border-radius: 50%;

  outline: 0px;

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;

  flex-shrink: 0;

  > span {
    display: none;
  }
  padding: 10px;
  outline: 0;
  border-radius: 50%;
  &:hover {
    background: var(--twitter-dark-hover);
  }
  &:hover,
  &.active {
    > span {
      color: var(--twitter);
    }
    > svg path {
      color: var(--twitter);
    }
  }

  &:nth-child(4) {
    margin-top: -2vh;
  }

  &:nth-child(3) {
    margin-top: -1vh;
  }

  &:last-child {
    padding: 0;
    background: none;
    margin-top: 30px;
  }
  @media (min-width: 1280px) {
    border-radius: 25px;
    padding: 5px 10px;
    margin-bottom: 10px;
    > span {
      display: inline;
      font-size: 20px;
      font-weight: bold;
      margin-left: 19px;

      cursor: pointer;
    }
  }
`;

export const HomeIcon = styled(Home)`
  ${iconsCSS}
`;

export const Hashtag = styled(Hash)`
  display: none;
  &:hover {
    background: none;
  }
  @media (min-width: 1000px) {
    display: inline;
    ${iconsCSS}
  }
`;

export const SearchIcon = styled(Search)`
  ${iconsCSS}

  @media(min-width:1000px) {
    display: none;
    margin: 0;
    padding: 0;
  }
`;

export const BellIcon = styled(Notifications)`
  ${iconsCSS}
`;

export const MailIcon = styled(Email)`
  ${iconsCSS}
`;

export const FlagIcon = styled(Flag2)`
  ${iconsCSS}
`;

export const ListIcon = styled(DocumentText)`
  ${iconsCSS}
`;

export const PerfilIcon = styled(Person)`
  ${iconsCSS}
  &:hover {
    color: var(--twitter);
    > svg path {
      color: var(--twitter);
    }
  }
`;

export const MenuButtonMore = styled.div`
  display: flex;
  align-items: center;
  padding: 3px;
  border-radius: 50%;

  &:hover {
    background: var(--twitter-dark-hover);
  }
  > span {
    display: none;
  }
  @media (min-width: 1280px) {
    border-radius: 25px;
    padding: 3px 10px;
    margin-top: 3px;
    > span {
      display: flex;
      font-size: 20px;
      font-weight: bold;
      margin-left: 17px;

      cursor: pointer;
    }
  }

  &:hover,
  &.active {
    > span {
      color: var(--twitter);
    }
    > svg {
      border: 2px solid var(--twitter);
      fill: var(--twitter);
    }
  }
`;

export const MoreIcon = styled(EllipsisHorizontal)`
  ${iconsCSS}

  width: 25px;
  height: 25px;
  margin: 10px 10px;
  border: 2px solid var(--white);
  border-radius: 50%;
`;

export const EditButton = styled(Button)`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    padding: 15px 90px;
    font-size: 15px;
  }
`;

export const Buttonfeather = styled.button`
  background: var(--twitter);
  padding: 10px;

  margin-top: 16.5px;

  border-radius: 50%;
  cursor: pointer;

  transition: 0.2s;
  &:hover {
    background: var(--twitter-light-hover);
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const FeatherIcon = styled(FeatherAlt)`
  display: flex;
  fill: var(--white);

  width: 25px;
  height: 25px;

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const BotSide = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;

  border-radius: 50%;
  &:hover {
    border-radius: 30px;
    background: var(--twitter-dark-hover);
  }
 
`;

export const ProfileData = styled.div`
  display: none;

  @media(min-width: 1280px){
    display: flex;
    flex-direction: column;
    
    margin-left: 10px;
    font-size: 14px;

    > span {
      color: var(--gray);
    }
  }
`;

export const Avatar = styled.div`
  width: 44px;
  height: 44px;

  border-radius: 50%;

  background: var(--gray);
`;

export const ArrowIcon = styled(KeyboardArrowDown)`
  ${iconsCSS}
  display: none;

  @media(min-width: 1280px){
    display: inline-block;

    margin-left: 50px;
  }
`;
