import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech.component.html',
  styles: ``,
})
export class TechComponent {
  @Input() name: string = '';
  @Input() bgColor: string = '';
  @Input() txtSize:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl' = 'xl';

  getClasses(): string {
    let classes = ' ';
    classes += 'text-' + this.txtSize + ' ';
    classes += 'bg-[' + this.bgColor + '] ';

    return classes;
  }
}
