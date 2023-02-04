import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { disabledSelection } from 'layouts/properties';
import { CenterScreen } from 'layouts/Screens';

// (feat): 재구성; 개발
const ContactPanel = () => {
  return (
    <Screen>
      <Wrapper>
        <Text>Let's work together</Text>
      </Wrapper>
      <Wrapper>
        <Button as={Link} to="c">
          Contact me this page
        </Button>
      </Wrapper>
    </Screen>
  );
};

const Screen = styled(CenterScreen)`
  gap: 10px;
  // disabled cursur selection
  ${disabledSelection}
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 81.25px;
`;
const Text = styled.div`
  font-size: 60px;
  font-weight: 800;
`;
const Button = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 400;
  mix-blend-mode: difference;
  padding: 11px 21px 11px 21px;
  // hover
  &:hover {
    background-color: #fff;
    color: #000;
  }
  // border
  border: 1px solid #fff;
  border-radius: 500px;
  box-sizing: border-box;
  // animation
  transition: all 0.2s ease-out; // delay: 0s
`;
export default ContactPanel;
