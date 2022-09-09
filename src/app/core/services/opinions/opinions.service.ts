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

  async SendOpinionToDatabase(opinions: Opinions){
    let d = await this.supabaseClient.from('opinions').insert(opinions);
    console.log(d);
  }
}
