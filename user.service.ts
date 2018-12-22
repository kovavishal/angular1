import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from '../registeration/user';
import { UserJson } from '../registeration/user-json';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) {
    // console.log( "user Json service constructor" );
  }
  headers = new Headers(
    {
      'Content-Type': 'application/json'
    });
  postRest(user: User): Observable<UserJson> {
     console.log(  'USER DATA JSON--->'  + JSON.stringify(user));
    // console.log( 'USER DATA body--->' + body);
    let user$ = this.http.post('https://reqres.in/api/login',
      JSON.stringify(user),
      { headers: this.headers }).map(this.mapUserLogin);
    // console.log("CHANGED POST SERVICE INVOKE*******" + user$)
    return user$;
  }
  mapUserLogin(response: Response): UserJson {
    // The response of the API has a results
     console.log( 'user REST service map user trigerred DATA' + response.json().data );
     console.log( 'user REST service map user trigerred JSON' + response.json() );
    // return response.json().results.map(this.toUser)
    return toUserLogin(response.json());
  }
}

function toUserLogin( r: any ): UserJson {
    console.log( 'Parsed user trigerred****:', r );
    const user = <UserJson>( {
        token: r.token,
    } );
    console.log( 'Parsed user:', user );
    return user;
}

