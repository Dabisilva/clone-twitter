import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tabs = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;

  height: 53px;
  padding: 11px 0 15;

  border-bottom: 1px solid var(--outline);
`;

export const  Tab = styled.div`
  display: flex;
  justify-content: center;

  text-align: center;
  width: 100%;
  
  padding: 15px 0;

  font-weight: bold;
  font-size: 15px;

  color: var(--gray);

  cursor: pointer;

  &:hover{
    background: var(--twitter-dark-hover);
    color: var(--twitter);
  }
  &.active {
    border-bottom: 2px solid var(--twitter);
    color: var(--twitter);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;

`;
