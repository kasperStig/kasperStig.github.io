class App extends React.Component {
    render() {
        return (
            <div className="container application">
                {this.props.children}
            </div>
          
        )
    }
}