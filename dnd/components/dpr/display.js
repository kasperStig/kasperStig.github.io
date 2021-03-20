class Display extends React.Component { 
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-1">
               <input type="input" disabled value={this.props.value}></input>
            </div>
        );
    }
}