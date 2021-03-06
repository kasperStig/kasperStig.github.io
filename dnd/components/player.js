class Player extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            childComponents: [].concat(this.props.children),
            isEdit: false,
            keyCount: this.props.children.length
        }

        this.edit = this.edit.bind(this);
        this.addGrouping = this.addGrouping.bind(this);
        this.addGrouping = this.addGrouping.bind(this);
    }


    edit() {
        this.setState((state, props) => ({
            isEdit: !state.isEdit  }));
    }

    addGrouping() {
        this.setState((state, props) => ({
            keyCount: state.keyCount + 1,
            childComponents: state.childComponents.concat(<Grouping key={state.keyCount} name="New grouping"/>),
          }));
    }


    render() {
        let groupings = this.state.childComponents.map(child => React.cloneElement(child, { player: this.props.name, isEdit: this.state.isEdit, key: child.props.name, id: this.props.name + child.props.name }));

        return (
            <div id={this.props.name} className={`player ${this.props.name}`} >
                <h1>{this.props.name}
                {this.state.isEdit &&  
                    <div onClick={this.edit} className="done">
                        <span className="material-icons">done</span>
                    </div> 
                }
                {!this.state.isEdit &&  
                    <div className="edit">
                        <span onClick={this.edit} className="material-icons">edit</span>
                    </div>
                }</h1>
                {groupings}
                {this.state.isEdit && 
                    <div className="player-edit">
                        <div className="" onClick={this.addGrouping}>Add grouping</div> 
                    </div>
                }
                {!this.state.isEdit && <Rest key="rest" player={this.props.name} />}
            </div> 
        )
    }
}