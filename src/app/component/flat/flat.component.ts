import { Component, OnInit } from '@angular/core';
import { Flat } from 'src/app/models/flat';
import { FlatService } from 'src/app/service/flat.service';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.css']
})
export class FlatComponent implements OnInit {
  public flat:Flat=new Flat();
  constructor(private flatSrv:FlatService) { }

  ngOnInit() {
  }

  addFlat(){
    this.flatSrv.addFlat(this.flat).subscribe((res)=>{
      if(!res)
      alert("לא הגיוני")
      else
      alert("הדירה נוספה בהצלחה");
    });
  }
}
