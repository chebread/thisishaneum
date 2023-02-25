import styled, { css } from 'styled-components';
import { CenterScreen } from 'layouts/Screens';
import { CenterAlignment, DisabledSelection } from 'layouts/properties';
import { Link } from 'react-router-dom';
import DesktopScreen from 'layouts/Screens/DesktopScreen';

const NotFoundPage = () => {
  return (
    <Screen>
      <Wrapper as={Link} to="/">
        <Notice>404</Notice>
      </Wrapper>
    </Screen>
  );
};

const Screen = styled(CenterScreen)`
  ${DisabledSelection}
`;
const Wrapper = styled.div`
  all: unset;
  height: 25%;
  width: 25%;
  display: flex;
  ${CenterAlignment}
  // border
    box-sizing: border-box;
  border-radius: 30px;
  // animation
  transition: transform 0.25s, box-shadow 0.25s, border 0.25s; // delay: 0s;
  transition-timing-function: ease-out;
  // hover
  &:hover {
    border: 1px solid #fff; // not using animation
    transform: translate(10px, -10px);
    box-shadow: -10px 10px #fff;
  }
`;
const Notice = styled.div`
  font-size: 100px;
`;

export default NotFoundPage;
