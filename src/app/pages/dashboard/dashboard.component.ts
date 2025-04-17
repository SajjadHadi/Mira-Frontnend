import { Component, inject } from '@angular/core';
import { Validators } from "@angular/forms";
import { Fieldset } from "primeng/fieldset";
import { FormComponent } from "../../components/form/form.component";
import { DetectRequest } from "../../interfaces/statement";
import { LlmService } from '../../services/llm.service';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [FormComponent, Fieldset],
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
    private llmService = inject(LlmService);
    detectionResult: string = '';

    statementConfig = {
        title: 'Mental Statement Details',
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

    onState(data: DetectRequest) {
        this.llmService.detect(data).subscribe({
            next: (response) => {
                this.detectionResult = response.disorders;
            }
        });
    }
}
