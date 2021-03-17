class TransitionResource extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transition: this.props.transition,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {    
        this.setState({
            transition: event.target.value
        });  
    }

    render() {
        return (
            <Resource name={this.props.name} isEdit={this.props.isEdit}> 
                {!this.props.isEdit &&
                    <Transition transition={this.state.transition} current={this.props.current} player={this.props.player} />
                } 
                {this.props.isEdit && 
                     <input className="transition-edit" type="text" value={this.state.transition} onChange={this.handleChange}></input>
                }
            </Resource>
        )
    }
}