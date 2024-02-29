import { getBookById } from "@/app/lib/google-books";
import { redirect } from "next/navigation";
import Image from "next/image";
import  parse  from "html-react-parser";
import { ScrollArea } from "@/app/components/ui/scroll-area"
import { getBookDetails } from "@/app/api/books/book";
import { BookInteractionComponent } from "@/app/components/book-interactions/book-interaction.component";
import BookStatsComponent from "@/app/components/book-stats/book-stats.component";


export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  if (!searchParams["id"]) {
    redirect("/");
  }
  const bookId = searchParams["id"] as string;
  const result = await getBookById(bookId);
  if (!result) {
    redirect("/");
  }
  const internalBookDetails = await getBookDetails(result.id)


  return (
    <div className="w-3/4 mx-auto">
      <div className="grid grid-cols-4 mb-5">
        <Image
          src={result.image || "/placeholder_book.png"}
          width={1000}
          height={1000}
          alt="Book Cover"
          className="col-span-1 shadow-md shadow-slate-500 rounded-lg"
        />
        <div className="ml-5 col-span-3">
          <h1 className="text-4xl font-bold">{result.title}</h1>
          <h2 className="text-lg text-orange-400">{result.subtitle}</h2>
          <h2 className="text-md">{result.author}</h2>
          <h2 className="text-md">ISBN {result.isbn}</h2>
          <div className="max-h-56 mt-4 overflow-scroll shadow-[inset_0_-3px_2px_-1px_rgba(0,0,0,0.2)]">{parse(result.description)}</div>
        </div>
        <BookInteractionComponent bookId={bookId} showText={true}></BookInteractionComponent>
        <BookStatsComponent className=""></BookStatsComponent>
      </div>
    </div>
  );
}
