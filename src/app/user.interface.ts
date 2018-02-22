export interface IUser {
    id: number;
    available: boolean;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    area: string;
    phone: string;
    interests: string[];
    description: string;
    location: number;
    currentMatch: number;
    matches: IMatch[];
  }

  export interface IMatch {
    id: number;
    date: string;
    rate: number;
    cancelMessage: string;
    cancelMessageToHHRR: string;
  }
