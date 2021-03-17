class ChargeResource extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            charges: this.props.charges,
            spend: this.props.spend,
        }

        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
        this.recharge = this.recharge.bind(this);
        this.chargeClicked = this.chargeClicked.bind(this);
    }

    recharge() {
        this.setState({ spend: 0 });
    }

    componentDidMount() {
        document.getElementById(this.props.player).addEventListener(this.props.rechargeEvent, this.recharge)
        document.getElementById(this.props.player).addEventListener("longRest", this.recharge)
    }

    chargeClicked(wasChecked) {
        let spendDelta = wasChecked ? 1 : -1;
        this.setState(state => ({ spend: state.spend + spendDelta }));
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
            chargesComponents.push(<Charge key={index} onClick={this.chargeClicked} expend={index < this.state.spend} />);
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

ChargeResource.defaultProps = {
    spend: 0,
    charges: 1
}