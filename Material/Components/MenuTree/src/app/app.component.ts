import { Component,OnInit } from '@angular/core';
import { TreeMenuService } from './app.treemenuservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TreeMenuService]
})
export class AppComponent implements OnInit{
  title = 'Angular Tree Menu In Material';
  menuTreeData:any[];
  errorMessage:any;
  
  constructor(private treeMenuService:TreeMenuService) { }

  ngOnInit(){
    this.treeMenuService.getMenuTreeData()
    .subscribe(
        menuData => 
        {
            this.menuTreeData = menuData;
        }, 
        error =>  this.errorMessage = <any>error
    );
  }

  onMouseEnterParent($event){
   // alert('Mouse enter event at parent');
  }

  onMouseLeaveParent($event){
    alert('Mouse leave event at parent');
  }

  onMenuLeafItemSelect($event){
    alert('Menu Leaf is selected: '+$event.menuItem.label);
  }

}
