//Authorization
export interface LoginCredentials {
  number: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface AuthState {
  token: string | null;
  number: string | null;
  userId: string | null;
}

export interface RegisterCredentials {
  username: string;
  firstname: string;
  lastname: string;
  number: string;
  password: string;
  role: string;
  mpin: string;
}

export interface UserCredentials {
  firstName: string;
  lastName: string;
  userId: string;
  userName: string;
  userPhoneNumber: string;
  userProfile: string;
  walletBalance: number;
}

export interface GetUserParams {
  number: string;
}

//Notification
export interface SnackbarState {
  open: boolean;
  message: string;
  severity: "success" | "error" | "warning" | "info";
}

//Textfield Visibility
export interface TextFieldVisibility {
  showText: boolean;
}

export interface TransactionData {
  amount: number;
  id: number;
  phoneNumber: string;
  receiverName: string;
  senderName: string;
  statement: string;
  status: string;
  timestamp: string;
  transactionRole: string;
}

export interface TranscationParams {
  id: string;
  duration?: string;
  startDate?: string;
  endDate?: string;
}

export interface SenderCredentials {
  recieverNumber: string;
  amount: string;
  mpin: string;
  senderNumber: string;
}
