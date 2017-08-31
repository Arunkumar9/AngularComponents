import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menutree-td',
  template: `<tr>{{trContent}}</tr>`,
  styleUrls: ['./mdmenu-tree.component.css']
})
export class MDMenuTreeTD implements OnInit {
  @Input() trContent : any;
  constructor() { }

  ngOnInit() {
    
  }
}