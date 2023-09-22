import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingTestsComponent } from './presentation/routing-tests/routing-tests.component';

const routes: Routes = [
  { path: '', component: RoutingTestsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingTestsRoutingModule { }
