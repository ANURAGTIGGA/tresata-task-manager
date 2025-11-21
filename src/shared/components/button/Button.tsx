import './button.css'

type ButtonProps = {
    text: string;
    type: 'primary' | 'secondary';
    shape?: 'circle' | 'regular';
    handleClick: () => void;
}

const Button = ({text, type, shape, handleClick}: ButtonProps) => {
    const styles = `btn btn-${type} btn-${shape}`

    return (
        <div>
            <button
                className={styles}
                onClick={handleClick}
            >{text}</button>
        </div>
    )
}

export default Button