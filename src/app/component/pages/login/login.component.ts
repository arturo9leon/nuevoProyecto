import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LoginBrandText,
  LoginField,
  LoginFormMeta,
  LoginTopControl,
} from '../../../model/loginInterface';
import {
  LOGIN_BRAND,
  LOGIN_FIELDS,
  LOGIN_FORM_META,
  LOGIN_TOP_CONTROLS,
} from '../../../data/loginMock';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  readonly topControls: LoginTopControl[] = LOGIN_TOP_CONTROLS;

  readonly brand: LoginBrandText = LOGIN_BRAND;

  readonly formMeta: LoginFormMeta = LOGIN_FORM_META;

  readonly fields: LoginField[] = LOGIN_FIELDS;
}
