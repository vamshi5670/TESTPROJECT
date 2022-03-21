
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProfileComponent } from './profile/profile.component';
import { SidepanelRoutingModule } from './sidepanel-routing.module';


@NgModule({
  imports: [SidepanelRoutingModule],
  exports: [RouterModule],
  declarations: [
    
    ProfileComponent,
    AboutUsComponent,
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



