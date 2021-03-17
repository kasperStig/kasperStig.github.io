class ChargeResource extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            charges: this.props.charges,
            spend: this.props.spend,
        }

        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
        this.onLongRest = this.onLongRest.bind(this);
        this.chargeClicked = this.chargeClicked.bind(this);
        this.onShortRest = this.onShortRest.bind(this);
    }

    onShortRest() {
        this.setState(state => ({ spend: this.props.onShortRest(state.spend) }));
    }

    onLongRest() {
        this.setState(state => ({ spend: this.props.onLongRest(state.spend) }));
    }

    componentDidMount() {
        document.getElementById(this.props.player).addEventListener("longRest", this.onLongRest)
        document.getElementById(this.props.player).addEventListener("shortRest", this.onShortRest)
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
    charges: 1,
    onShortRest: (_) => _,
    onLongRest: (_) => 0
}