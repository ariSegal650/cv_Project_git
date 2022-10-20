import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Experience } from 'src/app/models/Experience';
import { mainContect } from 'src/app/models/mainContect';
import { skill } from 'src/app/models/skill';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

@ViewChild(MatTabGroup) mattabgroup:MatTabGroup
  // display="height: 0;display: none; clip-path: none;"
  url = ""
  inputName = "";
  inputAbut = ""
  data:any
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
  reader: FileReader = new FileReader();
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
  newMainInput() {
    this.MC.push(new mainContect("", [new Experience()]))
  }

  onFileUpload(img0) {

    if (img0.target.files[0] && img0.target.files) {

      let file = img0.target.files[0];
      this.reader.readAsDataURL(file);
      // this.display="display:grid"
      this.reader.onload = (event: any) => {
        this.url = this.reader.result as string
      }
    }

  }
  changeTab(a:number)
  {
    this.mattabgroup.selectedIndex =a;
  }
  // npm i jspdf, npm i html2canvas npm i @types/jspdf --save-dev
  async  create_Pdf() {
    console.log('in')
    this.data = document.getElementById('output');
    html2canvas(this.data).then(canvas => {

      var imgWidth = 209;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      const contentDataUrl = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataUrl, 'png', 0, position, imgWidth, imgHeight)
      pdf.save('cv_'+this.inputName+'.pdf')
    })
  }
}
