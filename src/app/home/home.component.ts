import {Component} from '@angular/core';
import {Employee} from '../models/employee.model';
import {FormPoster} from '../services/form-poster.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})

export class HomeComponent {
  lang =["Java","Python","Javascript"];
  model = new Employee('Aakash','handa',true,'cash',"python",9643018019);
  hasPrimaryLanguageError = false;

   constructor(private formPoster: FormPoster){

   }  
  submitForm(form: NgForm){
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if(this.hasPrimaryLanguageError)
      return;

    this.formPoster.postEmployeeForm(this.model)
      .subscribe(
        data=> console.log('success',data),
        err => console.log('error', err)
      )
    
  }
  validatePrimaryLanguage(event){
    if(this.model.primaryLanguage ==='default')
      this.hasPrimaryLanguageError=true;
    else
      this.hasPrimaryLanguageError=false;

    console.log("lang:::"+this.model.primaryLanguage);
  }


  firstNameToUpperCase(value: string){
    if(value.length>0)
      this.model.firstName= value.charAt(0).toUpperCase() +value.slice(1);
    else
      this.model.firstName =value;
  }
}
