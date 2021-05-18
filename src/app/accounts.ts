export interface Accounts {



    id: number;
    name: string;
    type : STATUS;

}
enum STATUS {
    User,
    Admin,
}