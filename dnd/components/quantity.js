class Quantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: parseInt(this.props.quantity)
        }
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
                <div className="button" onClick={this.decrease}>
                    <span className="material-icons">remove</span>
                </div> 
                <strong>{this.state.current}</strong>
                <div className="button" onClick={this.increase}>
                    <span className="material-icons">add</span>
                </div>
            </div>
        )
    }
}