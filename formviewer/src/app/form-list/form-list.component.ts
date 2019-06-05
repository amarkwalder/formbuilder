import { Component, OnInit } from '@angular/core';
import { Form } from '../shared/form';
import { Router } from '@angular/router';

// USING A SERVICE INSTEAD
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css'],
  providers: [ FormService]
})
export class FormListComponent implements OnInit {
  forms:any = [];
  
  constructor(private formService: FormService) { }
  
  ngOnInit() {
    this.loadForms()
  }

  loadForms() {
    return this.formService.getForms().subscribe((data: {}) => {
      this.forms = data;
    })
  }
  
}