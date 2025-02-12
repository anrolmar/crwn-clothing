import { styled } from 'styled-components';

import { InvertedButton } from '../button/button.styles';

export const ProductCardImage = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const ProductCardButton = styled(InvertedButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover ${ProductCardImage} {
    opacity: 0.8;
  }

  &:hover ${ProductCardButton} {
    opacity: 0.85;
    display: flex;
  }
`;

export const ProductCardFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const ProductCardName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const ProductCardPrice = styled.span`
  width: 10%;
`;
