import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
@Component({
  selector: 'app-ui-tooltips',
  imports: [TooltipModule,CommonModule],
  templateUrl: './ui-tooltips.html',
  styleUrl: './ui-tooltips.scss'
})
export class UiTooltips {
  isshown=true;
  show():void{
    this.isshown=!this.isshown;
  }
  html = `<em>Tooltip</em> <u>with</u> <b>HTML</b>`;
  content = 'Disabled tooltip';

  primary = `<div class="tooltip-inner"> This top tooltip is themed via CSS variables.</div>`;
  secondary = `<div class="tooltip-inner"> This top tooltip is themed via CSS variables.</div>`;
  warning = `<div class="tooltip-inner"> This top tooltip is themed via CSS variables.</div>`;
  info = `<div class="tooltip-inner"> This top tooltip is themed via CSS variables.</div>`;
  success = `<div class="tooltip-inner"> This top tooltip is themed via CSS variables.</div>`;
  danger = `<div class="tooltip-inner"> This top tooltip is themed via CSS variables.</div>`;
  light = `<div class="tooltip-inner"> This top tooltip is themed via CSS variables.</div>`;
  dark = `<div class="tooltip-inner"> This top tooltip is themed via CSS variables.</div>`;

  icon1 = `Marina Kai`;
  icon2 = `Alex Carey`;
  icon3 = `Maria John`;

  link = `Link Tooltip`;
  link2 = `<div tooltip="Tooltip with HTML" triggers="click" #pop="bs-tooltip"></div>`;
}
