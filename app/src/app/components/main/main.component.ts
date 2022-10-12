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

  
  display="height: 0;display: none; clip-path: none;"
   url=""
  inputName = "full name";
  inputAbut = "abut you"

  linkdein = "linkdein";
  email = '12345@gmail.com'
  tel = '052-55336623'
  arrSkils: skill[] = [
    { name: "skile", value: 70 }
  ];
  arrLanguage: skill[] = [
    { name: "english", value: 70 }
  ];
  MC: mainContect[] = [{ headline: "experiense", arr: [{ dateStart: "", dateEnd: "", compnyName: "", compnyAddres: "", position: "", content: "" }] }, { headline: "Education", arr: [{ dateStart: "", dateEnd: "", compnyName: "", compnyAddres: "", position: "", content: "" }] }]
  // arrExperience:Experience[]=[{dateStart:"",dateEnd:"",compnyName:"",compnyAddres:"",position:"",content:""}]
  // arrEducation:Experience[]=[{dateStart:"",dateEnd:"",compnyName:"",compnyAddres:"",position:"",content:""}]
  constructor() {

  }

  ngOnInit(): void {
  }

  newSkil(a: number) {
    this.arrSkils.push(new skill("skile", 50))
  }
  newLanguage(a: number) {
    this.arrLanguage.push(new skill("english", 70));
  }
  newExperience(a: number, b: number) {
    this.MC[a].arr.push(new Experience())
  }

  onFileUpload(img0) {
    
    if (img0.target.files[0] && img0.target.files){
     var reader:FileReader = new FileReader();
     let file =img0.target.files[0];
      reader.readAsDataURL(file);
      this.display="display:grid"
      reader.onload = (event: any) => {
  this.url=reader.result as string
      }
    }
     
   
    

  }

}
