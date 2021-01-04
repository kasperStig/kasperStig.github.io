class QuantityResource extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Resource name={this.props.name} isEdit={this.props.isEdit}> 
                <Quantity quantity={this.props.quantity} /> 
            </Resource>
        )
    }
}