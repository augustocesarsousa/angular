import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent {
  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '^(\\([0-9]{2}\\))\\s([9]{1})?([0-9]{4})-([0-9]{4})$'
        ),
      ],
    ],
  });

  constructor(private formBuilder: FormBuilder) {}

  public submitForm(): void {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value);
    }
  }
}
