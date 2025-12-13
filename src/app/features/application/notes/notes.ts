import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import { AllRoutes } from '../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-notes',
  imports: [NgxEditorModule,MatSelectModule,BsDatepickerModule,CommonModule,RouterLink,MatTooltipModule],
  templateUrl: './notes.html',
  styleUrl: './notes.scss'
})
export class Notes {
AllRoutes=AllRoutes
  editor!: Editor;
  editor1!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic', 'format_clear'],
    ['underline', 'strike'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['image'],
    ['link'],
  ];
  ngOnInit(): void {
    this.editor = new Editor();
    this.editor1 = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
    this.editor1.destroy();
  }
}
