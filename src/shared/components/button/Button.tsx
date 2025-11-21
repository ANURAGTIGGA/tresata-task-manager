import './button.css'

type ButtonProps = {
    text: string;
    type: 'primary' | 'secondary';
    shape?: 'circle' | 'regular';
    handleClick: () => void;
}

const Button = ({text, type, shape='regular', handleClick}: ButtonProps) => {
    const styles = `btn btn-${type} btn-${shape}`

    return (
        <button
            className={styles}
            onClick={handleClick}
        >{text}
        </button>
    )
}

export default Button