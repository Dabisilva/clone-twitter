import React from 'react';
import List from '../List';
import StickyBox from 'react-sticky-box';
import FollowSugestion from '../FollowSugestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSugestion name="Luiz Batanero" nickname="@lubatanero" />,
              <FollowSugestion name="Diego Fernandez" nickname="@diego3g" />,
              <FollowSugestion
                name="Guilherme Rodz"
                nickname="@guilherme_rodz"
              />,
            ]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />,<News />,<News />,<News />,]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default Sidebar;
