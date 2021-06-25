class Zerath extends React.Component {
    render() {
        return (
            <Player name="Zerath">
                <Grouping name="Resources">
                    <TransitionResource name="Ammunition" transition="d12,d10,d8,d6,d4,1,0" current="d10"/> 
                    <ChargeResource name="Hit Die" charges={5} spend={2} onShortRest={(spend) => spend - 1 < 0 ? 0 : spend - 1} />
                    <ChargeResource name="Inspiration" charges={1} onLongRest={(c) => c} /> 
                </Grouping>
                <Grouping name="Racial abilities">
                    <ChargeResource name="Fey Teleportation" charges={1} spend={1} />
                </Grouping>
                <Grouping name="Class abilities">
                    <ChargeResource name="Bardic Inspiration" charges={4} spend={1} onShortRest={(_) => 0}/>
                </Grouping>
                <Grouping name="Spells">
                    <ChargeResource name="1st level" charges={4}  />
                    <ChargeResource name="2nd level" charges={3} />
                    <ChargeResource name="3rd level" charges={2} />
                </Grouping>
                <Grouping name="Items">
                    <ChargeResource name="Ring of Rebellion" charges={2} />
                    <ChargeResource name="Box of Beasts" charges={1} />
                    <ChargeResource name="Cape of Hellish Resilience (Healing)" charges={1} spend={1} onShortRest={(_) => 0} />     
                    <ChargeResource name="Vox Populi" charges={1} />
                    <TransitionResource name="Vox Populi Damage Type" transition="Piercing, Cold, Fire, Lightning, Acid, Necrotic" current="Piercing" /> 
                </Grouping>
                <Grouping name="Smithing">
                    <QuantityResource name="Pinning Shot" quantity="1"/>
                    <QuantityResource name="Perfectly Balanced" quantity="1"/>
                </Grouping>
            </Player>
        )
    }
}