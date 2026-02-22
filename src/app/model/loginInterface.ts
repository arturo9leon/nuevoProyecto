export interface LoginTopControl {
  icon: string;
  label: string;
}

export interface LoginBrandText {
  title: string;
  subtitle: string;
}

export interface LoginFormMeta {
  title: string;
  subtitle: string;
  submitText: string;
  submitRoute: string;
}

export type LoginInputType = 'text' | 'password';

export interface LoginField {
  id: string;
  label: string;
  placeholder: string;
  type: LoginInputType;
  leadingIcon: string;
  trailingIcon?: string;
}
