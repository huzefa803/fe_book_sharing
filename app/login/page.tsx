import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-cols-2 h-full">
      <div className="flex h-full flex-col justify-center px-6 py-12 lg:px-8 align-middle">
        <h1>Book Swap</h1>
        <p>Exchange books you have read with books you want to read</p>
        <p>Its Simple</p>
        <ol>
          <li>Add Books you have read and are willing to share</li>
          <li>Search for books you want to read</li>
          <li>We will show you a list of people who </li>
        </ol>
      </div>
    </div>
  );
}
