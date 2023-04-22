import { TypeProduct } from "../enums";

export class Product {
    id: number;
    name: string;
    type_product: TypeProduct;
    description: string;
    user_id: string;

    constructor(name: string, type_product: TypeProduct, 
        description: string, user_id: string, id?: number){
        this.name = name;
        this.type_product = type_product;
        this.description = description;
        this.user_id = user_id;
        this.id = id!;
    }

    setId(id: number){
        this.id = id;
    }

    static returnProduct(id: number, name: string, type_product: TypeProduct,
         description: string, user_id: string): Product{
            return new Product(name, type_product, description, user_id, id);
    }

    static returnProductArray(queryArray: any[]): Product[]{
        return queryArray.reduce((query: Product[], nextProduct: Product)=>{
            let pr = new Product(nextProduct.name, nextProduct.type_product, 
                nextProduct.description, nextProduct.user_id, nextProduct.id);
            query.push(pr);
            return query;
        }, []);
    }
}