export const fetchData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export const mainUrl = "https://fakestoreapi.com/products";
export type ProductType = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
};
