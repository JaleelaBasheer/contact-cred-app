import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contactSchema } from 'src/models/contactSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 base_url:string = 'https://contact-server-api-te9y.onrender.com'
  constructor(private http:HttpClient) { }
  // get all contact
  getallcontacts(){
    // make api call to http://localhost:3000/contacts
    return this.http.get(`${this.base_url}/contacts`)
  }
  // view contact
  viewcontact(id:any){
        // make api call to http://localhost:3000/contacts/id

    return this.http.get(`${this.base_url}/contacts/${id}`)
 
  }
  // get single group details
  getAgroup(id:any)
  {
    return this.http.get(`${this.base_url}/groups/${id}`)

  }
  // get all groups

  getallgroups(){
   return this.http.get(`${this.base_url}/groups`)
  }
  // add contact
  addContact(contact:contactSchema){
   return this.http.post(`${this.base_url}/contacts`,contact)
  }

  // edit contact
  editContact(id:any,body:contactSchema){
    // make a api call
    return this.http.put(`${this.base_url}/contacts/${id}`,body)
  }

  // remove contact

  removeContact(id:any){
    return this.http.delete(`${this.base_url}/contacts/${id}`)
  }
}
