export interface Accounts {



    id: number;
    name: string;
    type : STATUS;

}

export enum STATUS {
    User,
    Admin,
}