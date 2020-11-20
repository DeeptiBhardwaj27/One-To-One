import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
//returns interaction of httpClient
//we are not subscribing, we are simply returning the result of HttpClient
@Injectable({
  providedIn: 'root'
})
export class PersonOne2OneserviceService {

  url= 'http://localhost:7070/person'
  constructor( private httpClient: HttpClient) { }
save(person: FormGroup){
  return this.httpClient.post(this.url + '/' + 'save',person.value);
  
}
readAll(){
 return this.httpClient.get<any>(this.url + '/' + 'read');

}
read(id)
{
  return this.httpClient.get<any>(this.url + '/' + 'read'+ '/' +id)
}
delete(id){

  return this.httpClient.delete<any>(this.url + '/' + 'delete'+ '/' +id)
}

}
