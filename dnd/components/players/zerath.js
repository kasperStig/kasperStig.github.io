class Zerath extends React.Component {
    render() {
        return (
            <Player name="Zerath">
                <Grouping name="Resources">
                    <TransitionResource name="Ammunition" transition="d12,d10,d8,d6,d4,1,0" /> 
                    <ChargeResource name="Hit Die" charges="3" spend="1" />
                </Grouping>
                <Grouping name="Class abilities">
                    <ChargeResource name="Bardic Inspiration" charges="3" spend="3" />
                    <ChargeResource name="Fey Teleportation" charges="1" spend="1" />
                </Grouping>
                <Grouping name="Spells">
                    <ChargeResource name="1st level" charges="4" spend="2" />
                    <ChargeResource name="2nd level" charges="2" spend="2" />
                </Grouping>
                <Grouping name="Items">
                    <ChargeResource name="Ring of Rebellion" charges="1"/>
                    <ChargeResource name="Vox Populi" charges="1" spend="1"/>
                    <TransitionResource name="Vox Populi Damage Type" transition="Piercing, Cold, Fire, Lightning, Acid, Necrotic"/> 
                </Grouping>
                <Grouping name="Consumeables">
                    <QuantityResource name="Potion of Healing" quantity="1"/>
                    <QuantityResource name="Dragon's Breath Pepper" quantity="1"/>
                    <QuantityResource name="Serpent Venom" quantity="1"/>
                </Grouping>
            </Player>
        )
    }
}