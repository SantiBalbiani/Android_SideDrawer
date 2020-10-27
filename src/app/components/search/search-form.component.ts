import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

// Ejemplo de Formulario con 2 way binding 

@Component({
    selector: "SearchForm",
    moduleId: module.id,
    template: `<TextField [(ngModel)]="textFieldValue" hint="Enter Text... "></TextField>
    <Button text="Button" (tap)="onButtonTap()"></Button>`
})

export class SearchFormComponent implements OnInit {
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

