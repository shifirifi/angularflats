import { Component, OnInit } from '@angular/core';
import { Flat } from 'src/app/models/flat';
import { ActivatedRoute } from '@angular/router';
import { FlatService } from 'src/app/service/flat.service';

@Component({
  selector: 'app-edit-flat',
  templateUrl: './edit-flat.component.html',
  styleUrls: ['./edit-flat.component.css']
})
export class EditFlatComponent implements OnInit {
  public flat:Flat=new Flat();
  constructor(private route:ActivatedRoute,private flatSrv:FlatService ) { }

  ngOnInit() {
    // this.flatSrv.
  }
  editFlat()
  {
    // this.bankName = this.route.snapshot.params['bank'];
  }
}
