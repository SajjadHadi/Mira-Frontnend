import { Component } from '@angular/core';
import { Validators } from "@angular/forms";
import { FormComponent } from "../../components/form/form.component";
import { CreateStatement } from "../../interfaces/statement";

@Component({
    selector: 'app-dashboard',
    imports: [
        FormComponent
    ],
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

    statementConfig = {
        title: 'Mental Statement Deteails',
        description: "Describe your emotional state as detailed as possible then click detect button to get the detection.",
        fields: [
            {
                name: 'statement',
                label: 'Statement',
                type: 'textarea',
                icon: 'pi-pen-to-square',
                validators: [Validators.required, Validators.minLength(7), Validators.maxLength(255)],
            },
        ],
        submitLabel: 'Detect'
    }

    onState(data: CreateStatement) {
        console.log(data);
    }
}
