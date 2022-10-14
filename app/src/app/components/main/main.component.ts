import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/Experience';
import { mainContect } from 'src/app/models/mainContect';
import { skill } from 'src/app/models/skill';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
  // display="height: 0;display: none; clip-path: none;"
   url=""
  inputName = "";
  inputAbut = ""

  linkdein = "";
  email = ''
  tel = ''
  arrSkils: skill[] = [
    { name: "skile", value: 70 }
  ];
  arrLanguage: skill[] = [
    { name: "english", value: 70 }
  ];
  MC: mainContect[] = [{ headline: "experiense", arr: [{ dateStart: "", dateEnd: "", compnyName: "", compnyAddres: "", position: "", content: "" }] }, { headline: "Education", arr: [{ dateStart: "", dateEnd: "", compnyName: "", compnyAddres: "", position: "", content: "" }] }]
  // arrExperience:Experience[]=[{dateStart:"",dateEnd:"",compnyName:"",compnyAddres:"",position:"",content:""}]
  // arrEducation:Experience[]=[{dateStart:"",dateEnd:"",compnyName:"",compnyAddres:"",position:"",content:""}]
   reader:FileReader = new FileReader();
  constructor() {

  }

  ngOnInit(): void {
  }

  newSkil() {
    this.arrSkils.push(new skill("", 50))
  }
  newLanguage() {
    this.arrLanguage.push(new skill("", 70));
  }
  newExperience(a: number) {
    this.MC[a].arr.push(new Experience())
  }
  newMainInput(){
    this.MC.push(new mainContect("",[new Experience()]))
  }

  onFileUpload(img0) {
    
    if (img0.target.files[0] && img0.target.files){
    
     let file =img0.target.files[0];
      this.reader.readAsDataURL(file);
      // this.display="display:grid"
      this.reader.onload = (event: any) => {
  this.url=this.reader.result as string
      }
    }
     
   
    

  }

}
