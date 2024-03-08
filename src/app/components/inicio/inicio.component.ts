import { Clipboard } from '@angular/cdk/clipboard';
import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ToolBarComponent, DividerModule, ChipModule, CardModule, AvatarModule, TooltipModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  isCopied = false;

  constructor(private clipboard: Clipboard) { }

  copyToClipboard(text: string) {
    this.clipboard.copy(text);
    this.isCopied = true;
  }
}
