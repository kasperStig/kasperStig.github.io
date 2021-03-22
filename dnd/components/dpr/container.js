class Container extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            rows: [<DPR id={1} key={1} onDelete={this.deleteRow} />],
            keyCount: 1
        }

        this.addRow = this.addRow.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
    }

    addRow() {
        this.setState(state => ({
            rows: state.rows.concat([<DPR id={state.keyCount + 1} key={state.keyCount + 1} onDelete={this.deleteRow} />]),
            keyCount: state.keyCount + 1
        }));
    }

    deleteRow(id) {
        this.setState(state => ({
            rows: state.rows.filter(dpr => dpr.props.id !== id)
        }));
    }

    render(){

        return (
            <div className="col p-4 mt-4 dpr-wrapper">
                <div className="row header">
                    <div className="col-2">Label</div>
                    <div className="col-1">Target AC</div>
                    <div className="col-1">Hit mod</div>
                    <div className="col-1">Crit Range</div>
                    <div className="col-1">Dice dmg</div>
                    <div className="col-1">Dmg mod</div>
                    <div className="col-1">Advantage</div>
                    <div className="col-1">Disadvantage</div>
                    <div className="col-1">Hit chance</div>
                    <div className="col-1">Avg dpr</div>
                    <div className="col-1"></div>
                </div>
                {this.state.rows}
                <div className="row footer pt-3">
                    <div className="col-2">
                        <button type="button" className="btn btn-success" onClick={this.addRow}>Add row</button>
                    </div>
                </div>
                
            </div>
        );
    }
}