import {Component, Input} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

type InputTypes = "text" | "email" | "password";

@Component({
  selector: 'app-primary-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './primary-input.component.html',
  styleUrls: ['./primary-input.component.scss'],
})
export class PrimaryInputComponent {

  @Input() type: InputTypes = "text";

  @Input() fcName: string = "";

  @Input() placeHolder: string = "";

  @Input() label: string = "";

}
