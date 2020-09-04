import styled, { css } from 'styled-components';
import { Retweet, Chat, Favorite } from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid var(--outline);
  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  cursor: pointer;
  > span {
    color: var(--gray);

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const RetweetedIcon = styled(Retweet)`
  width: 16px;
  height: 16px;

  margin-left: 35px;
  margin-right: 9px;

  > path {
    color: var(--gray);
  }
`;

const IconCSS = css`
  width: 19px;
  height: 19px;
`;

export const RetweetIcon = styled(Retweet)`
  ${IconCSS}

  > path {
    color: var(--retweet);
  }
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;
  position: relative;
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  cursor: pointer;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  > span {
    color: var(--gray);
  }

  > time {
    margin-left: 5px;
    color: var(--gray);
  }

  > strong,
  time {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.div`
  margin-top: 12px;

  width: 100%;
  height: min(285px, max(175px, 41vw));
  border-radius: 14px;

  background: var(--gray);
  cursor: pointer;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;
  margin: 11px auto 0;

  @media (min-width: 330px) {
    width: 63%;
  }

  > div {
    cursor: pointer;
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;

  color: var(--gray);
  
  > svg {
    margin-right: 5px;
  }

  transition: 0.2s;
  
  &:nth-child(1) {
    &:hover{
      color: var(--twitter);
    > svg path {
      color: var(--twitter);
    }
    }
  }

  &:nth-child(2) {
    color: var(--retweet);

    > svg path {
      color: var(--retweet);
    }
  }

  &:nth-child(3) {
    color: var(--like);
    > svg path {
      color: var(--like);
    }
  }
`;

export const CommentIcon = styled(Chat)`
  ${IconCSS}
  > path {
      color: var(--gray);
  }
`;

export const LikeIcon = styled(Favorite)`
  ${IconCSS}

  > path {
      color: var(--gray);
  }
`;
