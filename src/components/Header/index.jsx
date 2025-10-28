import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo-dio.png';

import { Button } from '../Button';
import { FiSearch, FiShare2, FiChevronDown, FiBell } from 'react-icons/fi'

import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture, LeftLabel, RightIcons, IconButton, PercentText } from './styles';

const Header = ({autenticado}) => {
  const navigate = useNavigate()
  const stored = typeof window !== 'undefined' ? localStorage.getItem('user') : null
  const user = stored ? JSON.parse(stored) : null
  const isAuth = autenticado || Boolean(user)

  return (
    <Wrapper>
      <Container>
          <Row>
            <LeftLabel>{user?.nome ? user.nome : 'Usuário home'}</LeftLabel>
            <img src={logo} alt="Logo da dio"/>
            {isAuth ? (
              <>
               <BuscarInputContainer>
                <FiSearch color="#999" />
                <Input placeholder='BUSCAR' />
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
              {isAuth ? (
                <RightIcons>
                  <IconButton title="Compartilhar"><FiShare2 /></IconButton>
                  <PercentText>64%</PercentText>
                  <IconButton><FiBell /></IconButton>
                  <UserPicture src={user?.image ? user.image : 'https://avatars.dicebear.com/api/initials/default.svg'}/>
                  <IconButton><FiChevronDown /></IconButton>
                  <IconButton onClick={() => { localStorage.removeItem('user'); navigate('/'); }}>Sair</IconButton>
                </RightIcons>
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Button title="Entrar" onClick={() => navigate('/login')} />
                <Button title="Cadastrar" onClick={() => navigate('/register')} />
              </>)}
          </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
