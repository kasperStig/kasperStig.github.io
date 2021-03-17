class Osborn extends React.Component {
    render() {
        return (
            <Player name="Osborn">
                <Grouping name="Resources">
                    <TransitionResource name="Ammunition" transition="d12,d10,d8,d6,d4,1,0" /> 
                    <ChargeResource name="Hit Die" charges={4} onShortRest={(spend) => spend - 1 < 0 ? 0 : spend - 1} />
                </Grouping>
                <Grouping name="Spells">
                    <ChargeResource name="1st level" charges={3} />
                </Grouping>
                <Grouping name="Items">
                    <ChargeResource name="Lucian's Gift" charges={1} />
                    <ChargeResource name="Ring of Teleportation" charges={2} onShortRest={(_) => 0} />
                    <ChargeResource name="Cape of Hellish Resilience (Healing)" charges={1} onShortRest={(_) => 0} />
                </Grouping>
                <Grouping name="Consumeables">
                    <QuantityResource name="Serpent Venom" quantity="2"/>
                    <QuantityResource name="Grave Dust" quantity="1"/>
                </Grouping>
            </Player>
        )
    }
}