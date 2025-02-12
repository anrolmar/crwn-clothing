import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router';

import { DirectoryItemContainer, BackgroundImage, DirectoryItemBodyContainer } from './directory-item.styles';
import { Category } from '../../types';

interface DirectoryItemProps {
  category: Category;
}

const DirectoryItem: FunctionComponent<DirectoryItemProps> = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <DirectoryItemBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
