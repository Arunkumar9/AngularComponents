import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'md-menu-tree',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.css']
})
export class MenuTreeComponent implements OnInit {
  @Input() menuTree: any;
  onMenuLeafItemClick: EventEmitter<any>;

  constructor() {
    this.onMenuLeafItemClick = new EventEmitter<any>();
  }

  @Output()
  onMouseEnter: EventEmitter<any> = new EventEmitter();

  @Output()
  onMenuLeafItemSelect: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.onMenuLeafItemClick.subscribe((event)=>this.onMenuLeafItemSelection(event));
  }

  onItemMouseEnter($event, menuItem){
    //$event.target.previousElementSibling
    var item = $event.target;
    item.nextElementSibling.style.display = 'block';
    item.nextElementSibling.style.position='absolute';
    item.nextElementSibling.style.zIndex=10;

    this.onMouseEnter.emit({$event,menuItem});
  }

  onMenuLeafItemSelection($event){
    this.onMenuLeafItemSelect.emit($event);
  }

}
