export interface IBanks {
  _id: string;
  name: string;
  sortCode: string;
  active: string;
  color: Color;
  logo: string;
  icon: string;
}

export interface Color {
  primary: string;
  secondary: string;
  accent: string;
}

export interface IBanksInputDTO {
  name: string;
  sortCode: string;
  color: Color;
  logo: string;
  icon: string;
}
