import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostEditorComponent } from './components/post-editor/post-editor.component';
import { ViewPostComponent } from './components/view-post/view-post.component';

const routes: Routes = [
  { path: 'editor', component: PostEditorComponent },
  { path: 'view-post', component: ViewPostComponent },
  { path: '', redirectTo: '/editor', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
