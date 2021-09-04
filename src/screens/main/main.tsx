import React, { useState } from 'react';
import Lego from '../../components/lego/lego';
import { TextInput, MainButton, MainHeader } from '../../components';
import Sum from '../../assets/sum-icon.png';
import Equal from '../../assets/equal-icon.png';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api';

import {
  Container,
  PurpleSquare,
  WhiteSquare,
  Logo,
  Text,
  BoxText,
  ButtonSignup,
  Imagem,
  Title,
} from './main-styles';
import * as Icon from 'react-icons/fa';

const Main: React.FC = () => {
  return (
    <>
      <Container>
        <PurpleSquare>
          <h3 style={{ fontSize: '30px', color: 'white' }}>Jogar </h3>
          <h3 style={{ fontSize: '30px', color: 'white' }}>Menu Principal </h3>
          <h3 style={{ fontSize: '30px', color: 'white' }}>Sair </h3>
        </PurpleSquare>
        <WhiteSquare>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '70vw',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h3 style={{ fontSize: '50px' }}>
              Digite é o resultado da soma dessas frações?{' '}
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '300px',
                marginBottom: '50px',
              }}
            >
              <TextInput
                onChange={() => {}}
                type="text"
                placeholder="Resultado"
              ></TextInput>

              <MainButton onClick={() => {}} title="Enviar">
                Enviar
              </MainButton>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: '70vw',
            }}
          >
            <Lego color="green" numbersSelecteds={3} />
            <Imagem
              src={Sum}
              height="100px"
              width="100px"
              hideImageOn800px={true}
            />
            <Lego color="yellow" numbersSelecteds={4} />
            <Imagem
              src={Equal}
              height="150px"
              width="150px"
              hideImageOn800px={true}
            />
            <Lego color="purple" numbersSelecteds={0} />
          </div>
        </WhiteSquare>
      </Container>
    </>
  );
};
export default Main;
