class Charge extends React.Component { 
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onClick(!this.props.expend);
    }
    
    render() {
        return (
            <div className="charge">
                <input type="checkbox" checked={this.props.expend} onChange={this.handleChange}></input>
            </div>
        )
    }
}