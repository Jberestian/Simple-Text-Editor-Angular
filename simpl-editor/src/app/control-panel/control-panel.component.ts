import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  constructor() { }

  editor:any;

  ngOnInit() {
    this.editor = document.getElementById('editor')
  }

  bold(){
    document.execCommand('bold', false, null);
  }

  italic(){
    document.execCommand('italic', false, null)
  }

  underline(){
    document.execCommand('underline', false, null)
  }

  color(){
    document.execCommand('foreColor', false, "#bf1445")

  }

}
