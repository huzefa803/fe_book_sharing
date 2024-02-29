'use client'

import { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'


export const SearchComponent = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchEnter = (e: any) => {
    if (e.key === 'Enter') {
      handleSearch(e)
    }
  }

  const handleSearch = (e: any) => {
    console.log(searchTerm)
    router.push(`/search?q=${searchTerm}`)
  }


  return (
    <div className="flex border-2 border-gray-600 h-10 rounded-lg p-2 focus-within:border-blue-400 ">
      <input
        className="outline-none grow bg-gray-200"
        placeholder="title, isbn"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearchEnter}
      />
      <button className="items-center" onClick={handleSearch}>
        <Image src="/search.svg" alt="search" width={20} height={20}/>
      </button>
    </div>
  );
};
