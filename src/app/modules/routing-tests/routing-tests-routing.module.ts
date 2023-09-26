import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, AboutExtraComponent, ErrorPageComponent, HomeComponent, PostComponent, PostsComponent } from 'routing-tests';
import { AuthGuard } from './core/services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent, canActivateChild: [AuthGuard],
      children: [
        { path: 'extra', component: AboutExtraComponent }
      ]
  },
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
  { path: 'posts/:id', component: PostComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingTestsRoutingModule { }
