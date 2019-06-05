import { Pipe, PipeTransform } from '@angular/core';
import { Form } from '../shared/form';
@Pipe({
    
    name: 'selectedForm'
})
export class SelectedFormPipe implements PipeTransform {
    transform(allForms: Form[], formId: string): any {
        return allForms.filter(f => f._id == formId);
    }
}