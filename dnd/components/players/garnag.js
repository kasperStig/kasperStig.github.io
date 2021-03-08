class Garnag extends React.Component {
    render() {
        return (
            <Player name="Garnag">
                <Grouping name="Resources">
                    <TransitionResource name="Ammunition" transition="d12,d10,d8,d6,d4,1,0" /> 
                    <ChargeResource name="Hit Die" charges="4" />
                    <QuantityResource name="Gold" quantity="187" />
                </Grouping>
                <Grouping name="Racial abilities">
                    <ChargeResource name="Relentless Endurance" charges="1"  />
                </Grouping>
                <Grouping name="Class abilities">
                    <ChargeResource name="Maneuvers" charges="4"  />
                    <ChargeResource name="Second Wind" charges="1" />
                    <ChargeResource name="Action Surge" charges="1" />
                </Grouping>
                <Grouping name="Items">
                    <ChargeResource name="Yohn's Sword of Retribution" charges="4" />
                    <ChargeResource name="Cape of Hellish Resilience (Healing)" charges="1"/>
                    <ChargeResource name="Cape of Hellish Resilience (Glare)" charges="1"/>
                    <ChargeResource name="A Very Nice Hat" charges="1" />
                </Grouping>
                <Grouping name="Consumeables">
                    <QuantityResource name="Healing Potion" quantity="1"/>
                </Grouping>
            </Player>
        )
    }
}