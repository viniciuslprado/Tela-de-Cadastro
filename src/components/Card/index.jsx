import { FiThumbsUp } from 'react-icons/fi'
import React from 'react'

import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles'
const Card = ({
  authorName = 'Nome da pessoa',
  timeAgo = 'Há x minutos',
  userImage = 'https://source.unsplash.com/80x80/?portrait',
  title = 'Projeto para curso de HTML e CSS',
  description = 'Projeto feito no curso de html e css no bootcamp da dio do Global avanade...',
  thumbnails = [
  'https://source.unsplash.com/300x180/?code',
  'https://source.unsplash.com/300x180/?website'
  ],
  hashtags = '#HTML #CSS #javascript',
  likes = 10,
  background = 'https://via.placeholder.com/800x180'
}) => {
  return (
    <CardContainer>
      <ImageBackground src={background} />
      <Content>
        <UserInfo>
          <UserPicture src={userImage} />
         <div>
          <h4>{authorName}</h4>
          <p>{timeAgo}</p>
        </div>
        </UserInfo>
        <PostInfo>
          <h4>{title}</h4>
          <p>{description} <strong>Ver Mais</strong></p>
          <div className="thumbnails">
            <img src={thumbnails[0]} alt="thumb1"/>
            <img src={thumbnails[1]} alt="thumb2"/>
          </div>
        </PostInfo>
        <HasInfo>
          <h4>{hashtags}</h4>
          <p>
            <FiThumbsUp />{likes}
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }
