import { Injectable } from '@angular/core';
import { Opinions } from '../../types/typesOpinier';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OpinionsService extends AuthService {

  opinions: Opinions[] | null = [];
  close = false;
  reMode = 100;

  constructor() {
    super()
    this.opinions = JSON.parse(window.localStorage.getItem("op")as string);
  }

  async SendOpinionToDatabase(opinions: Opinions): Promise<void>{
    await this.supabaseClient.from('opinions').insert(opinions);
    this.GetOpinionFromDatabase();
  }

  async GetOpinionFromDatabase(): Promise<void>{
    let { data, error } = await this.supabaseClient
    .from('opinions')
    .select('*');
    if(!error || error === null)
    this.opinions = data;
  }

  async ChangeOpinion(matchId: any, updateContent: any): Promise<void>{
    const {error} = await this.supabaseClient
    .from("opinions")
    .update(updateContent).match({id: matchId});
    if(error) console.error(error);
    this.GetOpinionFromDatabase();
  }

  async DeleteOpinion(changeData: any): Promise<void>{
    const {error} = await this.supabaseClient
    .from("opinions")
    .delete().match(changeData);
    if(error) console.error(error);
    this.GetOpinionFromDatabase();
  }

  CloseAddComponent(){
    this.close = true;
  }
}
