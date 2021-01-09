class Monsters extends React.Component {
    constructor(props) {
        super(props);

        var children = [];
        if(typeof(this.props.children) !== 'undefined') {
            children = children.concat(this.props.children);
        }
        
        this.state = {
            childComponents: children,
            isEdit: false,
            keyCount: 0,
            collapsed: this.props.collapsed === "true"
        }

        this.edit = this.edit.bind(this);
        this.toggleCollapsed = this.toggleCollapsed.bind(this);
        this.addGrouping = this.addGrouping.bind(this);
        this.addGrouping = this.addGrouping.bind(this);
    }

    toggleCollapsed() {
        this.setState((state, props) => ({
            collapsed: !state.collapsed  }));
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
        let groupings = this.state.childComponents.map(child => React.cloneElement(child, { isEdit: this.state.isEdit, key: child.name }));

        return (
            <div className={`player ${this.props.name} ${this.state.collapsed ? "collapsed" : ""}`}>
               <div onClick={this.toggleCollapsed} className="fold">{this.props.name}</div> 
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
            </div> 
        )
    }
}