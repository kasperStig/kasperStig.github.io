class Input extends React.Component { 
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.col}>
               <input type="input" onChange={(event) => {this.props.onChange(event.target.value)}} value={this.props.value}></input>
            </div>
        );
    }
}

Input.defaultProps = {
    col: "col-1"
}