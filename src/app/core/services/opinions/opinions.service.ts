import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {getDataFromLocalStorage, setDataInLocalStorage} from '../../shared/utils/ts/localStorage.functions';
import { ILocalStorage } from '../../shared/utils/ts/localStorage.interfaces';
import { addOpinion, getOpinion } from '../../store/actions/opinion.actions';
import { LOCAL_STORAGE_KEYS } from '../../types/constants';
import { changeEvent, Opinions, OpinionStateInterface } from '../../types/interfaces';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OpinionsService extends AuthService implements ILocalStorage {

  opinions: Array<Opinions> = [];
  private OpinionStore = inject(Store<OpinionStateInterface>);
  opinions$: Observable<OpinionStateInterface>;
  reMode = 100;

  constructor() {
    super()
    this.opinions$ = this.OpinionStore.select("posts");
    this.opinions$.subscribe(x => {
      this.opinions = x.opinion;
    });
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

  async ChangeOpinion(matchId: string, updateContent: Partial<changeEvent>, local: boolean): Promise<void>{
    if(local){
      // let tmpOpn = this.opinions.map(m => {
      //   if(m.id == Number(matchId)){
      //     m.content = updateContent.content as string;
      //   }
      //   return m;
      // });
      // this.AddOpinionsToLocalStorage<Array<Opinions>>(LOCAL_STORAGE_KEYS.op, tmpOpn);
      this.GetOpinionFromLocalStorage(true);
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
      this.FilterOpinionDataFromLocalStorage(Number(changeData.id));
      this.GetOpinionFromLocalStorage(true);
      return;
    }
    const {error} = await this.supabaseClient
    .from("opinions")
    .delete().match(changeData);
    if(error) console.error(error);
    this.GetOpinionFromDatabase();
  }

  AddOpinionToStore(v: Opinions): void{
    this.OpinionStore.dispatch(addOpinion({opinion: v}));
  }

  AddOpinionsToLocalStorage<TypeData>(key: string, data: TypeData){
    setDataInLocalStorage<TypeData>(key, data);
  }

  GetOpinionFromLocalStorage(localFrom: boolean): Array<Opinions> | null {
    if(localFrom){
      let obj = getDataFromLocalStorage<Array<Opinions>>("op");
      if(obj !== null){
        this.AddOpinionDataToOpinionsTable(obj);
        return null;
      }
    }
    this.AddOpinionDataToOpinionsTable(getDataFromLocalStorage<Array<Opinions>>("op"));
    return getDataFromLocalStorage<Array<Opinions>>("op");
  }

  FilterOpinionDataFromLocalStorage(id: number){
    let b = getDataFromLocalStorage<Array<Opinions>>("op").filter((c: any) => c.id !== id);
    this.AddOpinionsToLocalStorage<Array<Opinions>>(LOCAL_STORAGE_KEYS.op, b);
  }

  AddOpinionDataToOpinionsTable(d: Array<Opinions>){
    // this.opinions = d;
  }

  AddOpinionSingleDataToOpinionsTable(d: Opinions){
    // this.opinions.push(d);
  }
}
