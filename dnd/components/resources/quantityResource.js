class QuantityResource extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: this.props.quantity,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {    
        this.setState({
            quantity: event.target.value
        });  
    }
    render() {
        return (
            <Resource name={this.props.name} isEdit={this.props.isEdit}> 
                {!this.props.isEdit &&
                    <Quantity quantity={this.state.quantity} /> 
                } 
                {this.props.isEdit && 
                     <input className="transition-edit" type="text" value={this.state.quantity} onChange={this.handleChange}></input>
                }
            </Resource>
        )
    }
}