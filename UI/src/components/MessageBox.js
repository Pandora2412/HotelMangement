const MessageBox = (props) => (
    <div className = "MessageBox">
        <h4 style={{backgroundColor: 'white', padding: 0, margin: "auto", marginTop: 10, width: '80%'}}>{props.mess}</h4>
        <div style={{paddingTop: 30, paddingBottom: 20}}>
            <button className="messageButton" onClick={props.handleYes}>Có</button>
            <span> </span>
            <button className="messageButton" onClick={props.handleNo}>Không</button>
            {props.warning !== "" && <p style={{color: 'red', marginTop: 10, fontWeight: 600}}>{props.warning}</p>}
        </div>
    </div>
);

const InformBox = (props) => (
    <div className = "MessageBox">
        <h4 style={{backgroundColor: 'white', padding: 0, margin: "auto", marginTop: 10, width: '80%'}}>{props.mess}</h4>
        <div style={{paddingTop: 30, paddingBottom: 20}}>
            <button className="messageButton" onClick={props.handleYes}>OK</button>
        </div>
    </div>
);

export {MessageBox, InformBox}; 