class QuantityResource extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: this.props.quantity,
        }
        this.handleChange = this.handleChange.bind(this);

        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
    }

    handleChange(event) {    
        this.setState({
            quantity: event.target.value
        });  
    }

    decrease() {
        if(this.state.quantity === 0) {
            return;
        }

        this.setState((state) => ({
            quantity: state.quantity - 1
        }));
    }

    increase() {
        this.setState((state) => ({
            quantity: state.quantity + 1
        }));
    }

    render() {
        return (
            <Resource name={this.props.name} isEdit={this.props.isEdit}> 
                {!this.props.isEdit &&
                    <div className="quantity">
                        <div className="button" onClick={this.decrease}>
                            <span className="material-icons">remove</span>
                        </div> 
                        <strong>{this.state.quantity}</strong>
                        <div className="button" onClick={this.increase}>
                            <span className="material-icons">add</span>
                        </div>
                    </div>
                } 
                {this.props.isEdit && 
                     <input className="transition-edit" type="text" value={this.state.quantity} onChange={this.handleChange}></input>
                }
            </Resource>
        )
    }
}