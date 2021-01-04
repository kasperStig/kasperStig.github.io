class Charge extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState((state, props) => ({
            checked: !state.checked  })
        );
    }
    render() {
        return (
            <div className="charge">
                <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}></input>
            </div>
        )
    }
}