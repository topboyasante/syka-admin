export interface ApiResponse<T> {
  data: T;
  message: string;
}

export interface ErrorResponse {
  error: true;
  message: string;
}

export interface SuccessResponse {
  error: false;
  message: string;
  data?: unknown;
}
