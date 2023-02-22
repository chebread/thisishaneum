import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { disabledSelection } from 'layouts/properties';
import { FullScreen } from 'layouts/Screens';

const ContactPanel = () => {
  return <Screen>hello</Screen>;
};

const Screen = styled(FullScreen)`
  // disabled cursur selection
  ${disabledSelection}
`;
const BottomLeftScreen = styled(FullScreen)`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: end;
`;

export default ContactPanel;
