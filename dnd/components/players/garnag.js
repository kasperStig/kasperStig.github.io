class Garnag extends React.Component {
    render() {
        return (
            <Player name="Garnag">
                <Grouping name="Resources">
                    <TransitionResource name="Ammunition" transition="d12,d10,d8,d6,d4,1,0"/> 
                    <ChargeResource name="Hit Die" charges="3" />
                    <ChargeResource name="Maneuvers" charges="4" />
                    <ChargeResource name="Second Wind" charges="1" />
                    <ChargeResource name="Action Surge" charges="1" />
                    <ChargeResource name="Relentless Endurance" charges="1" />
                </Grouping>
                <Grouping name="Items">
                    <ChargeResource name="Yohn's Sword of Retribution" charges="3"/>
                </Grouping>
                <Grouping name="Consumeables">
                    <QuantityResource name="Potion of Healing" quantity="2"/>
                    <QuantityResource name="Dragon's Breath Pepper" quantity="1"/>
                    <QuantityResource name="Grave Dust" quantity="1"/>
                </Grouping>
                <Grouping name="Death Saves">
                    <ChargeResource name="Successes" charges="3"/>
                    <ChargeResource name="Failures" charges="3"/>
                </Grouping>
            </Player>
        )
    }
}