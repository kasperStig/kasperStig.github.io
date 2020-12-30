class Resource extends React.Component {
    render() {
        return (
            <div className="resource">
                <div className="base">{this.props.name}</div>
                <div className="divider">|</div>
                {this.props.children}
            </div>
        )
    }
}