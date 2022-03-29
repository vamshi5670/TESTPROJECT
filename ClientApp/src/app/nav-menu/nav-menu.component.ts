import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
   public navMenu=true;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  menuicon(){
    this.navMenu = !this.navMenu;
    console.log("working" + this.navMenu)
    
  }

  // public isExpand:boolean=false;
  // title = 'AngLearnApp';

  // public slidebarExpand(){
  //   this.isExpand = !this.isExpand;
  // }
}
