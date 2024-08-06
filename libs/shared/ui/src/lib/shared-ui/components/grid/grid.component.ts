import { Component, ContentChild, contentChild, input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-grid',
  standalone: true,
  imports: [CommonModule],
  template: ` <div>
    @for (item of data(); track $index) {
      <ng-container *ngTemplateOutlet="tpl"></ng-container>
    }
  </div>`,
  styles: ``,
})
export class GridComponent {
  data = input.required<any>();
  @ContentChild(TemplateRef) tpl:any;
  /* tpl:any = contentChild(TemplateRef); */
}
