import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addOpinion, deleteOpinion, initOpinions } from '../../store/actions/opinion.actions';
import { stateSelector,} from '../../store/selectors/selectors';
import { Opinions, OpinionStateInterface } from '../../types/interfaces';
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
    this.OpinionStore.dispatch(initOpinions({opinion: data as any}));
  }

  AddOpinionToStore(v: Opinions): void{
    this.OpinionStore.dispatch(addOpinion({opinion: v}));
  }

  GetUserFromState(){
    return this.state.user != "" ? this.state.user : "";
  }
}
