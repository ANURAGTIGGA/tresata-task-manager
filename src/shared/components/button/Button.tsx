import './button.css'

type ButtonProps = {
    text: string;
    type: 'primary' | 'secondary';
    shape?: 'circle' | 'regular';
}

const Button = ({text, type, shape}: ButtonProps) => {
    // let style = {
    //     'background-color':  '#034EA2',
    //     'color': '#FFFFFF'
    // };

    // if(type === 'secondary') {
    //     style['background-color']= '#FFFFFF';
    //     style['color']= '#034EA2';
    // }

    const styles = `btn btn-${type} btn-${shape}`

    return (
        <div>
            <button
                className={styles}
                //className={shape === 'circle' ? 'btn btn-circle' : 'btn'}
                // style={style}
            >{text}</button>
        </div>
    )
}

export default Button