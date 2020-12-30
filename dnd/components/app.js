class App extends React.Component {
    render() {
        return (
            <div className="application">
                {this.props.children}
            </div>
          
        )
    }
}