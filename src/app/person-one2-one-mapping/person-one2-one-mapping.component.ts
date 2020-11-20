import { Component, OnInit } from '@angular/core';
import { PersonOne2OneserviceService } from '../personOne2OneMapping/person-one2-oneservice.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-person-one2-one-mapping',
  templateUrl: './person-one2-one-mapping.component.html',
  styleUrls: ['./person-one2-one-mapping.component.css']
})
export class PersonOne2OneMappingComponent implements OnInit {

  personForm: FormGroup;
  persons=[];
  person;
//we are injecting PersonService here
  constructor(private personService: PersonOne2OneserviceService, private formBuilder: FormBuilder)
     { }

  ngOnInit(): void {
this.personForm = this.formBuilder.group({
  id: new FormControl(),
  firstName: new FormControl(),
  lastName: new FormControl(),
  address: this.formBuilder.group({
    id:new FormControl(),
    houseNo: new FormControl(),
    streetName:new FormControl(),
 })
})
 this.readAll();
}
  save(){
  this.personService.save(this.personForm).subscribe(
    results=>
    {
      console.log(results);
      this.readAll();
      this.personForm.reset();
    }
  )
 }
 readAll(){
  this.personService.readAll().subscribe(
    results=>
    {
      this.persons=results;
    }
  )
 }
 //internally calling read method
  read(id){
    this.personService.read(id).subscribe(
      results=>
      {
        this.person=results;
      }
    )
 }
 
 delete(id){
  this.personService.delete(id).subscribe(
    results=>
    {
      console.log(results);
      this.readAll();
    }
  )
}

}
