import { Component, OnInit } from '@angular/core';
import { XchgService} from '../xchg.service';

@Component({
  selector: 'app-ag',
  templateUrl: './ag.component.html',
  styleUrls: ['./ag.component.css']
})
export class AgComponent implements OnInit {
  nm=this.xchng.nm
  age:number;
  constructor(public xchng:XchgService) { 
  }
  

  ngOnInit() {
    this.xchng.onClk(this.age)
  }

}