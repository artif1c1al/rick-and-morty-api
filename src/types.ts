import {SetStateAction} from "react";

export interface IPerson {
  gender: string;
  id: number;
  image: string;
  name: string;
  status: string;
}

export interface IListPage {
  bookmarksList: IPerson[];
  setBookmarksList: SetStateAction<IPerson[]>;
}
