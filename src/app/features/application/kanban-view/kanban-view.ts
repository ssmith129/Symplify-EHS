import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AllRoutes } from '../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-kanban-view',
  imports: [CommonModule,FormsModule,DragDropModule,NgxEditorModule,MatSelectModule,BsDatepickerModule,RouterLink,MatTooltipModule],
  templateUrl: './kanban-view.html',
  styleUrl: './kanban-view.scss'
})
export class KanbanView {
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

  ngOnDestroy(): void {
    this.editor.destroy();
    this.editor1.destroy();
  }
  public lstOne: CompanyCard[] = [];
  public lstTwo: CompanyCard[] = [];
  public lstThree: CompanyCard[] = [];
  public seclstOne  : CompanyCard[] = [];
  ngOnInit(): void {
    this.editor = new Editor();
    this.editor1 = new Editor();
    this.lstOne = [
      {
        kanbanPower: "Low",
        PowerClass:"bg-success",
        Name: "Settings Page",
        Content:"Implement the settings page to manage user preferences",
        Progress:0,
        extra:true,
        extrano:"5",
        avatar:[
              "assets/img/avatars/avatar-10.jpg",
              "assets/img/avatars/avatar-08.jpg",
              "assets/img/avatars/avatar-07.jpg",
              "assets/img/avatars/avatar-02.jpg",
        ]
      },
      {
        kanbanPower: "Medium",
        PowerClass:"bg-warning",
        Name: "Applications Page",
        Content:"Implement the Applications pages to <br> manage tools for seamless productivity.",
        Progress:0,
        extra:false,
        avatar:[
            "assets/img/avatars/avatar-13.jpg",
            "assets/img/avatars/avatar-14.jpg", 
            "assets/img/avatars/avatar-15.jpg",
        ]
      },
     
    ];
    this.lstTwo = [
      {
        kanbanPower: "Medium",
        PowerClass:"bg-warning",
        Name: "Error Pages",
        Content:"Design and integrate custom error pages <br> for user experience during issues.",
        Progress:40,
        ProgressClass:"bg-indigo",
        extra:false,
        msg:"08",
        link:"03",
        avatar:[
              "assets/img/avatars/avatar-10.jpg",
              "assets/img/avatars/avatar-08.jpg",
              "assets/img/avatars/avatar-07.jpg",
        ]
      },
      {
        kanbanPower: "Low",
        PowerClass:"bg-success",
        Name: "UI Pages",
        Content:"Develop and refine UI pages to ensure a <br> user-friendly and intuitive interface",
        Progress:70,
        ProgressClass:"bg-orange",
        extra:true,
        extrano:"4",
        msg:"10",
        link:"06",
        avatar:[
              "assets/img/avatars/avatar-20.jpg",
              "assets/img/avatars/avatar-21.jpg",
              "assets/img/avatars/avatar-22.jpg",
        ]
      },
      {
        kanbanPower: "High",
        PowerClass:"bg-danger",
        Name: "Customizer",
        Content:"Build a customizer panel to allow users to <br> personalize layout, theme, and UI settings",
        Progress:50,
        ProgressClass:"bg-info",
        extra:false,
        msg:"12",
        link:"04",
        avatar:[
              "assets/img/avatars/avatar-20.jpg",
              "assets/img/avatars/avatar-21.jpg",
              "assets/img/avatars/avatar-22.jpg",
        ]
      },
    ];
    this.lstThree = [
      {
        kanbanPower: "Low",
        PowerClass:"bg-success",
        Name: "Dashboard",
        Content:"Create an interactive dashboard to display <br> key metrics and system summaries",
        Progress:100,
        ProgressClass:"bg-success",
        extra:true,
        extrano:"5",
        msg:"15",
        link:"12",
        avatar:[
              "assets/img/avatars/avatar-10.jpg",
              "assets/img/avatars/avatar-08.jpg",
              "assets/img/avatars/avatar-07.jpg",
        ]
      },
      {
        kanbanPower: "Medium",
        PowerClass:"bg-warning",
        Name: "Authentication Pages",
        Content:"Develop authentication pages including <br> login, registration & password management",
        Progress:100,
        ProgressClass:"bg-success",
        extra:false,
        msg:"10",
        link:"06",
        avatar:[
              "assets/img/avatars/avatar-25.jpg",
              "assets/img/avatars/avatar-26.jpg",
              "assets/img/avatars/avatar-27.jpg",
        ]
      },
    ];
 
    this.seclstOne = [
      
    ];

  }
  //  drap and drop
  onDrop(event: CdkDragDrop<CompanyCard[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
interface CompanyCard {
  kanbanPower: string;
  PowerClass: string;
  Name: string;
  Content:string;
  Progress:number;
  ProgressClass?:string;
  avatar?:string[];
  extra:boolean;
  extrano?:string;
  msg?:string;
  link?:string
}
