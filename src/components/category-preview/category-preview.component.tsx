import { FunctionComponent } from 'react';
import { Link } from 'react-router';

import { Product } from '../../types';
import ProductCard from '../product-card/product-card.component';

import './category-preview.styles.scss';

interface CategoryPreviewProps {
  title: string;
  products: Product[];
}

const CategoryPreview: FunctionComponent<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={`${title}`} className="title">
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
