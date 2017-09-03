import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu-tree-table',
  template: `<table class="menuItemtable" (mouseleave)="onItemMouseLeave($event, menuTreeItem)">
                <tr *ngFor="let menuChildItem of menuTreeItem.children" >
                    <td *ngIf="(menuChildItem.leaf == false) || (menuChildItem.leaf == 'false')" class="material-icons" (click)="onMenuIconClick($event,menuChildItem)">{{menuChildItem.collapsedIcon}}</td>
                    <td *ngIf="(menuChildItem.leaf == false) || (menuChildItem.leaf == 'false')" (click)="onMenuItemClick($event,menuChildItem)">
                        {{menuChildItem.label}}
                    </td>
                    <menu-tree-table [menuTreeItem]='menuChildItem' style="display:none;width:100%" class="menuItemContainer"></menu-tree-table>
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

  onItemMouseLeave($event, menuItem){
    var item = $event.target;
    //item.parentElement.style.display = 'none';
  }

  onMenuItemClick($event,menuItem){
    debugger;
    var childTemplate = document.getElementById(menuItem.id);
    if($event.target.previousElementSibling.innerHTML == menuItem.collapsedIcon){
      childTemplate.style.display='block';
      if($event.target.previousElementSibling.className == 'material-icons'){
          $event.target.previousElementSibling.innerHTML = menuItem.expandedIcon;
      }      
    }else{
      childTemplate.style.display='none';
      if($event.target.previousElementSibling.className == 'material-icons'){
        $event.target.previousElementSibling.innerHTML = menuItem.collapsedIcon;
      }
    }
  }

  onMenuIconClick($event,menuItem){
      debugger;
    //var childTemplate = document.getElementById(menuItem.id);
    var item = $event.target;    
    var childTemplate = item.nextElementSibling.nextElementSibling;
    if($event.target.innerHTML == menuItem.collapsedIcon){
      childTemplate.style.display='block';
      if($event.target.className == 'material-icons'){
          $event.target.innerHTML = menuItem.expandedIcon;
      }      
    }else{
      childTemplate.style.display='none';
      if($event.target.className == 'material-icons'){
        $event.target.innerHTML = menuItem.collapsedIcon;
      }
    }
  }

  onMenuLeafItemClick($event,menuChildItem){

  }

}