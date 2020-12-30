class ChargeResource extends React.Component {
    render() {
        const chargesComponents = [];
        let charges = parseInt(this.props.charges);
        for (let index = 0; index < charges; index++) {
            chargesComponents.push(<Charge />);
        }
        return (
            <Resource name={this.props.name}> 
                {chargesComponents} 
            </Resource>
        )
    }
}