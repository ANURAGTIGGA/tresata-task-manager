import './header.css';

type HeaderProp = {
    title: string
}

const Header = ({title}: HeaderProp) => {
  return (
    <header>{title}</header>
  )
}

export default Header