class Quantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {current: this.props.quantity}
        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
    }

    decrease() {
        if(this.state.current === 0) {
            return;
        }

        this.setState((state, props) => ({
            current: state.current - 1
          }));
    }

    increase() {
        this.setState((state, props) => ({
            current: state.current + 1
          }));
    }

    render() {
        return (
            <div className="quantity">
                <div className="button" onClick={this.decrease}>-</div> 
                <span>{this.state.current}</span>
                <div className="button" onClick={this.increase}>+</div>
            </div>
        )
    }
}