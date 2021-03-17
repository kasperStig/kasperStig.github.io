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
            isDeleted: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.addCharge = this.addCharge.bind(this);
        this.addQuantity = this.addQuantity.bind(this);
        this.addTransition = this.addTransition.bind(this);
        this.delete = this.delete.bind(this);
        this.dragEnter = this.dragEnter.bind(this);
        this.allowDrop = this.allowDrop.bind(this);
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

    drag(event) {
        event.dataTransfer.setData("text", event.target.id);
    }

    drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("text");
        var draggedNode = document.getElementById(data);
        draggedNode.classList.add('dragged');
    
       
        var grouping = event.target.closest('.grouping');
        grouping.classList.remove('draggedTo');
        grouping.parentNode.insertBefore(draggedNode, grouping.nextSibling);
    }

    allowDrop(event) {
        event.preventDefault();
    }

    dragEnter(event) {
        var player = event.currentTarget.closest('.player');
        for (var i = 0; i < player.childNodes.length; i++) {
            if (player.childNodes[i].classList.contains("grouping") && player.childNodes[i].id !== event.currentTarget.id) {
                player.childNodes[i].classList.remove('draggedTo');
            }        
        }   
        
        event.currentTarget.classList.add('draggedTo');;
    }

    render() {
        if(this.state.isDeleted) {
            return null;
        }

        let resources = this.state.childComponents.map(child => React.cloneElement(child, { player: this.props.player, isEdit: this.props.isEdit, key: child.props.name }));

        return (
            <div id={this.props.id} className="grouping" onDrop={this.drop} onDragOver={this.allowDrop} onDragEnter={this.dragEnter} onDragStart={this.drag} draggable={this.props.isEdit ? "true" : "false"}>
                 {this.props.isEdit &&  
                    <h2>  
                        <div className="grab">
                            <span className="material-icons">drag_indicator</span>
                        </div>             
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