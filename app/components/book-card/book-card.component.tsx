"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BookInteractionComponent } from "../book-interactions/book-interaction.component";
import BookStatsComponent from "../book-stats/book-stats.component";

export const BookCard = ({ className, ...props }: { [key: string]: any }) => {
  const router = useRouter();

  const handleClick = (e: any) => {
    console.log(props);
    router.push(`book?id=${props.id}`);
  };

  return (
    <div className=" hover:bg-gray-100 rounded-lg max-h-40 shadow-md shadow-black-400">
      <div
        className={`flex flex-row ${className}`}
      >
        <Image
          src={props.url || "/placeholder_book.png"}
          alt="book cover"
          width={1000}
          height={0}
          placeholder="blur"
          blurDataURL="/placeholder_book.png"
          className="max-w-24 cursor-pointer rounded-tl-lg rounded-bl-lg"
          onClick={handleClick}
        />
        <div className="flex flex-col ml-2 ">
          <h1
            className="text-lg overflow-y-hidden text-ellipsis font-bold cursor-pointer mt-1"
            onClick={handleClick}
          >
            {props.title}
          </h1>
          <h1 className="text-base font-medium text-orange-400">
            {props.author}
          </h1>
          <BookInteractionComponent
            className="mt-auto mb-1"
            bookId={props.id}
          ></BookInteractionComponent>
        </div>
      </div>
      {/* <BookStatsComponent className="rounded-b-lg p-1 pl-2"></BookStatsComponent> */}
    </div>
  );
};
