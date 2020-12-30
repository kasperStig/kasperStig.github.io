class Grouping extends React.Component {
    render() {
        return (
            <div className="grouping">
                <h2>{this.props.name}</h2>
                {this.props.children}
            </div>
        )
    }
}