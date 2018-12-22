import { Component, OnInit } from '@angular/core';
import { User } from './registeration/user';
import { UserJson } from './registeration/user-json';
import { UserService } from './registeration/user.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styles: [` input.ng-invalid { border-left : 5px solid red;border-right : 5px solid red; }
  input.ng-valid { border-left : 5px solid green; border-right : 5px solid green;}`]
})
export class RegisterationComponent implements OnInit {
constructor(private userJsonService: UserService) { }
submitStatus: boolean = false;
user = new User('kovavishal@gmail.com', 'kova') ;
userJSON: UserJson;
ngOnInit() {
}
onSubmit (): void {
console.log( 'Ng init trigerred is POST REST component" )'
 this.userJsonService
 .postRest(this.user)
 .subscribe(( p ) => { this.userJSON = p; } );
 this.submitStatus = true;
 console.log( 'TOKEN JSON', JSON.stringify( 'this.userJSON' );
 console.log('Form submitted***********');
  }
  }
