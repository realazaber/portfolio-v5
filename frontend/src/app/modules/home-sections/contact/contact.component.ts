import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyUIModule } from '@azaber/ngeasy-ui';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, EasyUIModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
