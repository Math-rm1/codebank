export interface Product {
  id: string;
  name: string;
  description: string;
  image_url: string;
  slug: string;
  price: number;
  created_at: string;
}

export const products: Product[] = [
  {
    id: 'uuid',
    name: 'Product 1',
    price: 100.5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image_url: 'https://source.unsplash.com/random?product/' + Math.random(),
    slug: 'product-1',
    created_at: '2022-08-01T00:00:00',
  },
  {
    id: 'uuid',
    name: 'Product 2',
    price: 200.5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image_url: 'https://source.unsplash.com/random?product/' + Math.random(),
    slug: 'product-2',
    created_at: '2022-08-01T00:00:00',
  },
  {
    id: 'uuid',
    name: 'Product 3',
    price: 300.5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image_url: 'https://source.unsplash.com/random?product/' + Math.random(),
    slug: 'product-3',
    created_at: '2022-08-01T00:00:00',
  },
];
