import { AfterViewInit, Component, inject, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth/auth.service';
import { NativeTelService } from '../core/services/native-tel.service';

@Component({
  selector: 'opn-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.scss'],
})
export class LogowanieComponent implements OnInit, AfterViewInit, OnDestroy {

  protected loginForm !: FormGroup;

  private loginFormBuilder = inject(FormBuilder);
  private authService = inject(AuthService);

  constructor(protected readonly nativeTel: NativeTelService) {
    this.loginForm = this.loginFormBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('')
    })
  }
  ngAfterViewInit(): void {
    this.nativeTel.teleport('teleported-element', 'vc');
  }
  ngOnDestroy(): void {
    this.nativeTel.finishTeleportation('teleported-element', 'vc');
  }

  ngOnInit(): void {}

  onSubmit(): void{
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }
}
