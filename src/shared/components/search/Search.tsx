import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import './search.css';

type SearchProps = {
  placeholder: string
}

const Search = ({placeholder}: SearchProps) => {
  return (
    <div className="search-input">
      <CiSearch />
      <input 
        name='search'
        type='text'
        placeholder={placeholder}
        />
      <span className="close">
        <IoIosClose />
      </span>
    </div>
  )
}

export default Search