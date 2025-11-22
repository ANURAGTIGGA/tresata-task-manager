
import './header.css';
import { IoArrowBackOutline } from "react-icons/io5";

type HeaderProp = {
    title: string;
    onBack: () => void;
    icon?: string | null;
}

const Header = ({title, onBack, icon}: HeaderProp) => {
  return (
    <header>
      {icon === 'back' && <span className='back-icon' onClick={onBack}><IoArrowBackOutline /></span>}
      <span>{title}</span>
    </header>
  )
}

export default Header