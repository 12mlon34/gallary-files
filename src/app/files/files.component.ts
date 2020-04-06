import { Component, OnInit } from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

// this is function to when user press of any position stop any onther function 


body =false
  originalPosition(){

   this.body = true
    
  }


dropDown :boolean = false;



//function to show menue
showMenue(){
         console.log("dropDown")
this.dropDown=true ;
this.renamefolder=false
this.renamefolder1=false
this.renamefolder2=false
this.renamefolder3=false


  }


renamefolder :boolean = false
renamefolder1 :boolean = false
renamefolder2 :boolean = false
renamefolder3 :boolean = false

renameFolder(){
    this.renamefolder =true
    this.renamefolder1  = false
   this.renamefolder2  = false
   this.renamefolder3  = false
    this.dropDown=false;

}
renameFolder1(){
  this.renamefolder1 =true
  this.renamefolder  = false
  this.renamefolder2  = false
  this.renamefolder3  = false
  this.dropDown=false;

}
renameFolder2(){
  this.renamefolder2 =true
  this.renamefolder1  = false
  this.renamefolder  = false
  this.renamefolder3  = false
  this.dropDown=false;

}
renameFolder3(){
  this.renamefolder3 =true
  this.renamefolder1  = false
  this.renamefolder2  = false
  this.renamefolder  = false
  this.dropDown=false;

}

// This is function to rename folder  by user where i 1 = get value of input , 2= put value in onther p tag 
//and 3 = hidden the origenal p and input where the user pressed in input 
Values ='' ;
hiddenP=false
inputValue(event :any ){
  // const inputValue  = event.target.value ; 
    this.Values = event.target.value ;

    // console.log(this.Values)

    // console.log("enter is pressed")
    this.hiddenP = true ;

  }

Values1 ='' ;
hiddenP1=false

inputValue1(event :any ){
  // const inputValue  = event.target.value ; 
    this.Values1 = event.target.value ;

    // console.log(this.Values)

    // console.log("enter is pressed")
    this.hiddenP1=true ;

  }
  Values2 ='' ;
  hiddenP2=false

inputValue2(event :any ){
  // const inputValue  = event.target.value ; 
    this.Values2 = event.target.value ;

    // console.log(this.Values)

    // console.log("enter is pressed")
    this.hiddenP2=true ;

  }
  Values3 ='' ;
  hiddenP3=false

inputValue3(event :any ){
  // const inputValue  = event.target.value ; 
    this.Values3 = event.target.value ;

    // console.log(this.Values)

    // console.log("enter is pressed")
    this.hiddenP3=true ;

  }

  //---------------------------- Angular matrial Modal -------------------------//

  // modalRef: BsModalRef;

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, {
  //     animated: true,
  //     backdrop: 'static'
  //   });


// }

}
