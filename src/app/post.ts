export class Post {
    id: number;
    title: string;
    content: string;
    loveIts: number;
    createdAt: Date;
  
    constructor(id: number, title: string, content: string, date?: Date) {
      this.id = id,
      this.title = title,
      this.content = content,
      this.loveIts = 0,
      this.createdAt = date ? date : new Date();
    }
}
