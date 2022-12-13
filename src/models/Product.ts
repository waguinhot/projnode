type Product = {
    title: string,
    price: number
}

const data: Product[] = [
    {title: 'Produto 01' , price: 10},
    {title: 'Produto 02' , price: 20},
    {title: 'Produto 03' , price: 40},
    {title: 'Produto 04' , price: 50},
];


export const  Product = {

    getAll: (): Product[] =>{
        return data;
    },

    getPriceAfter: (price: number): Product[] =>{

        return data.filter(item => item.price >= price);
    },

    getPriceBefore: (price: number): Product[] =>{
        return data.filter(item => item.price <= price);
    }
};