import { TypeProduct } from "../enums";

export class Product {
     id: number | undefined;
     name: string;
     type_product: TypeProduct;
     description: string;
    private user_id: string;

    constructor(name: string, type_product: TypeProduct, description: string, user_id: string){
        this.name = name;
        this.type_product = type_product;
        this.description = description;
        this.user_id = user_id;
    }

    setId(id: number){
        this.id = id;
    }

    returnProduct(id: number, name: string, type_product: TypeProduct, description: string, user_id: string): Product{
        this.id = id;
        this.name = name;
        this.type_product = type_product;
        this.description = description;
        this.user_id = user_id;

        const product = new Product(name, type_product, description, user_id);
        product.setId(id);

        return product;
    }
}