import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menutree-td',
  template: `<td>{{tdContent}}</td>`,
  styleUrls: ['./mdmenu-tree.component.css']
})
export class MDMenuTreeTD implements OnInit {
  @Input() tdContent : any;
  constructor() { }

  ngOnInit() {
    
  }
}