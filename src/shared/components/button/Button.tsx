import './button.css'

type ButtonProps = {
    text: string;
    type: 'primary' | 'secondary';
    shape?: 'circle' | 'regular';
    handleClick: () => void;
    disabled?: boolean;
}

const Button = ({text, type, shape='regular', handleClick, disabled}: ButtonProps) => {
    const styles = `btn btn-${type} btn-${shape}`

    return (
        <button
            className={disabled ? styles.concat(' disabled') : styles}
            onClick={handleClick}
            disabled={disabled || false}
        >{text}
        </button>
    )
}

export default Button