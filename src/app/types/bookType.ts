export interface Book {
  title: string;
  description: string;
  author: string;
  isbn: string;
  noCopies: string;
  category: string;
  price: string;
}
export interface IssuedBook {
  issuedBookId: string;
  issuedDate: string;
  dueDate: string;
  bookTitle: string;
  bookAuthor: string;
  bookIsbn: string;
  bookDescription: string;
  bookNoCopies: string;
  username: string;
  fullName: string;
  phoneNumber: string;
  returned: Boolean ;
  issued: Boolean;
}
