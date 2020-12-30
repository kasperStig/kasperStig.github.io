class TransitionResource extends React.Component {
    render() {
        return (
            <Resource name={this.props.name}> 
                <Transition transition={this.props.transition}/> 
            </Resource>
        )
    }
}