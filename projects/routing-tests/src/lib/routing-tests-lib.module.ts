import { NgModule } from '@angular/core';
import { AboutComponent } from './infrastracture/presentation/about/about.component';
import { HomeComponent } from './infrastracture/presentation/home/home.component';
import { PostsComponent } from './infrastracture/presentation/posts/posts.component';
import { PostComponent } from './infrastracture/presentation/post/post.component';
import { AboutExtraComponent } from './infrastracture/presentation/about-extra/about-extra.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    AboutExtraComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AboutComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    AboutExtraComponent,
  ]
})
export class RoutingTestsLibModule { }
