import { FunctionComponent } from 'react';

import { Category } from '../../types';

import './category-item.styles.scss';

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <div className="category-container">
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
