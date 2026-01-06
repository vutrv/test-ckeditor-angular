import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {
  public displayContent: string = '';

  ngOnInit(): void {
    const savedData = localStorage.getItem('preview_post');
    if (savedData) {
      this.displayContent = savedData;
    }
  }
}