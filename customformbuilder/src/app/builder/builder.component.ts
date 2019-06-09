import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent {

  @ViewChild('json', {static: false } )
  jsonElement?: ElementRef;
  
  public form: Object = {
    components: []
  };
  
  onChange(event) {
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
  }

}