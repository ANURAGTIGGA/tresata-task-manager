
import './header.css';
import { IoArrowBackOutline } from "react-icons/io5";

type HeaderProp = {
    title: string;
    icon?: string | null;
}

const Header = ({title, icon}: HeaderProp) => {
  return (
    <header>
      {icon === 'back' && <IoArrowBackOutline />}
      <span>{title}</span>
    </header>
  )
}

export default Header