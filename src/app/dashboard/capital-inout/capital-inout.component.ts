import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Account} from '../../bean/account';

@Component({
  selector: 'app-capital-inout',
  templateUrl: './capital-inout.component.html',
  styleUrls: ['./capital-inout.component.css']
})
export class CapitalInoutComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<CapitalInoutComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Account) { }

  ngOnInit(): void {
  }

}
