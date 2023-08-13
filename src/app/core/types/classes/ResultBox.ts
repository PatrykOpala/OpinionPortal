import { QueryResult } from "../enums";

export class ResultBox{
    private _result: QueryResult | null = null;

    get getResult(){
        return this._result;
    }

    set setResult(result: QueryResult){
        this._result = result;
    }
}