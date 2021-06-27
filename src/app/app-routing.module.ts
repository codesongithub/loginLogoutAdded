import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductviewComponent } from './productview/productview.component';
import { RegisterComponent } from './register/register.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { UsereditComponent } from './useredit/useredit.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserviewComponent } from './userview/userview.component';

const routes: Routes = [
  {
  path:"productcreate",
  component:ProductcreateComponent
  },
  {
    path:"productlist",
    component:ProductlistComponent
    },
    {
      path:"productview/:id",
      component:ProductviewComponent
      },
      {
        path:"productedit/:id",
        component:ProducteditComponent
        },
        {
          path:"usercreate",
          component:UsercreateComponent
          },
          {
            path:"userlist",
            component:UserlistComponent
            },
            {
              path:"useredit/:id",
              component:UsereditComponent
              },
              {
                path:"userview/:id",
                component:UserviewComponent
                },
                {
                  path:"",
                  component:DashboardComponent
                  },
                  {
                    path:"login",
                    component:LoginComponent
                  },
                  {
                    path:"register",
                    component:RegisterComponent
                  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
