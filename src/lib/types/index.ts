export interface ApiErrorResponse {
  response?: {
    data?: {
      message?: string;
      detail?: string;
      errors?: string[];
    };
  };
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
