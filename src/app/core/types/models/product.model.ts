import { TypeProduct } from "../enums";

export class Product {
    private id?: number;
    private name: string;
    private type_product: TypeProduct;
    private description: string;
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