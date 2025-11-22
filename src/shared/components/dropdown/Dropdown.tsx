import { useState } from 'react'
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import './dropdown.css'
import type { Status } from '../../../features/components/todo-list/TodoList';
import { statusMap } from '../status/Status'

type DropdownProps = {
    options: Record<string, string>
    value: string
    setValue: (status: string) => void
}

const Dropdown = ({options, value, setValue}: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(value || null);

    const list = Object.keys(options);

    function handleSelect(item: string) {
        setSelected(item);
        setIsOpen(false);
        setValue(item);
    }

    return (
        <>
            <button className='selected-option' onClick={()=>setIsOpen(!isOpen)}>
                <div className='selected-option-value'>
                    <span 
                        className='status-type'
                        style={{backgroundColor: statusMap[selected as Status]}}
                    ></span>
                    <span className='status-text'>{selected ? options[selected] : 'Select an option'}</span>
                </div>
                <span>
                    {
                        isOpen ? <FaChevronUp /> : <FaChevronDown />
                    }
                </span>
            </button>
            <div>
            {
                isOpen ? <ul className='dropdown-list'>
                    {
                        list.map(item => (
                            <li key={item} onClick={()=>handleSelect(item)}>
                                <span 
                                    className='status-type'
                                    style={{backgroundColor: statusMap[item as Status]}}
                                ></span>
                                <span className='status-text'>{options[item]}</span>
                            </li>
                        ))
                    }
                </ul> : null
            }
            </div>
        </>
    )
}

export default Dropdown