import { Dispatch, SetStateAction } from "react";

export interface IOptions {
  value: string;
  label: string;
}

export interface ValueSelect {
  value: string;
  label: string;
}

export interface IMySelect {
  setSortType: Dispatch<SetStateAction<{
    value: string;
    label: string;
}>>;
  options: IOptions[];
  value: ValueSelect;
}
