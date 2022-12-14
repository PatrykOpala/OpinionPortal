import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {getDataFromLocalStorage, setDataInLocalStorage} from '../../shared/utils/ts/localStorage.functions';
import { ILocalStorage } from '../../shared/utils/ts/localStorage.interfaces';
import { addOpinion, changeOpinion, deleteOpinion } from '../../store/actions/opinion.actions';
import { opinionSelector } from '../../store/selectors/selectors';
import { LOCAL_STORAGE_KEYS } from '../../types/constants';
import { changeEvent, Opinions, OpinionStateInterface } from '../../types/interfaces';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OpinionsService extends AuthService implements ILocalStorage {

  private OpinionStore = inject(Store<OpinionStateInterface>);
  opinions$: Observable<Array<Opinions>>;
  reMode = 100;

  constructor() {
    super()
    this.opinions$ = this.OpinionStore.select(opinionSelector);
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

  async ChangeOpinion(matchId: string, updateContent: changeEvent, local: boolean): Promise<void>{
    if(local){
      let bd: Opinions[] = [];
      let sub = this.opinions$.subscribe(
        element => {
          if(matchId != undefined && updateContent != undefined){
            bd = element.reduce((accu: Opinions[], next: Opinions): Opinions[] =>{
              if(next.id == Number(matchId)){
                let j = {...next};
                j.content = updateContent.content;
                accu.push(j);
                return accu;
              }
              accu.push(next);
              return accu;
            },[]);
          }
        }
      );
      if(bd.length != 0){
        sub.unsubscribe();
        this.OpinionStore.dispatch(changeOpinion({opinion: bd}));
      }
      // this.AddOpinionsToLocalStorage<Array<Opinions>>(LOCAL_STORAGE_KEYS.op, tmpOpn);
      // this.GetOpinionFromLocalStorage(true);
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
      // this.FilterOpinionDataFromLocalStorage(Number(changeData.id));
      // this.GetOpinionFromLocalStorage(true);
      this.DeleteOpinionFromState(Number(changeData.id));
      return;
    }
    const {error} = await this.supabaseClient
    .from("opinions")
    .delete().match(changeData);
    if(error) console.error(error);
    this.GetOpinionFromDatabase();
  }

  DeleteOpinionFromState(id: number): void{
    let newArray: Opinions[] = [];
    let deletingSub = this.opinions$.subscribe(
      deleteEl =>{
        if(id != undefined){
          newArray = deleteEl.filter(e => e.id !== id);
        }
      }
    );
    if(newArray.length !== 0){
      deletingSub.unsubscribe();
    }
    this.OpinionStore.dispatch(deleteOpinion({opinion: newArray}));
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
