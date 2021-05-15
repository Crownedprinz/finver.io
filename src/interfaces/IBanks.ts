export interface IBanks {
  _id: string;
  name: string;
  sortCode: string;
  active: string;
  color: company;
  logo: string;
  icon: string;
}

export interface company {
  primary: string;
  secondary: string;
  accent: string;
}

export interface IBanksInputDTO {
  name: string;
  sortCode: string;
  color: company;
  logo: string;
  icon: string;
}
