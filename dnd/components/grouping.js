class Grouping extends React.Component {
    constructor(props) {
        super(props);

        let initialComponents = [];
        if(typeof(this.props.children) !== 'undefined') {
            initialComponents = initialComponents.concat(this.props.children);
        }

        this.state = {
            heading: this.props.name,
            childComponents: initialComponents,
            keyCount: 0,
            isDeleted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.addCharge = this.addCharge.bind(this);
        this.addQuantity = this.addQuantity.bind(this);
        this.addTransition = this.addTransition.bind(this);
        this.delete = this.delete.bind(this);
    }

    delete(event) {
        if (confirm('Are you sure you want to delete this resource?')) {
            this.setState({isDeleted: true}); 
        } 
    }

    handleChange(event) {    
        this.setState({
            heading: event.target.value
        });  
    }

    addCharge() {
        this.setState((state, props) => ({
            keyCount: state.keyCount + 1,
            childComponents: state.childComponents.concat(<ChargeResource key={state.keyCount} name="New charge resource" charges="1"/>),
          }));
    }

    addTransition() {
        this.setState((state, props) => ({
            keyCount: state.keyCount + 1,
            childComponents: state.childComponents.concat(<TransitionResource key={state.keyCount} name="New transition resource" transition="0"/>),
          }));
    }

    addQuantity() {
        this.setState((state, props) => ({
            keyCount: state.keyCount + 1,
            childComponents: state.childComponents.concat(<QuantityResource key={state.keyCount} name="New quantity resource" quantity="0"/>),
          }));
    }


    render() {
        if(this.state.isDeleted) {
            return null;
        }

        let resources = this.state.childComponents.map(child => React.cloneElement(child, { isEdit: this.props.isEdit, key: child.name }));

        return (
            <div className="grouping">
                 {this.props.isEdit &&  
                    <h2>                    
                        <input type="text" value={this.state.heading} onChange={this.handleChange}></input>
                        <div onClick={this.delete} className="delete">
                            <span className="material-icons">delete_outline</span>
                        </div>
                    </h2>
                }
                {!this.props.isEdit &&  
                    <h2>                    
                        {this.state.heading}
                    </h2>
                }
                {resources}
                {this.props.isEdit && 
                    <div className="group-edit">
                        <div className="" onClick={this.addCharge}>Add charge</div> 
                        <div className="" onClick={this.addQuantity}>Add quantity</div> 
                        <div className="" onClick={this.addTransition}>Add transition</div> 
                    </div>
                }
            </div>
        )
    }
}