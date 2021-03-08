class Zerath extends React.Component {
    render() {
        return (
            <Player name="Zerath">
                <Grouping name="Resources">
                    <TransitionResource name="Ammunition" transition="d12,d10,d8,d6,d4,1,0" /> 
                    <ChargeResource name="Hit Die" charges="4"  />
                </Grouping>
                <Grouping name="Class abilities">
                    <ChargeResource name="Bardic Inspiration" charges="4" />
                    <ChargeResource name="Fey Teleportation" charges="1" />
                </Grouping>
                <Grouping name="Spells">
                    <ChargeResource name="1st level" charges="4"  />
                    <ChargeResource name="2nd level" charges="3"  />
                </Grouping>
                <Grouping name="Items">
                    <ChargeResource name="Ring of Rebellion" charges="2"/>
                    <ChargeResource name="Box of Beasts" charges="1" />
                    <ChargeResource name="Cape of Hellish Resilience (Healing)" charges="1"/>     
                    <ChargeResource name="Vox Populi" charges="1" />
                    <TransitionResource name="Vox Populi Damage Type" transition="Piercing, Cold, Fire, Lightning, Acid, Necrotic"/> 
                </Grouping>
                <Grouping name="Consumeables">
                    <QuantityResource name="Dragon's Breath Pepper" quantity="1"/>
                    <QuantityResource name="Serpent Venom" quantity="1"/>
                </Grouping>
            </Player>
        )
    }
}