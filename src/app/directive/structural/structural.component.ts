import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss'],
})
export class StructuralComponent implements OnInit {
  showMsg: boolean = true;
  show: boolean = true;
  ifcondition: boolean = false ;
  constructor() {}

  ngOnInit(): void {}
}
