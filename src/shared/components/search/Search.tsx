import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import './search.css';
import { useEffect, useState } from "react";

type SearchProps = {
  placeholder: string
  handleSearchText: (text: string) => void
}

const Search = ({placeholder, handleSearchText}: SearchProps) => {
  const [text, setText] = useState('');

  useEffect(()=>{
    handleSearchText(text)
  }, [text])

  return (
    <div className="search-input">
      <CiSearch />
      <input 
        name='search'
        type='text'
        value={text}
        placeholder={placeholder}
        onChange={(e)=>setText(e.target.value)}
        />
      <span className="close">
        <IoIosClose />
      </span>
    </div>
  )
}

export default Search