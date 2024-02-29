"use client";

import Image from "next/image";

export const BookInteractionComponent = ({
  bookId,
  className,
  showText,
}: any) => {
  const offerBook = () => {
    console.log("offer book");
  };

  const addToWishlist = () => {
    console.log("Add to wishlist");
  };

  return (
    <div className={`mt-5 flex flex-row ${className}`}>
      <button className="button-primary mr-3 flex flex-row items-center" onClick={offerBook}>
        {showText && <p className="mr-1">Offer</p>}
        <Image
          src="/share.svg"
          width={10}
          height={0}
          alt="share"
          className="w-6"
        />
      </button>

      <button className="button-primary flex flex-row items-center" onClick={addToWishlist}>
        {showText && <p className="mr-1">Wishlist</p>}
        <Image
          src="/heart.svg"
          width={10}
          height={0}
          alt="Wishlist"
          className="w-6"
        />
      </button>
    </div>
  );
};

interface BookInteractionComponentProps {
  bookId: string;
  className: string;
  showText: boolean;
}
