import './Btn.css';

const Btn = (props) => {
    return (
        <button onClick={props.click} className={`form-btn back-${props.mode} ${props.dis}`} >{props.title}</button>
    );
}

export default Btn;