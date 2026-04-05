// types/product.ts
export type Product = {
    id: string;
    title: string;
    type: string;
    slug: string;
    price: number;
    description: string;
    image: {
        url: string;
        height: number;
        width: number;
    }[];
    baseUrl: string;
};