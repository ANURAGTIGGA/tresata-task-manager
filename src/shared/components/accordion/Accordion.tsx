import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import './accordion.css'
import type { ReactNode } from "react";

type AccordionProp = {
    name: string;
    size: number;
    isOpen: boolean;
    handleAccordionClick: () => void;
    children: ReactNode;
}

const Accordion = ({name, size, isOpen, handleAccordionClick, children}: AccordionProp) => {
    const title = name.split('-').join(' ');

    return (
        <>
            <button 
                className="status-container-header"
                onClick={handleAccordionClick}>
                <div>
                    <span className="accordion-title">{title}</span>
                    <span>(</span>
                    <span className="list-size">{size}</span>
                    <span>)</span>
                </div>
                {
                    isOpen ? <FaChevronUp /> : <FaChevronDown />
                }
            </button>
            {
                isOpen ? children : null
            }
        </>
    )
}

export default Accordion