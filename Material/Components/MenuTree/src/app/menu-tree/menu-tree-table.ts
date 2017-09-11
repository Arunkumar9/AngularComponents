import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu-tree-table',
  template: `<table class="menuItemtable" (mouseleave)="onItemMouseLeave($event, menuTreeItem)">
                <tr class="menuItemRow" *ngFor="let menuChildItem of menuTreeItem.children" >
                    <td *ngIf="(menuChildItem.leaf == false) || (menuChildItem.leaf == 'false')" class="material-icons" (click)="onMenuIconClick($event,menuChildItem)">{{menuChildItem.collapsedIcon}}</td>
                    <td *ngIf="(menuChildItem.leaf == false) || (menuChildItem.leaf == 'false')" (click)="onMenuItemClick($event,menuChildItem)">
                        {{menuChildItem.label}}
                        <menu-tree-table [menuTreeItem]='menuChildItem' style="display:none;width:100%" class="menuItemChildContainer" [onMenuLeafItemSelect]="onMenuLeafItemSelect"></menu-tree-table>    
                    </td>
                    <td *ngIf="(menuChildItem.leaf == true) || (menuChildItem.leaf == 'true')" class="material-icons">{{menuChildItem.icon}}</td>
                    <td *ngIf="(menuChildItem.leaf == true) || (menuChildItem.leaf == 'true')" (click)="onMenuLeafItemClick($event,menuChildItem)">{{menuChildItem.label}}</td>
                </tr>
            </table>
  `,
  styleUrls: ['./menu-tree.component.css']
})
export class MenuTreeTable {
  @Input() menuTreeItem: any;
  constructor() { }

  @Input()
  onMouseLeaveEvent: EventEmitter<any>;

  @Input()
  onMenuIconItemClick: EventEmitter<any>;

  @Input()
  onMenuLeafItemSelect: EventEmitter<any>;

  @Input()
  onMenuTextItemClick: EventEmitter<any>;

  onItemMouseLeave($event, menuItem){
    var item = $event.target;
    if(item.parentElement != null && item.parentElement != undefined){
      var classList = item.parentElement.classList;
      for(var i=0;i<classList.length;i++){
        var className = classList[i];
        if(className == 'menuItemContainer'){
            item.parentElement.style.display = 'none';
            //Leave event emitter.
            this.onMouseLeaveEvent.emit({$event,menuItem});
            break;
        }
      }
    }
  }

  onMenuItemClick($event,menuItem){
    var item = $event.target;    
    //var childTemplate = item.nextElementSibling;
    var childTemplate = item.children[0];
    if(childTemplate != null && childTemplate != undefined){
      if($event.target.previousElementSibling.innerHTML == menuItem.collapsedIcon){
        childTemplate.style.display='block';
        var classList = $event.target.previousElementSibling.classList;
        for(var i=0;i<classList.length;i++){
          var className = classList[i];
          if(className == 'material-icons'){
              $event.target.previousElementSibling.innerHTML = menuItem.expandedIcon;
              $event.target.previousElementSibling.style.paddingTop='1px';
              break;
          }
        }     
      }else{
        childTemplate.style.display='none';
        var classList = $event.target.previousElementSibling.classList;
        for(var i=0;i<classList.length;i++){
          var className = classList[i];
          if(className == 'material-icons'){
              $event.target.previousElementSibling.innerHTML = menuItem.collapsedIcon;
              $event.target.previousElementSibling.style.paddingTop='5px';
              break;
          }
        }
      }
    }

    this.onMenuTextItemClick.emit({$event,menuItem});
  }

  onMenuIconClick($event,menuItem){
    //var childTemplate = document.getElementById(menuItem.id);
    //var childTemplate = item.nextElementSibling.nextElementSibling;
    var item = $event.target;   
    var childTemplate = item.nextElementSibling.children[0];
    if(childTemplate != null && childTemplate != undefined){
      if($event.target.innerHTML == menuItem.collapsedIcon){
        childTemplate.style.display='block';
        var classList = $event.target.classList;
        for(var i=0;i<classList.length;i++){
          var className = classList[i];
          if(className == 'material-icons'){
              $event.target.innerHTML = menuItem.expandedIcon;
              $event.target.style.paddingTop='1px';
              break;
          }
        }     
      }else{
        childTemplate.style.display='none';
        var classList = $event.target.classList;
        for(var i=0;i<classList.length;i++){
          var className = classList[i];
          if(className == 'material-icons'){
              $event.target.innerHTML = menuItem.collapsedIcon;
              $event.target.style.paddingTop='5px';
              break;
          }
        }
      }
    }

    this.onMenuIconItemClick.emit({$event,menuItem});
  }

  onMenuLeafItemClick($event,menuItem){
      this.onMenuLeafItemSelect.emit({$event,menuItem});
  }

}