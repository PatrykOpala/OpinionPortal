import { Injectable } from '@angular/core';
import { Opinions } from '../../types/typesOpinier';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OpinionsService extends AuthService {

  opinions: any[] | null = [];
  close = false;
  reMode = false;

  constructor() {
    super()
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

  async ChangeOpinion(changeData: any): Promise<void>{
    const {error} = await this.supabaseClient
    .from("opinions")
    .update({content: 'Zmieniona Opinia'}).match(changeData);
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

  toogleREMode(){this.reMode = !this.reMode}
}
