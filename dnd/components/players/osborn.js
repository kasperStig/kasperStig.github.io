class Osborn extends React.Component {
    render() {
        return (
            <Player name="Osborn">
                <Grouping name="Resources">
                    <TransitionResource name="Ammunition" transition="d12,d10,d8,d6,d4,1,0" current="d12"/> 
                    <ChargeResource name="Hit Die" charges={5} s onShortRest={(spend) => spend - 1 < 0 ? 0 : spend - 1} />
                    <ChargeResource name="Inspiration" charges={1} onLongRest={(c) => c} /> 
                </Grouping>
                <Grouping name="Spells">
                    <ChargeResource name="1st level" charges={4}  />
                    <ChargeResource name="2nd level" charges={2} />
                </Grouping>
                <Grouping name="Items">
                    <ChargeResource name="Lucian's Gift" charges={2} />
                    <ChargeResource name="Ring of Teleportation" charges={2} onShortRest={(_) => 0} />
                    <ChargeResource name="Cape of Hellish Resilience (Healing)" charges={1} onShortRest={(_) => 0} />
                </Grouping>
                <Grouping name="Consumeables">
                    <QuantityResource name="Serpent Venom" quantity="2"/>
                    <QuantityResource name="Healing Potion" quantity="1"/>
                    <QuantityResource name="Pinning Shot" quantity="1"/>
                </Grouping>
            </Player>
        )
    }
}