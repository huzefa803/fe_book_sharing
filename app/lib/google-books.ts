import { GoogleBookResponseDto, GoogleBookSearchResponseDto } from "../dtos/google-book.response.dto";
import { toBookList, toBook } from "./book.mapper";

export const searchGoogleBooks = async (query: string) => {
  const googleBooksUrl = `https://www.googleapis.com/books/v1/volumes?key=${process.env["API_KEY"]}&q=${query}&projection=full`;
  const response = await fetch(googleBooksUrl);
  const data: GoogleBookSearchResponseDto = await response.json();
  return toBookList(data)
};


export const getBookById = async (id: string) => {
  const googleBooksUrl = `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env["API_KEY"]}&projection=full`;
  const response = await fetch(googleBooksUrl);
  if (response.status != 200) {
    return undefined;
  }
  const data: GoogleBookResponseDto = await response.json();
  return toBook(data)
}
