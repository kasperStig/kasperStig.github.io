class DPR extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            TargetAC: 0,
            HitModifier: 0,
            CritChance: 0.05,
            CritRange: "20",
            AverageDiceDamagePerHit: 0, 
            DicePerHit: 0, 
            DamageBonusPerHit: 0,
            HitChance: 0,
            label: "",
            Advantage: 0
        };

        this.handleACChange = this.handleACChange.bind(this);
        this.handleHitModChange = this.handleHitModChange.bind(this);
        this.handleCritChanceChange = this.handleCritChanceChange.bind(this);
        this.handleDamageDiceChange = this.handleDamageDiceChange.bind(this);
        this.handleDamageBonusChange = this.handleDamageBonusChange.bind(this);
        this.handleLabelChange = this.handleLabelChange.bind(this);
        this.delete = this.delete.bind(this);
        this.onAdvantageChange = this.onAdvantageChange.bind(this);
        this.getHitChance = this.getHitChance.bind(this);
        this.getCritChance = this.getCritChance.bind(this);
    }

    handleLabelChange(newLabel) {
        this.setState({ label: newLabel });
    }

    handleACChange(newAC) {
        this.setState(state => ({ 
            TargetAC: parseInt(newAC),
            HitChance: this.getHitChance(parseInt(newAC), state.HitModifier, state.Advantage)
        }));  
    }

    handleHitModChange(newHitMod) {
        this.setState(state => ({ 
            HitModifier: parseInt(newHitMod),
            HitChance: this.getHitChance(state.TargetAC, parseInt(newHitMod), state.Advantage)
        }));  
    }

    handleCritChanceChange(value) {
        this.setState(state => ({ 
            CritRange: value, 
            CritChance: this.getCritChance(value, state.Advantage) 
        }));  
    }

    getCritChance(critRange, adv) {
        let critChance = 0.05;
        
        if(critRange.includes('-')) {
            const parts = critRange.split('-');
            if(parts.length === 2) {
                var from = parseInt(parts[0]);
                var to = parseInt(parts[1]);
    
                for(let i = from; i < to; i++) {
                    critChance += 0.05;
                }
            }
        }

        switch(parseInt(adv)) {
            case -1:
                return Math.pow(critChance, 2);
            case 1: 
                return 1 - Math.pow((1 - critChance), 2);
        }
          
        return critChance;
    }

    getAvererageDiceDamage(dice) {
        const parts = dice.split('d');
        if(parts.length !== 2) {
            return 0;
        }
        const multiplier = parseInt(parts[0].trim());
        const diceSize = parseInt(parts[1].trim());

        let avg = 0;
        for(let i = 1; i <= diceSize; i++) {
            avg += i;
        }
        let averageDamage = multiplier * (avg/diceSize);
        return averageDamage;
    }

    handleDamageDiceChange(value) {

        let averageDamage = 0;
        let parts = value.split('+');
        for (let index = 0; index < parts.length; index++) {
            averageDamage += this.getAvererageDiceDamage(parts[index]); 
        }
       
        this.setState({ 
            DicePerHit: value,
            AverageDiceDamagePerHit: averageDamage 
        });  
    }

    handleDamageBonusChange(value) {
        this.setState({ DamageBonusPerHit: parseInt(value) });  
    }

    getHitChance(targetAc, hitMod, adv) {
        let hitChance = 0;
        switch(adv) {
            case -1:
                hitChance = Math.pow(((21 - targetAc + hitMod)/20), 2);
                break;
            case 0: 
                hitChance = 1 - ((targetAc - hitMod - 1)/20);
                break;
            case 1: 
                hitChance = 1 - Math.pow(((targetAc - hitMod - 1)/20), 2); 
            break;
        }

        return Math.min(0.95, Math.max(0.05, hitChance));
    }

    onAdvantageChange(adv) {
        this.setState(state => ({ 
            HitChance: this.getHitChance(state.TargetAC, state.HitModifier, parseInt(adv)),
            CritChance: this.getCritChance(state.CritRange, adv),
            Advantage: parseInt(adv)
        }));  
    }

    delete() {
        this.props.onDelete(this.props.id);
    }
    
    render() {
        return (
            <div className="row py-2">
                <Input col="col-2" value={this.state.label} onChange={this.handleLabelChange} /> 
                <Input value={this.state.TargetAC} onChange={this.handleACChange} /> 
                <Input value={this.state.HitModifier} onChange={this.handleHitModChange} />
                <Input value={this.state.CritRange} onChange={this.handleCritChanceChange} />
                <Input value={this.state.DicePerHit} onChange={this.handleDamageDiceChange} />
                <Input value={this.state.DamageBonusPerHit} onChange={this.handleDamageBonusChange} />
                <Advantage onChange={this.onAdvantageChange} />
                <Display value={(this.state.HitChance * 100).toFixed(0) + '%' || 0} />
                <Display value={(this.state.CritChance * this.state.AverageDiceDamagePerHit + this.state.HitChance * (this.state.AverageDiceDamagePerHit + this.state.DamageBonusPerHit)).toFixed(2)} />
                {this.props.id > 1 && <div className="col">
                    <button onClick={this.delete}>Delete</button>
                </div>
                }
                {this.props.id <= 1 && <div className="col"></div>}
            </div>
        )
    }
}