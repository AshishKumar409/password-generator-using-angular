import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    length=0;
    useLetters=false;
    useNumbers=false;
    useSymbols=false;
    password="";


    onChangeUseLetters(){
      this.useLetters=!this.useLetters
    }
    onChangeUseNumbers(){
      this.useNumbers=!this.useNumbers
    }
    onChangeUseSymbols(){
      this.useSymbols=!this.useSymbols
    }

    onInputHandler(e:any){
      
    let value = e.target.value
    
     const intValue = parseInt(value)
    //  console.log('Value',value.length)
     if(!isNaN(intValue)){
       this.length=intValue
      //  console.log("length",this.length)
     }

     if(value.length===0){
       this.length=0
     }

     
     
    }

    onClickHandler(){
      
      let numbers='1234567890'
      let letters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      let symbols="*!@#$%?\/"

      let generatedChar = ''

      if(this.useLetters){
         generatedChar+=letters
      }

      if(this.useNumbers){
         generatedChar+=numbers
      }

      if(this.useSymbols){
         generatedChar+=symbols
      }
      
      let generatedPassword=''
      for(let i = 0;i<this.length;i++){
        let index = Math.floor(Math.random()*generatedChar.length)
         generatedPassword+=generatedChar[index]
      }
      
      this.password=generatedPassword
    }



}
