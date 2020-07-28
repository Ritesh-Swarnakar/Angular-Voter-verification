import { Component, OnInit } from '@angular/core';
import { XchgService} from '../xchg.service';

@Component({
  selector: 'app-las',
  templateUrl: './las.component.html',
  styleUrls: ['./las.component.css']
})
export class LasComponent implements OnInit {
  mssg:string;
  name=this.xchng.nm

  age=this.xchng.ag
  constructor(public xchng:XchgService) {
    

   }

  ngOnInit() {
    if (this.age >= 18){
    this.mssg='Congratulations! You are eligible to vote';
  } else {
    this.mssg='Sorry you are not eligible to vote'
  }
  }

  
}