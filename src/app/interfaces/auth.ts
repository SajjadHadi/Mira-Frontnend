export interface User {
  id: number;
  username: string;
}

export interface LoginResponse {
  access_token: string;
}

export interface BaseAuth {
  username: string;
  password: string;
}

export interface LoginRequest extends BaseAuth {
}

export interface RegisterRequest extends BaseAuth {
}




