import { Component, OnInit } from '@angular/core';
import { XchgService} from '../xchg.service';

@Component({
  selector: 'app-nm',
  templateUrl: './nm.component.html',
  styleUrls: ['./nm.component.css']
})
export class NmComponent implements OnInit {
  name:string;
  
  constructor(public xchng:XchgService) {
    
  }

  ngOnInit() {
    this.xchng.onClick(this.name)
  }


}