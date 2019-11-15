var ChordGuesser = function() {

    let chords = generateChords();

    function generateChords() {
        var chords = new Map();
        var notes = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'];
        for(i = 0; i < notes.length; i++) {
            var root            = notes[i];
            var second          = notes[(i + 2) % 12];
            var minorThird      = notes[(i + 3) % 12];
            var majorThird      = notes[(i + 4) % 12];
            var fourth          = notes[(i + 5) % 12];
            var flatFifth       = notes[(i + 6) % 12];
            var perfectFifth    = notes[(i + 7) % 12];
            var sharpFifth      = notes[(i + 8) % 12];
            var majorSixth      = notes[(i + 9) % 12];
            var minorSeventh    = notes[(i + 10) % 12];
            var majorSeventh    = notes[(i + 11) % 12];
            var ninth           = notes[(i + 14) % 12];
            var eleventh        = notes[(i + 17) % 12];
    
            chords.set([root, perfectFifth], printRoot(root) + '5');
            chords.set([root, majorThird, perfectFifth], printRoot(root));
            chords.set([root, minorThird, perfectFifth], printRoot(root) + 'm');
            chords.set([root, second, perfectFifth], printRoot(root) + 'sus2');
            chords.set([root, fourth, perfectFifth], printRoot(root) + 'sus4');
            chords.set([root, majorThird, sharpFifth], printRoot(root) + 'aug');       
            chords.set([root, minorThird, flatFifth], printRoot(root) + 'dim');
            chords.set([root, majorThird, perfectFifth, majorSixth], printRoot(root) + '6');
            chords.set([root, majorThird, perfectFifth, majorSixth], printRoot(root) + 'm6');
            chords.set([root, majorThird, perfectFifth, minorSeventh], printRoot(root) + '7');
            chords.set([root, majorThird, minorSeventh], printRoot(root) + '7 (-5)');
            chords.set([root, majorThird, perfectFifth, majorSeventh], printRoot(root) + 'maj7');
            chords.set([root, minorThird, perfectFifth, minorSeventh], printRoot(root) + 'm7');
            chords.set([root, majorThird, perfectFifth, ninth], printRoot(root)+ 'add9');
            chords.set([root, minorThird, perfectFifth, ninth], printRoot(root)+ 'madd9');
            chords.set([root, majorThird, perfectFifth, eleventh], printRoot(root) + 'add11');
            chords.set([root, minorThird, perfectFifth, eleventh], printRoot(root) + 'madd11');
            chords.set([root, majorThird, perfectFifth, minorSeventh, ninth], printRoot(root) + '9');
            chords.set([root, majorThird, perfectFifth, majorSeventh, ninth], printRoot(root) + 'maj9');
            chords.set([root, minorThird, perfectFifth, minorThird, ninth], printRoot(root) + 'm9');
            chords.set([root, majorThird, perfectFifth, minorSeventh, ninth, eleventh], printRoot(root) + '11');
            chords.set([root, majorThird, perfectFifth, majorSeventh, ninth, eleventh], printRoot(root) + 'maj11');
            chords.set([root, minorThird, perfectFifth, minorThird, ninth, eleventh], printRoot(root) + 'm11');
        }
        return chords;
    }

    function printRoot(root) {
        if(root.length === 1) {
            return root.charAt(0).toUpperCase();
        }
        return root.charAt(0).toUpperCase() + root.charAt(1);
    }
    
    function guessChord(notes) {
        var possibleChords = [];
        for (var [chordNotes, chordName] of chords) {
            if(chordNotes.length !== notes.length) {
                continue;
            }
            var isMatch = true;
            for(i = 0; i < chordNotes.length; i++) {
                if(chordNotes.includes(notes[i])) {
                    continue;
                }
                isMatch = false;
            }
            if(isMatch) {
                possibleChords.push(chordName);
            }
        }
        return possibleChords;
    }

    return {
        guess : function(notes) {
            return guessChord(notes);
        }
    }
}

