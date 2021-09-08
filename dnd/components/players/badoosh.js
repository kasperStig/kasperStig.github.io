class Badoosh extends React.Component {
    render() {
        return (
            <Player name="Badoosh">
                <Grouping name="Resources">
                    <ChargeResource name="Hit Die" charges={5} onShortRest={(spend) => spend - 1 < 0 ? 0 : spend - 1} />
                    <ChargeResource name="Inspiration" charges={1} onLongRest={(c) => c} /> 
                </Grouping>
                <Grouping name="Class abilities">
                    <ChargeResource name="Chronal Shift" charges={2} spend={0}/>
                </Grouping>
                <Grouping name="Spells">
                    <ChargeResource name="1st level" charges={4} />
                    <ChargeResource name="2nd level" charges={3}  />
                    <ChargeResource name="3rd level" charges={2} />
                </Grouping>
                <Grouping name="Items">
                    <ChargeResource name="Shard From The Stars" charges={1} />
                    <ChargeResource name="Cape of Hellish Resilience (Healing)" charges={1} onShortRest={(_) => 0} />     
                </Grouping>
            </Player>
        )
    }
}