class Osborn extends React.Component {
    render() {
        return (
            <Player name="Osborn">
                <Grouping name="Resources">
                    <TransitionResource name="Ammunition" transition="d12,d10,d8,d6,d4,1,0" /> 
                    <ChargeResource name="Hit Die" charges={4} onShortRest={(spend) => spend - 1 < 0 ? 0 : spend - 1} spend={2} />
                    <ChargeResource name="Inspiration" charges={1} onLongRest={(c) => c} /> 
                </Grouping>
                <Grouping name="Spells">
                    <ChargeResource name="1st level" charges={3} spend={2}/>
                </Grouping>
                <Grouping name="Items">
                    <ChargeResource name="Lucian's Gift" charges={2} spend={1} />
                    <ChargeResource name="Ring of Teleportation" charges={2} onShortRest={(_) => 0} />
                    <ChargeResource name="Cape of Hellish Resilience (Healing)" charges={1} onShortRest={(_) => 0} />
                </Grouping>
                <Grouping name="Smithing">
                    <QuantityResource name="Wounding Shot" quantity="1"/>
                </Grouping>
                <Grouping name="Consumeables">
                    <QuantityResource name="Serpent Venom" quantity="2"/>
                    <QuantityResource name="Grave Dust" quantity="1"/>
                    <QuantityResource name="Security Mega Drone Ray" quantity="1"/>
                </Grouping>
            </Player>
        )
    }
}