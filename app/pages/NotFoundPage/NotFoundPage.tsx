import styled from 'styled-components';
import { CenterScreen } from 'layouts/Screens';
import { centerAlignment } from 'layouts/properties';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <CenterScreen>
      <Wrapper as={Link} to="/">
        <Notice>404</Notice>
      </Wrapper>
    </CenterScreen>
  );
};

const Wrapper = styled.div`
  all: unset;
  height: 30%;
  width: 25%;
  display: flex;
  ${centerAlignment}
  // animation
  transition: all 0.25s ease-out; // delay: 0s
  // hover
  &:hover {
    border: 2px solid #fff;
    box-sizing: border-box;
  }
`;
const Notice = styled.div`
  font-size: 100px;
`;

export default NotFoundPage;
