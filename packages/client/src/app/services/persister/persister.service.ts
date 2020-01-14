import { Injectable } from '@angular/core';

interface IArguments {
  name: string;
  data: any;
}

@Injectable({
  providedIn: 'root',
})
export class PersisterService {
  constructor() {}

  public persistItem = ({ name, data }: IArguments) => {
    localStorage.setItem(name, JSON.stringify(data));
  };

  public deletePersistedItem = (name: IArguments['name']) => {
    localStorage.removeItem(name);
  };

  public getPersistedItem = (name: IArguments['name']) => {
    const item = localStorage.getItem(name);

    return item ? JSON.parse(item) : null;
  };
}

// interface IArguments {
//   name: string;
//   data: any;
// }

// export const persistItem = ({ name, data }: IArguments) => {
//   localStorage.setItem(name, JSON.stringify(data));
// };

// export const deletePersistedItem = (name: IArguments['name']) => {
//   localStorage.removeItem(name);
// };

// export const getPersistedItem = (name: IArguments['name']) => {
//   const item = localStorage.getItem(name);

//   return item ? JSON.parse(item) : null;
// };
