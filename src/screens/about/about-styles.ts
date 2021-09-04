import styled from 'styled-components';

import { ReactComponent as LogoTemRazao } from '../../assets/TemRazao-Logo.svg';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;


export const LeftSquare = styled.div`
  
display: flex;
flex-direction: column;
background-color: #6a2673;
width: 20vw;
height: 200%;
margin-top: 50%;
padding: 15px;

@media (max-width: 800px) {
  width: 100%;
  margin-top: 0;
}
`;

export const RightSquare = styled.div`
display: flex;
flex-direction: column;
background-color: white;
width: 80vw;
height: 100vh;
right: 0px;
margin-left: 50px;
align-items: center;
justify-content: flex-start;

@media (max-width: 800px) {
  width: 100%;
}
`;

interface LogoProps {
  size?: string;
}

export const Logo = styled(LogoTemRazao)<LogoProps>`
  height: ${props => (props.size ? props.size : '90%')};
  width: ${props => (props.size ? props.size : '90%')};

  @media (max-width: 800px) {
    height: 45%;
    width: 45%;
  }
`;

export const BoxText = styled.h4`
font-size: 20px;
font-weight: normal;
color: white;
`;
export const Text = styled.h3`
  font-size: 25px;
  font-weight: normal;
  color: #6a2673;
`;


