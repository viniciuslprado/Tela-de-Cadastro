import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card authorName="Nome da pessoa" timeAgo="Há x minutos" userImage="https://placedog.net/80/80?random" thumbnails={["https://placedog.net/300/180?random","https://placekitten.com/300/180"]} />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Nome da pessoa" image="https://source.unsplash.com/80x80/?person,1" percentual={25}/>
                <UserInfo nome="Nome da pessoa" image="https://source.unsplash.com/80x80/?person,2" percentual={65}/>
                <UserInfo nome="Nome da pessoa" image="https://source.unsplash.com/80x80/?person,3" percentual={45}/>
                <UserInfo nome="Nome da pessoa" image="https://source.unsplash.com/80x80/?person,4" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 
