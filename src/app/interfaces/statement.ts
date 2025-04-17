export interface DetectRequest {
  statement: string;
}

export interface Statement {
  id: number;
  statement: string;
  disorders: string;
  created_at: string;
}

export interface StatementsResponse {
  statements: Statement[];
  total: number;
}
