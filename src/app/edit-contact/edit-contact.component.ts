import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { contactSchema } from 'src/models/contactSchema';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
   allGroups:any=[]

  contact:contactSchema ={}
group: any;
  constructor(private editRoute:ActivatedRoute,private api:ApiService, private navigate:Router){}

  ngOnInit(): void {
    // get parameter from url
    this.editRoute.params.subscribe({
      next:(parameter:any)=>{
        const {id} = parameter
        console.log(id);
        
        //make a call to service to get contact 
           this.api.viewcontact(id).subscribe({
            next:(res:any)=>{
              console.log(res);
              this.contact=res
              const {groupId} = res
              
            }
           })
          //  make a call services to get all groups
          this.api.getallgroups().subscribe({
            next:(res:any)=>{
             this.allGroups=res
            }
          })
           
      }
    })
  }
  updateContact(id:any,contact:any){
    // alert(`button clicked`)
    this.api.editContact(id,contact).subscribe({
      next:(res:any)=>{
        alert(`Successfully Updated....`)
        this.navigate.navigateByUrl("")
      }
    })
  }
}
