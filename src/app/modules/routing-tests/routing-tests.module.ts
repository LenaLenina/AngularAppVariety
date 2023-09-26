import { NgModule } from '@angular/core';
import { RoutingTestsRoutingModule } from './routing-tests-routing.module';

import {
  IPostsRepository,
  IPostsService,
  PostsRepository,
  PostsService,
  RoutingTestsLibModule
} from 'routing-tests';
import { RoutingTestsComponent } from './presentation/routing-tests/routing-tests.component';
import { AuthService } from './core/services/auth.service';
import { AuthGuard } from './core/services/auth.guard';


@NgModule({
  declarations: [
    RoutingTestsComponent
  ],
  imports: [
    RoutingTestsRoutingModule,
    RoutingTestsLibModule,
  ],
  exports: [ RoutingTestsComponent ],
  providers: [ 
    { provide: IPostsService, useClass: PostsService },
    { provide: IPostsRepository, useClass: PostsRepository },
    AuthService,
    AuthGuard
  ]
})
export class RoutingTestsModule { }
