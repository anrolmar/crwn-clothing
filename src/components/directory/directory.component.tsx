import { FunctionComponent } from 'react';

import { DirectoryContainer } from './directory.styles';
import { CategoryWithRoute } from '../../types';
import DirectoryItem from '../directory-item/directory-item.component';

const categories: CategoryWithRoute[] = [
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    products: [],
    route: 'shop/hats',
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    products: [],
    route: 'shop/jackets',
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    products: [],
    route: 'shop/sneakers',
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    products: [],
    route: 'shop/womens',
  },
  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    products: [],
    route: 'shop/mens',
  },
];

const Directory: FunctionComponent = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.title} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
