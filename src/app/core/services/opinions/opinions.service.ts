import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addOpinion, changeOpinion, deleteOpinion, initOpinions } from '../../store/actions/opinion.actions';
import { opinionSelector } from '../../store/selectors/selectors';
import { changeEvent, Opinions, OpinionStateInterface } from '../../types/interfaces';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OpinionsService extends AuthService {

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
    if(!error || error === null){
      this.OpinionStore.dispatch(initOpinions({opinion: data as any}));
    }
  }

  async ChangeOpinion(matchId: string, updateContent: changeEvent): Promise<void>{
    const {error} = await this.supabaseClient
    .from("opinions")
    .update(updateContent).match({id: matchId});
    if(error){
      console.error(error); 
    }else{
      let bd: Opinions[] = [];
      let sub = this.opinions$.subscribe(
        element => {
          if(matchId != undefined && updateContent != undefined){
            bd = element.reduce((accu: Opinions[], nextOpinion: Opinions): Opinions[] =>{
              if(nextOpinion.id == Number(matchId)){
                let j = {...nextOpinion};
                j.content = updateContent.content;
                accu.push(j);
                return accu;
              }
              accu.push(nextOpinion);
              return accu;
            },[]);
          }
        }
      );
      if(bd.length != 0){
        sub.unsubscribe();
        this.OpinionStore.dispatch(changeOpinion({opinion: bd}));
      }
    }
  }

  async DeleteOpinion(changeData: any): Promise<void>{
    const {error} = await this.supabaseClient
    .from("opinions")
    .delete().match(changeData);
    if(error){
      console.error(error);
    }else{
      this.DeleteOpinionFromState(Number(changeData.id));
    }
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
}
