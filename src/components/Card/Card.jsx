import { useState } from 'react';

import {
  CardContainer,
  CardLogo,
  CardPictureThumb,
  CardRowLine,
  CardAvatar,
  CardTweetThumb,
  CardFollowThumb,
  CardText,
  CardBtn,
  CardBtnFollowing,
} from 'components/Card/Card.styled';

import logo from 'components/Card/logo.png';
import cardPicture from './cardPicture.png';
import avatar from './avatar.png';

const Card = () => {
  const [isFollow, setFollow] = useState(false);
  let [value, setValue] = useState(100500);

  const onHandleClick = () => {
    setFollow(!isFollow);
    localStorage.setItem('isFollow', JSON.stringify(isFollow));

    if (!isFollow) {
      setValue((value += 1));
      localStorage.setItem('value', JSON.stringify(value));
    } else {
      setValue((value = value - 1));
      localStorage.setItem('value', JSON.stringify(value));
    }
  };

  const savedValue = localStorage.getItem('value');
  const parsedValue = JSON.parse(savedValue);
  const savedIsFollow = localStorage.getItem('isFollow');
  const parsedIsFollow =
    savedIsFollow === null ? true : JSON.parse(savedIsFollow);

  return (
    <CardContainer>
      <CardLogo
        src={logo}
        width="76"
        height="22"
        aria-label="Іконка компанії GoIT"
      />
      <CardPictureThumb>
        <img
          src={cardPicture}
          alt="Зображення питання-відповідь"
          width="308"
          height="168"
        />
      </CardPictureThumb>
      <CardRowLine />
      <CardAvatar
        src={avatar}
        width="80"
        height="80"
        alt="Аватар користувача"
      />

      <CardTweetThumb>
        <CardText>777</CardText>
        <CardText>tweets</CardText>
      </CardTweetThumb>
      <CardFollowThumb>
        <CardText>
          {parsedValue?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') ||
            '100,500'}
        </CardText>
        <CardText>Followers</CardText>
      </CardFollowThumb>
      {parsedIsFollow ? (
        <CardBtn type="button" onClick={onHandleClick}>
          Follow
        </CardBtn>
      ) : (
        <CardBtnFollowing type="button" onClick={onHandleClick}>
          Following
        </CardBtnFollowing>
      )}
    </CardContainer>
  );
};

export default Card;
