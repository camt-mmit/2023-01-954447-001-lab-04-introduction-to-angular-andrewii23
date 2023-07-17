import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent {
  currentTime = new Date();
  userAgent = navigator.userAgent;
  languages = navigator.languages;
  cookieEnagled = navigator.cookieEnabled;
  logicalProcessors = navigator.hardwareConcurrency;
  maxTouchPoints = navigator.maxTouchPoints;
}
