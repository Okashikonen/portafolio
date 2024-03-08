import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, AvatarModule, AvatarGroupModule,
    RouterOutlet, NgClass, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent {

  constructor(private router: Router) { }

  menuOption: string = '';
  
  navegacion(menuOption: string){
    this.menuOption = menuOption;
  }
}
