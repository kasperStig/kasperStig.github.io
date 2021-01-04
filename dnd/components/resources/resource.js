class Resource extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.name,
            isDeleted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.delete = this.delete.bind(this);
    }

    handleChange(event) {    
        this.setState({value: event.target.value});  
    }
    delete(event) {
        if (confirm('Are you sure you want to delete this resource?')) {
            this.setState({isDeleted: true}); 
        } 
    }

    render() {
        if(this.state.isDeleted) {
            return null;
        }
        return (
            <div className="resource">
                <div className="base">
                    {this.props.isEdit &&  
                        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                    }
                    {!this.props.isEdit &&  
                        this.state.value
                    }       
                </div>
                <div className="divider">|</div>
                {this.props.children}
                {this.props.isEdit &&
                    <div onClick={this.delete} className="delete">
                        <span className="material-icons">delete_outline</span>
                    </div>
                }
            </div>
        )
    }
}