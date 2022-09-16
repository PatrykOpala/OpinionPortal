import { Injectable } from '@angular/core';
import { Opinions } from '../../types/typesOpinier';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OpinionsService extends AuthService {

  constructor() { 
    super()
  }

  async SendOpinionToDatabase(opinions: Opinions): Promise<void>{
    let d = await this.supabaseClient.from('opinions').insert(opinions);
    console.log(d);
  }

  async GetOpinionFromDatabase(): Promise<any[] | null | undefined>{
    let { data, error } = await this.supabaseClient
    .from('opinions')
    .select('*');

    if(!error || error === null)
    return data
    else return undefined;
  }
}
