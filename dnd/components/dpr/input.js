class Input extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            displayValue: this.props.value,
            value: this.props.value
        }

        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onChange(event) {
        let targetValue = event.target.value;
        if(targetValue === '') {
            this.setState({ displayValue: targetValue });
            return;
        }

        this.setState({ 
            displayValue: event.target.value,
            value: event.target.value
        })
        this.props.onChange(event.target.value)
    }

    onBlur() {
        this.setState(state => ({ displayValue: state.value }));
    }

    render() {
        return (
            <div className={this.props.col}>
               <input type="input" onChange={this.onChange} onBlur={this.onBlur} value={this.state.displayValue}></input>
            </div>
        );
    }
}

Input.defaultProps = {
    col: "col-1"
}