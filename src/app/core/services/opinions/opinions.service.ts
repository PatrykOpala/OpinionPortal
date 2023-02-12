import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addOpinion, changeOpinion, deleteOpinion, initOpinions } from '../../store/actions/opinion.actions';
import { stateSelector,} from '../../store/selectors/selectors';
import { changeEvent, Opinions, OpinionStateInterface } from '../../types/interfaces';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OpinionsService extends AuthService {

  protected OpinionStore = inject(Store<OpinionStateInterface>);
  opinions$: Observable<OpinionStateInterface>;
  state: OpinionStateInterface = {user: '', opinion: []}; 
  reMode = 100;

  constructor() {
    super()
    this.opinions$ = this.OpinionStore.select(stateSelector);
    this.opinions$.subscribe(c => this.state = c);
  }

  SendOpinionToDatabase(opinions: Opinions): void{
    // await this.supabaseClient.from('opinions').insert(opinions);
    this.databaseQuery.pushToDatabase('opinions', opinions).then((resolve) => {
      console.log(`ResolveSend: ${resolve}`);
    });

    this.databaseQuery.getAllFromDatabase("opinions").then(resolveGet => console.log(resolveGet))
  }

  // async GetOpinionFromDatabase(): Promise<void>{
  //   let { data, error } = await this.supabaseClient
  //   .from('opinions')
  //   .select('*');
  //   if(!error || error === null){
  //     this.OpinionStore.dispatch(initOpinions({opinion: data as any}));
  //   }
  // }

  // async ChangeOpinion(matchId: string, updateContent: changeEvent): Promise<void>{
  //   const {error} = await this.supabaseClient
  //   .from("opinions")
  //   .update(updateContent).match({id: matchId});
  //   if(error){
  //     console.error(error); 
  //   }else{
  //     let bd: Opinions[] = [];
  //     if(matchId != undefined && updateContent != undefined){
  //       bd = this.state.opinion.reduce((accu: Opinions[], nextOpinion: Opinions): Opinions[] =>{
  //         if(nextOpinion.id == Number(matchId)){
  //           let j = {...nextOpinion};
  //           j.content = updateContent.content;
  //           accu.push(j);
  //           return accu;
  //         }
  //         accu.push(nextOpinion);
  //         return accu;
  //       },[]);
  //     }
  //     if(bd.length != 0){
  //       this.OpinionStore.dispatch(changeOpinion({opinion: bd}));
  //     }
  //   }
  // }

  // async DeleteOpinion(changeData: any): Promise<void>{
  //   const {error} = await this.supabaseClient
  //   .from("opinions")
  //   .delete().match(changeData);
  //   if(error){
  //     console.error(error);
  //   }else{
  //     this.DeleteOpinionFromState(Number(changeData.id));
  //   }
  // }

  // DeleteOpinionFromState(id: number): void{
  //   let newArray: Opinions[] = [];
  //   if(id != undefined){
  //     newArray = this.state.opinion.filter(e => e.id !== id);
  //   }
  //   if(newArray.length !== 0){
  //     this.OpinionStore.dispatch(deleteOpinion({opinion: newArray}));
  //   }
  // }

  InitialDataInStore(data: unknown){
    this.OpinionStore.dispatch(initOpinions({opinion: data as any}));
  }

  AddOpinionToStore(v: Opinions): void{
    this.OpinionStore.dispatch(addOpinion({opinion: v}));
  }

  GetUserFromState(){
    return this.state.user != "" ? this.state.user : "";
  }
}
