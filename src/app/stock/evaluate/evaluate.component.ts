import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EvaluationResult} from '../../bean/evaluation.result';

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css']
})
export class EvaluateComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<EvaluateComponent>, @Inject(MAT_DIALOG_DATA) public data: EvaluationResult) { }

  ngOnInit(): void {
  }

}
