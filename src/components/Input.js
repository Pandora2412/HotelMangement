import '../css/Input.css'

export const Normal = (props) => (
    <div className = "form__input">
        <input type = {props.type} placeholder = {props.placeholder} onFocus = {props.onfocus}></input>
        <label>{props.label}</label>
    </div>
);

export const Select = (props) => {
    console.log(props.children);
    return (
    <div className = "form__input">
        <select placeholder = {props.placeholder}>{props.children}</select>
        <label>{props.label}</label>
    </div>
);
}

export const Date = (props) => (
    <div className = "form__input">
        <input type = {props.type} placeholder = {props.placeholder} onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")}></input>
        <label>{props.label}</label>
    </div>
);

const Input = (props) => (
    <div>
        
    </div>
)

Input.Normal = Normal;
Input.Select = Select;
Input.Date = Date;



export default Input;