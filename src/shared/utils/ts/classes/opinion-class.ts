import { Opinions } from "src/shared/utils/ts/interfaces/opinion.interface";

export class OpinionClass implements Opinions{
    head: string;
    content: string;

    constructor(_head: string, _content: string){
        this.head = _head;
        this.content = _content;
    }
}