import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addOpinion, deleteOpinion, initOpinions } from '../../store/actions/opinion.actions';
import { stateSelector,} from '../../store/selectors/selector';
import { LOCAL_STORAGE_KEYS } from '../../types/constants';
import { Opinions, IOpinionState } from '../../types/interfaces';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OpinionsService extends AuthService {

  private OpinionStore = inject(Store<IOpinionState>);
  opinions$: Observable<IOpinionState>;
  state: IOpinionState = { opinion: [] };

  constructor() {
    super()
    this.opinions$ = this.OpinionStore.select(stateSelector);
    this.opinions$.subscribe(c => this.state = c);
  }

  SendOpinionToDatabase(opinions: Opinions): void{
    this.databaseQuery.pushToDatabase('opinions', opinions).then((resolve) =>{
      this.OpinionStore.dispatch(addOpinion({opinion: resolve}))
    });
  }

  ChangeOpinion(matchId: string, updateContent: any): void{
    this.databaseQuery.changeDataAtDatabase('opinions', updateContent, {id: matchId}, 
    this.state, this.OpinionStore);
  }

  async DeleteOpinion(deleteData: any): Promise<void>{
    const deleteD = await this.databaseQuery.deleteDataAtDatabase('opinions', deleteData);
    if(deleteD.success !== null && deleteD.error !== null){
      this.DeleteOpinionFromStore(Number(deleteData.id));
    }else{
      console.error(deleteD.error);
    }
  }

  DeleteOpinionFromStore(id: number): void{
    let newArray: Opinions[] = [];
    if(id != undefined){
      newArray = this.state.opinion.filter(e => e.id !== id);
    }
    this.OpinionStore.dispatch(deleteOpinion({opinion: newArray}));
  }

  InitialDataInStore(data: unknown){
    if(window.localStorage.getItem(LOCAL_STORAGE_KEYS.nsdjlnsf)){
      let {user} = JSON.parse(window.localStorage
        .getItem(LOCAL_STORAGE_KEYS.nsdjlnsf) as string);
      // this.OpinionStore.dispatch(addUser({user}));
    }
    this.OpinionStore.dispatch(initOpinions({opinion: data as any}));
  }

  AddOpinionToStore(v: Opinions): void{
    this.OpinionStore.dispatch(addOpinion({opinion: v}));
  }
}
