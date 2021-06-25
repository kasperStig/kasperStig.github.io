class Garnag extends React.Component {
    render() {
        return (
            <Player name="Garnag">
                <Grouping name="Resources">
                    <TransitionResource name="Ammunition" transition="d12,d10,d8,d6,d4,1,0" /> 
                    <ChargeResource name="Hit Die" charges={5} spend={2} onShortRest={(spend) => spend - 1 < 0 ? 0 : spend - 1} />
                    <ChargeResource name="Inspiration" charges={1} onLongRest={(c) => c} /> 
                    <QuantityResource name="Gold" quantity={92} />
                </Grouping>
                <Grouping name="Racial abilities">
                    <ChargeResource name="Relentless Endurance" charges={1}  />
                </Grouping>
                <Grouping name="Class abilities">
                    <ChargeResource name="Maneuvers" charges={4} onShortRest={(_) => 0} />
                    <ChargeResource name="Second Wind" charges={1} onShortRest={(_) => 0} />
                    <ChargeResource name="Action Surge" charges={1} spend={1} onShortRest={(_) => 0} />
                </Grouping>
                <Grouping name="Items">
                    <ChargeResource name="Yohn's Sword of Retribution" charges={4} />
                    <ChargeResource name="Cape of Hellish Resilience (Healing)" charges={1} onShortRest={(_) => 0} />
                    <ChargeResource name="Cape of Hellish Resilience (Glare)" spend={1} charges={1} />
                    <ChargeResource name="A Very Nice Hat" charges={1} />
                    <ChargeResource name="Ring of Spell Storing" charges={3} spend={3} onLongRest={(c) => c} /> 
                </Grouping>
            </Player>
        )
    }
}