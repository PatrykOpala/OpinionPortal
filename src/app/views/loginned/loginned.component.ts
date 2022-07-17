import { CommonModule } from '@angular/common';
import { Component, inject, OnInit} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoOpinierComponent } from 'src/app/components/logo-opinier/logo-opinier.component';
import { Opinions } from 'src/shared/utils/ts/interfaces/opinion.interface';
import { FormService } from 'src/shared/utils/ts/services/form.service';

@Component({
  selector: 'opn-loginned',
  templateUrl: './loginned.component.html',
  styleUrls: ['./loginned.component.scss'],
  standalone: true,
  imports: [
    LogoOpinierComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginnedComponent implements OnInit {

  public formService = inject(FormService);
  
  constructor() {}

  yourOpinionsPublishing: Opinions[] = [
    {head: "coś", content: "tam"},
    {head: "cośśśśśśśśś", content: "taaaaaaaaaaammmmmmmmmmmm"},
    {head: "cośdfhdahrahehhaerha", content: "tamdghdhdfh"},
    {head: "coś", content: "tam"},
  ];

  ngOnInit(): void {}
}
