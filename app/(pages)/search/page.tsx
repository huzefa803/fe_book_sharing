import { searchGoogleBooks } from "@/app/lib/google-books";
import { BookCard } from "../../components/book-card/book-card.component";
import { BookModel } from "@/app/models/book.model";

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  if (!searchParams["q"]) {
    return <div className="w-3/4 mx-auto text-xl font-bold">Search title or isbn</div>;
  }
  let searchQuery = "";
  if (Array.isArray(searchParams["q"])) {
    searchQuery = searchParams["q"][0];
  } else {
    searchQuery = searchParams["q"];
  }
  const results = await searchGoogleBooks(searchQuery);
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-3xl font-bold border-b-2 pl-2 mb-3 pb-1">Results</h1>
      <div className="grid grid-cols-3 gap-y-7 gap-x-7">
        {results.map((book: BookModel) => {
          return (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              url={book.thumbnail}
              id={book.id}
              className="col-span-1"
            ></BookCard>
          );
        })}
      </div>
    </div>
  );
}
