export class Publicaciones {
    userId: number;
    title: string;
    id: number;
    body: string;

    constructor(userId: number, id: number, title: string, body: string){
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }
}
