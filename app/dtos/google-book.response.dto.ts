export interface GoogleBookSearchResponseDto {
  totalItems: number;
  items: GoogleBookResponseDto[];
}

export interface GoogleBookResponseDto {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publishedDate: string;
    description: string;
    industryIdentifiers: {
      type: string;
      identifier: string;
    }[];
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
}
