import { Component, OnInit} from '@angular/core';

import { Observable } from 'rxjs';

interface Opinions {
  head: string,
  content: string
}

@Component({
  selector: 'opn-app-loginned',
  templateUrl: './loginned.component.html',
  styleUrls: ['./loginned.component.scss']
})
export class LoginnedComponent implements OnInit {

  constructor() {}

  yourOpinionsPublishing: Opinions[] = [
    {head: "coś", content: "tam"},
    {head: "cośśśśśśśśś", content: "taaaaaaaaaaammmmmmmmmmmm"},
    {head: "cośdfhdahrahehhaerha", content: "tamdghdhdfh"},
    {head: "coś", content: "tam"},
    {head: "cośśśśśśśśś", content: "taaaaaaaaaaammmmmmmmmmmm"},
    {head: "cośdfhdahrahehhaerha", content: "tamdghdhdfh"},
    {head: "coś", content: "tam"},
    {head: "cośśśśśśśśś", content: "taaaaaaaaaaammmmmmmmmmmm"},
    {head: "cośdfhdahrahehhaerha", content: "tamdghdhdfh"},
    {head: "coś", content: "tam"},
    {head: "cośśśśśśśśś", content: "taaaaaaaaaaammmmmmmmmmmm"},
    {head: "cośdfhdahrahehhaerha", content: "tamdghdhdfh"},
    {head: "coś", content: "tam"},
    {head: "cośśśśśśśśś", content: "taaaaaaaaaaammmmmmmmmmmm"},
    {head: "cośdfhdahrahehhaerha", content: "tamdghdhdfh"},
    {head: "coś", content: "tam"},
    {head: "cośśśśśśśśś", content: "taaaaaaaaaaammmmmmmmmmmm"},
    {head: "cośdfhdahrahehhaerha", content: "tamdghdhdfh"},
    {head: "coś", content: "tam"},
    {head: "cośśśśśśśśś", content: "taaaaaaaaaaammmmmmmmmmmm"},
    {head: "cośdfhdahrahehhaerha", content: "tamdghdhdfh"},
    {head: "coś", content: "tam"},
    {head: "cośśśśśśśśś", content: "taaaaaaaaaaammmmmmmmmmmm"},
    {head: "cośdfhdahrahehhaerha", content: "tamdghdhdfh"},
    {head: "coś", content: "tam"},
    {head: "cośśśśśśśśś", content: "taaaaaaaaaaammmmmmmmmmmm"},
    {head: "cośdfhdahrahehhaerha", content: "tamdghdhdfh"},
    
  ]
  
  ngOnInit(): void {}

}
