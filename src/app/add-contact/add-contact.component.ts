import { Component, OnInit } from '@angular/core';
import { contactSchema } from 'src/models/contactSchema';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
allGroups:any=[]

constructor(private api:ApiService,private navigate:Router){}

contact:contactSchema = {}
ngOnInit(): void {
  // make a call to services
  this.api.getallgroups().subscribe({
    next:(result:any)=>{
    console.log(result);
    this.allGroups = result
    
    }
  })
}

addContact(){
//  alert(`button clicked`)
  this.api.addContact(this.contact).subscribe({
    next:()=>{
      alert(`New Contact Added Successfully`)
      // redirect to all contact Page
      this.navigate.navigateByUrl("")

    }
  })
}

 

}
