class Transition extends React.Component {
    constructor(props) {
        super(props);
        this.transitions = this.props.transition.split(',');
        this.state = {
            current: this.transitions[0]
        }
        this.left = this.left.bind(this);
        this.right = this.right.bind(this);
    }

    right() {
        if(this.transitions.indexOf(this.state.current) === this.transitions.length - 1) {
            return;
        }

        this.setState({
            current: this.transitions[this.transitions.indexOf(this.state.current) + 1]
        });
    }

    left() {
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
                <div className="button" onClick={this.left}>
                    <span className="material-icons">chevron_left</span>
                </div> 
                <strong>{this.state.current}</strong>
                <div className="button" onClick={this.right}>
                    <span className="material-icons">chevron_right</span>
                </div>
            </div>
        )
    }
}