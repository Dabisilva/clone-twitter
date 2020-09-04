import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  align-items:  center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;

  background: var(--gray);
  border-radius: 50%;
  flex-shrink: 0;

  margin-right: 10px;
  cursor: pointer;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 15px;

  > span {
    color: var(--gray);
  }
`;

export const FollowButton = styled(Button)`
  padding: 5px 15px;
`;