class QuantityResource extends React.Component {
    render() {
        return (
            <Resource name={this.props.name}> 
                <Quantity quantity={this.props.quantity}/> 
            </Resource>
        )
    }
}