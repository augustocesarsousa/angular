import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit {
  public form = this.formBuilder.group({
    email: ['acs-03@hotmail.com'],
    password: [''],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.form.value.email);
  }
}
