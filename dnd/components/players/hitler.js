class Hitler extends React.Component {
    render() {
        return (
            <Player name="Hitler">
                <Grouping name="Resources">
                    <ChargeResource name="Hit Die" charges={5} spend={2} onShortRest={(spend) => spend - 1 < 0 ? 0 : spend - 1} />
                    <ChargeResource name="Inspiration" charges={1} onLongRest={(c) => c} /> 
                </Grouping>
                <Grouping name="Racial abilities">
                    <ChargeResource name="Blink (Recharge 5-6)" charges={1} onShortRest={(_) => 0} />
                </Grouping>
                <Grouping name="Spells">
                    <ChargeResource name="1st level" charges={4}  />
                    <ChargeResource name="2nd level" charges={2} spend={2} />
                </Grouping>
            </Player>
        )
    }
}