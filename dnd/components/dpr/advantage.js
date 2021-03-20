class Advantage extends React.Component { 
    constructor(props) {
        super(props);

        this.state = { 
            value: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <div value={this.state.value} className={this.props.col} onChange={this.handleChange}>
               <select>
                    <option value={0}>None</option>
                    <option value={1}>Advantage</option>
                    <option value={-1}>Disadvantage</option>
               </select>
            </div>
        );
    }
}

Advantage.defaultProps = {
    col: "col-2"
}