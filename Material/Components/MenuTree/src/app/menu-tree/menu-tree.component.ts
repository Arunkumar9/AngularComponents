import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'md-menu-tree',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.css']
})
export class MenuTreeComponent implements OnInit {
  @Input() menuTree: any;
  constructor() { }

  ngOnInit() {
  }

  onItemMouseEnter($event, item, menuItem){
    //$event.target.previousElementSibling
    var item = $event.target;
    item.nextElementSibling.style.display = 'block';
    item.nextElementSibling.style.position='absolute';
    item.nextElementSibling.style.zIndex=10;
  }

}
