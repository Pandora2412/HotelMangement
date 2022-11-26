const MessageBox = (props) => (
    <div className = "MessageBox">
        <h4 style={{backgroundColor: 'white', padding: 0, margin: "auto", marginTop: 10, width: '80%'}}>{props.mess}</h4>
        <div style={{paddingTop: 30, paddingBottom: 20}}>
            <button className="messageButton" onClick={props.handleYes}>Có</button>
            <span> </span>
            <button className="messageButton" onClick={props.handleNo}>Không</button>
        </div>
    </div>
);

export default MessageBox; 