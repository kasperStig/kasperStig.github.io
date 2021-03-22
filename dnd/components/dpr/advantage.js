class Advantage extends React.Component { 
    constructor(props) {
        super(props);

        this.state = { 
            value: "0"
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState(state => ({value: state.value === event.target.value ? "0" : event.target.value}), () => {this.props.onChange(this.state.value)});
    }


    render() {
        return (
            <div className={this.props.col} >
                <div className="row">
                    <div className="col-6 text-center">
                        <label>
                            <input type="radio" value="1" checked={this.state.value === "1"} onChange={() => {}} onClick={this.handleClick} />
                        </label>
                    </div>
                    <div className="col-6 text-center">
                        <label>
                            <input type="radio" value="-1" checked={this.state.value === "-1"} onChange={() => {}} onClick={this.handleClick} />
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

Advantage.defaultProps = {
    col: "col-2"
}