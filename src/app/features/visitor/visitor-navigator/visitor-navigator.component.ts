import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-visitor-navigator',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './visitor-navigator.component.html',
  styleUrls: ['./visitor-navigator.component.scss'],
})
export class VisitorNavigatorComponent {}
