import '../../css/Input.css'

export const Normal = (props) => (
    <div className = "form__input">
        <input {...props}></input>
        <label>{props.label}</label>
    </div>
);

export const Select = (props) => {
    return (
    <div className = "form__input">
        <select {...props}>{props.children}</select>
        <label>{props.label}</label>
    </div>
);
}

export const Date = (props) => (
    <div className = "form__input">
        <input {...props} onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")}></input>
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