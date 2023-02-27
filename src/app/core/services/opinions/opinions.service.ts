import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addOpinion, addUser, deleteOpinion, initOpinions } from '../../store/actions/opinion.actions';
import { stateSelector,} from '../../store/selectors/selectors';
import { LOCAL_STORAGE_KEYS } from '../../types/constants';
import { Opinions, OpinionStateInterface } from '../../types/interfaces';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OpinionsService extends AuthService {

  protected OpinionStore = inject(Store<OpinionStateInterface>);
  opinions$: Observable<OpinionStateInterface>;
  state: OpinionStateInterface = { user_id: "", user: '', opinion: []}; 
  reMode = 100;

  constructor() {
    super()
    this.opinions$ = this.OpinionStore.select(stateSelector);
    this.opinions$.subscribe(c => this.state = c);
  }

  SendOpinionToDatabase(opinions: Opinions): void{
    this.databaseQuery.pushToDatabase('opinions', opinions).then((resolve) => {
      console.log(`ResolveSend: ${resolve}`);
    });

    this.databaseQuery.getAllFromDatabase("opinions").then(resolveGet => console.log(resolveGet))
  }

  ChangeOpinion(matchId: string, updateContent: any): void{
    this.databaseQuery.changeDataAtDatabase('opinions', updateContent, {id: matchId}, this.state, this.OpinionStore);
  }

  async DeleteOpinion(deleteData: any): Promise<void>{
    const {success, error} = await this.databaseQuery.deleteDataAtDatabase('opinions', deleteData);
    if(success !== null && error !== null){
      this.DeleteOpinionFromState(Number(deleteData.id));
    }else{
      console.error(error);
    }
  }

  DeleteOpinionFromState(id: number): void{
    let newArray: Opinions[] = [];
    if(id != undefined){
      newArray = this.state.opinion.filter(e => e.id !== id);
    }
    if(newArray.length !== 0){
      this.OpinionStore.dispatch(deleteOpinion({opinion: newArray}));
    }
  }

  InitialDataInStore(data: unknown){
    if(window.localStorage.getItem(LOCAL_STORAGE_KEYS.nsdjlnsf)){
      let {user, user_id} = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEYS.nsdjlnsf) as string);
      this.OpinionStore.dispatch(addUser({user, user_id}));
    }
    this.OpinionStore.dispatch(initOpinions({opinion: data as any}));
  }

  AddOpinionToStore(v: Opinions): void{
    this.OpinionStore.dispatch(addOpinion({opinion: v}));
  }

  GetUserFromState(){
    return {
      userId: this.state.user_id,
      userName: this.state.user
    };
  }
}
