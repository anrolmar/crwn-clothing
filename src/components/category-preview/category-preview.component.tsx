import { FunctionComponent } from 'react';

import { CategoryPreviewContainer, TitleLink, PreviewContainer } from './category-preview.styles';
import { Product } from '../../types';
import ProductCard from '../product-card/product-card.component';

interface CategoryPreviewProps {
  title: string;
  products: Product[];
}

const CategoryPreview: FunctionComponent<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleLink to={`${title}`}>{title.toUpperCase()}</TitleLink>
      </h2>
      <PreviewContainer>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewContainer>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
