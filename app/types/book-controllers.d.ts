export interface BookParams {
    userId: number;
    bookId: number;
  }
  export interface BookListQueryParamas{
    q?: string;
    page?:number;
    per_page?: number;
    book_id?: number;
    book_name?:string;
    book_author?: string;
    description?: string;
  }
  
