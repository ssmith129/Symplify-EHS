import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
@Component({
  selector: 'app-form-fileupload',
  imports: [FormsModule,ReactiveFormsModule,NgxDropzoneModule],
  templateUrl: './form-fileupload.html',
  styleUrl: './form-fileupload.scss'
})
export class FormFileupload {
  singleFile: File[] = [];
  multipleFiles: File[] = [];

  onSingleSelect(event: { addedFiles: File[] }) {
    this.singleFile = [];
    this.singleFile.push(...event.addedFiles);
  }

  onMultipleSelect(event: { addedFiles: File[] }) {
    this.multipleFiles.push(...event.addedFiles);
  }

  onRemoveSingle(event: File) {
    this.singleFile.splice(this.singleFile.indexOf(event), 1);
  }

  onRemoveMultiple(event: File) {
    this.multipleFiles.splice(this.multipleFiles.indexOf(event), 1);
  }
}
