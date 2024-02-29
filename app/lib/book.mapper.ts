import {
  GoogleBookResponseDto,
  GoogleBookSearchResponseDto,
} from "../dtos/google-book.response.dto";
import { BookModel } from "../models/book.model";

export function toBookList(
  searchResponseDto: GoogleBookSearchResponseDto
): BookModel[] {
  const bookList: BookModel[] = [];
  searchResponseDto.items.forEach((item) => {
    bookList.push({
      id: item.id,
      title: item.volumeInfo.title,
      subtitle: item.volumeInfo.subtitle,
      author: item.volumeInfo.authors?.join(", "),
      description: item.volumeInfo.description,
      isbn: getIsbn(item.volumeInfo.industryIdentifiers),
      thumbnail: item.volumeInfo.imageLinks?.smallThumbnail,
      image: item.volumeInfo.imageLinks?.thumbnail,
    });
  });
  return bookList;
}

export function toBook(book: GoogleBookResponseDto): BookModel {
  return {
    id: book.id,
    title: book.volumeInfo.title,
    subtitle: book.volumeInfo.subtitle,
    author: book.volumeInfo.authors?.join(", "),
    description: book.volumeInfo.description,
    isbn: getIsbn(book.volumeInfo.industryIdentifiers),
    thumbnail: book.volumeInfo.imageLinks?.smallThumbnail,
    image: book.volumeInfo.imageLinks?.thumbnail,
  };
}

function getIsbn(industryIdentifiers: { type: string; identifier: string }[]) {
  if (!industryIdentifiers) return;
  const isbn13 = industryIdentifiers.filter((item) => item.type == "ISBN_13");
  if (isbn13.length > 0) return isbn13[0].identifier;
  const isbn10 = industryIdentifiers.filter((item) => item.type == "ISBN_10");
  if (isbn10.length > 0) return isbn10[0].identifier;
}
