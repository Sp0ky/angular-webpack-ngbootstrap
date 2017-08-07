// MODULE EXTERNES
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';

/** COMPONENTS GABI */
import { EditorComponent } from './editor.component';

@NgModule({
  imports: [FormsModule, CKEditorModule],
  declarations: [EditorComponent],
  providers: [],
  exports: [EditorComponent],
  bootstrap: [ EditorComponent ]
})
export class EditorModule { }
