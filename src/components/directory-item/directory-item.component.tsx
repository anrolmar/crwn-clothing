import { FunctionComponent } from 'react';

import { Category } from '../../types';

import './directory-item.styles.scss';

interface DirectoryItemProps {
  category: Category;
}

const DirectoryItem: FunctionComponent<DirectoryItemProps> = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <div className="directory-item-container">
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="directory-item-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
