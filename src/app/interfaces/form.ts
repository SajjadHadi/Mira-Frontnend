export interface BaseAuth {
  email: string;
  password: string;
}

export interface Login extends BaseAuth {
}

export interface Register extends BaseAuth {
}
