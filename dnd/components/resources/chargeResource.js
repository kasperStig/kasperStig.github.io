class ChargeResource extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            charges: parseInt(this.props.charges),
        }
        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
    }

    decrease() {
        this.setState({
            charges: this.state.charges - 1
        });
    }
    
    increase() {
        this.setState({
            charges: this.state.charges + 1
        });
    }

    render() {
        const chargesComponents = [];
        for (let index = 0; index < this.state.charges; index++) {
            chargesComponents.push(<Charge key={index} />);
        }
        return (
            <Resource name={this.props.name} isEdit={this.props.isEdit}> 
                {this.props.isEdit && this.state.charges > 1 &&
                    <div className="button" onClick={this.decrease}>-</div> 
                }
                {chargesComponents}
                {this.props.isEdit &&
                    <div className="button" onClick={this.increase}>+</div> 
                }
            </Resource>
        )
    }
}