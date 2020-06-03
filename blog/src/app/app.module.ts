import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import {posts} from './services/posts.service';
import { NewPostComponent } from './new-post/new-post.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { HomeComponent } from './home/home.component';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  { path: 'new', component: NewPostComponent },
  { path: 'posts', component: PostListComponent },
  { path: '', component: PostListComponent },
  { path: 'posts/:id', component: SinglePostComponent },
  { path: ':id', component: SinglePostComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    SinglePostComponent,
    HomeComponent,
    AsideComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    posts
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
