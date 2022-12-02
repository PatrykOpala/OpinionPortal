import { Injectable } from '@angular/core';
import { Opinions } from '../../types/interfaces';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OpinionsService extends AuthService {

  opinions: Opinions[] = [];
  close = false;
  reMode = 100;

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
    this.AddOpinionDataToOpinionsTable(data != null ? data : []);
  }

  async ChangeOpinion(matchId: any, updateContent: any, local: boolean): Promise<void>{
    if(local){
      let tmpOpn = this.opinions.map(m => {
        if(m.id == matchId){
          m.content = updateContent.content;
        }
        return m;
      });
      window.localStorage.setItem("op", JSON.stringify(tmpOpn));
      this.GetOpinionFromLocalStorage();
      return;
    }
    const {error} = await this.supabaseClient
    .from("opinions")
    .update(updateContent).match({id: matchId});
    if(error) console.error(error);
    this.GetOpinionFromDatabase();
  }

  async DeleteOpinion(changeData: any, local: boolean): Promise<void>{
    if(local){
      this.FilterOpinionDataFromLocalStorage(changeData.id);
      this.GetOpinionFromLocalStorage();
      return;
    }
    const {error} = await this.supabaseClient
    .from("opinions")
    .delete().match(changeData);
    if(error) console.error(error);
    this.GetOpinionFromDatabase();
  }

  GetOpinionFromLocalStorage(): void {
    let obj = JSON.parse(window.localStorage.getItem("op") as string);
    if(obj !== null){
      this.AddOpinionDataToOpinionsTable(obj);
    }
  }

  FilterOpinionDataFromLocalStorage(id: number){
    let h = JSON.parse(window.localStorage.getItem("op") as string);
    let b = h.filter((c: any) => c.id !== id);
    window.localStorage.setItem("op", JSON.stringify(b));
  }

  AddOpinionDataToOpinionsTable(d: any[]){
    this.opinions = d;
  }

  AddOpinionSingleDataToOpinionsTable(d: any){
    this.opinions.push(d);
  }

  CloseAddComponent(){
    this.close = true;
  }
}
