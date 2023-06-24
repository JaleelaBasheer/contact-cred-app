import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {

isLoading:boolean = true;  
errorMsg:string=""
allcontacts:any=[]
id: any;
logDetails:Date= new Date()
searchTerm:string=""

constructor(private api:ApiService){}
ngOnInit(): void {
 this.getallcontacts()
}
  // get all contacts

  getallcontacts(){
    this.api.getallcontacts().subscribe({
      next:(res:any)=>{
        setTimeout(()=>{
          this.allcontacts = res
          this.isLoading = false
          console.log(this.allcontacts);

        },2000)
        
        
      },
      error:(err:any)=>{
            console.log(err.message);
            this.errorMsg=err.message
  
      }
    
    })
  }
  deleteContact(id:any){
    this.api.removeContact(id).subscribe({
      next:()=>{
        alert(`Remove contact Successfully`)
        this.isLoading=true
        this.getallcontacts()

      }
    })
  }
}


  



