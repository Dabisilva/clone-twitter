import styled, { css } from 'styled-components';
import { ArrowLeft, Home, Search, Notifications, Email } from '../../styles/icons'
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media(min-width: 500px){
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: var(--primary);
  
  display: flex;
  align-items: center;
  text-align: left;

  padding: 8px 0 13px;
  border-bottom: 1px solid var(--outline);

  > button{
    padding: 8px;
    border-radius: 50%;
   
    outline: 0px;
    cursor: pointer;

    &:hover{
      background: var(--twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;

  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  margin-left: 16px;

  display: flex;
  flex-direction: column;
  
  > strong{
    font-size: 19px;
  }

  >span {
    font-size: 15;
    color: var(--gray)
  }
`;

export const BottomMenu = styled.div`

`;

const iconsCSS = css`
  width: 24px;
  height: 24px;
  fill: var(--gray);

  cursor: pointer;

  transition: 0.2s;

  &:hover, &:active{
    fill: var(--twitter);
  }
`;

export const HomeIcon = styled(Home)`
  ${iconsCSS}  
`;

export const SearchIcon = styled(Search)`
  ${iconsCSS}
`;

export const BellIcon = styled(Notifications)`
  ${iconsCSS}
`;

export const EmailIcon = styled(Email)`
  ${iconsCSS}
`;
