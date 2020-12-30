class Player extends React.Component {
    render() {
        return (
            <div className={`player ${this.props.name}`}>
                <h1>{this.props.name}</h1>
                {this.props.children}
            </div> 
        )
    }
}