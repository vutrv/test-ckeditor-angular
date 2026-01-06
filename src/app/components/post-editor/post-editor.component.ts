import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {
  public Editor = ClassicEditor;
  public editorData = '';

  public config = {
    toolbar: [
      'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|',
      'insertTable', 'imageUpload', 'mediaEmbed', 'undo', 'redo'
    ],
    table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
    }
  };

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onReady(editor: any): void {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
      return new MyUploadAdapter(loader);
    };
  }

  saveContent() {
    if (this.editorData) {
      localStorage.setItem('preview_post', this.editorData);
      this.router.navigate(['/view-post']);
    } else {
      alert('Please input data before saving!');
    }
  }
}

class MyUploadAdapter {
  constructor(private loader: any) {}

  upload() {
    return this.loader.file.then((file: any) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve({ default: reader.result });
      };
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    }));
  }

  abort() {}
}