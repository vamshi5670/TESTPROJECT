import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidepanelRoutingModule } from './sidepanel-routing.module';
import { Child1Component } from './dashboard/child1/child1.component';
import { Child2Component } from './dashboard/child2/child2.component';
import { Child3Component } from './dashboard/child3/child3.component';


@NgModule({
  imports: [SidepanelRoutingModule],
  exports: [RouterModule],
  declarations: [
    Child1Component,
    Child2Component,
    Child3Component
  ]
})
export class SidepanelModule { }




// @NgModule({
//   declarations: [
//     LeftpanelComponent,
//     RightpanelComponent,
//     AboutUsComponent,
//     ProfileComponent,
//     DashboardComponent
//   ],
//   imports: [
//     CommonModule,
//     RouterModule.forChild([
//       {
     
//       path: '',
//       component:SidepanelComponent,
//     children:[
      
//       { path:'',redirectTo:'profile',pathMatch:'full'},
//       { path:'profile',component:ProfileComponent },
//       { path :'aboutUs', component:AboutUsComponent },
//       { path :'dashboard', component:DashboardComponent },
  
//     ]
//   }
      
  
//     ]),

      


//   ],

//   exports: [RouterModule],


// })
// export class SidepanelModule {
 
// }



