class Transition extends React.Component {
    constructor(props) {
        super(props);
        this.transitions = this.props.transition.split(',');
        this.state = {current: this.transitions[0]}
        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
    }

    decrease() {
        if(this.transitions.indexOf(this.state.current) === this.transitions.length - 1) {
            return;
        }

        this.setState({
            current: this.transitions[this.transitions.indexOf(this.state.current) + 1]
        });
    }

    increase() {
        let transitionIndex = this.transitions.indexOf(this.state.current) - 1;

        if(transitionIndex < 0) {
            return;
        }

        this.setState({
            current: this.transitions[transitionIndex]
        });
    }

    render() {
        return (
            <div className="transition">
                <div className="button" onClick={this.decrease}>-</div> 
                <span>{this.state.current}</span>
                <div className="button" onClick={this.increase}>+</div>
            </div>
        )
    }
}