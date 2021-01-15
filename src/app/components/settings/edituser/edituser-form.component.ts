import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
// Ejemplo de Formulario con 2 way binding 

@Component({
    selector: "EditForm",
    moduleId: module.id,
    template: `<FlexboxLayout flexDirection="row">
    <TextField #texto="ngModel" [(ngModel)]="textFieldValue"
    hint="Ingresar texto..." required minlen="4">
    </TextField>
    <Label *ngIf="texto.hasError('required')" text="*"></Label>
    <Label *ngIf="!texto.hasError('required')
    && texto.hasError('minlen')" text="Ingrese al menos 4 letras">
    </Label>
    </FlexboxLayout>
    <Button text="Actualizar" (tap)="onButtonTap()" *ngIf="texto.valid"></Button>`
})

export class EditFormComponent implements OnInit {
    ngOnInit(): void {
        this.textFieldValue = this.inicial;
    }

    textFieldValue: string = "";
    @Output() search: EventEmitter<string> = new EventEmitter();
    @Input() inicial: string;
    onButtonTap(): void {
        console.log(this.textFieldValue);
        if (this.textFieldValue.length > 2){
            this.search.emit(this.textFieldValue);
        }
    }

}