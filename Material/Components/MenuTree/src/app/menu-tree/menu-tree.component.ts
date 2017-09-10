import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'md-menu-tree',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.css']
})
export class MenuTreeComponent implements OnInit {
  @Input() menuTree: any;

  onMenuLeafItemClick: EventEmitter<any>;
  onMenuTextItemClick: EventEmitter<any>;
  onMenuIconItemClick: EventEmitter<any>;
  onMouseLeaveEvent: EventEmitter<any>;

  constructor() {
    this.onMenuLeafItemClick = new EventEmitter<any>();
    this.onMenuTextItemClick = new EventEmitter<any>();
    this.onMenuIconItemClick = new EventEmitter<any>();
    this.onMouseLeaveEvent = new EventEmitter<any>();
  }

  @Output()
  onMouseEnter: EventEmitter<any> = new EventEmitter();

  @Output()
  onMenuLeafItemSelect: EventEmitter<any> = new EventEmitter();

  @Output()
  onMenuGroupItemSelect: EventEmitter<any> = new EventEmitter();

  @Output()
  onMouseLeave: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.onMenuLeafItemClick.subscribe((event)=>this.onMenuLeafItemSelection(event));
    this.onMenuTextItemClick.subscribe((event)=>this.onMenuGroupItemClick(event));
    this.onMenuIconItemClick.subscribe((event)=>this.onMenuGroupItemClick(event));
    this.onMouseLeaveEvent.subscribe((event)=>this.onMouseLeaving(event));
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

  onMenuGroupItemClick($event){
    this.onMenuGroupItemSelect.emit($event);
  }

  onMouseLeaving($event){
    this.onMouseLeave.emit($event);
  }

}
