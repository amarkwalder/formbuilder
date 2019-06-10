import { Component, OnInit, OnDestroy } from '@angular/core';
import { Form } from '../shared/form';
import { ActivatedRoute } from '@angular/router';

// USING A SERVICE INSTEAD
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css'],
  providers: [FormService]
})
export class FormDetailsComponent implements OnInit, OnDestroy {
    forms: any = [];
 
    _id: string;
    sub: any;

    constructor(private formService: FormService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.loadForms()
        this.sub = this.route.params.subscribe(params => {
            this._id = params['_id'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    loadForms() {
        return this.formService.getForms().subscribe((data: {}) => {
            this.forms = data;
        })
    }
    
}




