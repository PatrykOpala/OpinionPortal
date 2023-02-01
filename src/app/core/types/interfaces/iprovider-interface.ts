import { DatabaseQueryes } from "../classes/database-queryes-class";

export interface IProvider<TypeProvider>{
    initProvider(): DatabaseQueryes<TypeProvider>;
}