class Rest extends React.Component { 
    constructor(props) {
        super(props);

        this.triggerShortRest = this.triggerShortRest.bind(this);
        this.triggerLongRest = this.triggerLongRest.bind(this);
    }

    triggerShortRest() {
        document.getElementById(this.props.player).dispatchEvent(new Event('shortRest'))
    }

    triggerLongRest() {
        document.getElementById(this.props.player).dispatchEvent(new Event('longRest'))
    }

    render() {
        return (
            <div className="rest">
                <div onClick={this.triggerShortRest}>Take short rest</div>
                <div onClick={this.triggerLongRest}>Take long rest</div>
            </div>
        );
    }
}