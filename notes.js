var notes = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'];
var offset = [7, 2, 10, 5, 0, 7];

function initializeNut() {
    document.getElementById("fretboard").insertAdjacentHTML('beforeend', renderNut());
}

function initializeFretboard() {   
    for (i = 1; i <= 12; i++) {
        var fretNotes = {
            0 : getNote(i, 0),
            1 : getNote(i, 1),
            2 : getNote(i, 2),
            3 : getNote(i, 3),
            4 : getNote(i, 4),
            5 : getNote(i, 5),
        };
        document.getElementById("fretboard").insertAdjacentHTML('beforeend', renderFret(fretNotes));
    }
}

function initializeStrings() {
    var strings = document.getElementsByClassName('string'); 
    for (i = 0; i < strings.length; ++i) {
        strings[i].addEventListener('click', function() {
            toggleDot(this);
            guessChord();
        });
    }
}

function getNote(fret, string) {
    return notes[(fret+offset[string]) % 12];
}

function clearDots(stringElement) {
    var stringNumber = stringElement.dataset.string;
    var strings = document.querySelectorAll("[data-string='"+stringNumber+"']");
    for(i = 0; i < strings.length; i++) {
        var dot = strings[i].getElementsByClassName('dot')[0];
        dot.style.display = ''
    }
}

function toggleDot(stringElement) 
{
    var dot = stringElement.getElementsByClassName('dot')[0];
    if(dot.style.display === '') {
        clearDots(stringElement);
        dot.style.display = 'inline';
        document.getElementById('string_' + stringElement.dataset.string).getElementsByClassName('note')[0].innerHTML = stringElement.dataset.note;
        document.getElementById('string_' + stringElement.dataset.string).style.color = 'green';
    } else {
        dot.style.display = ''
        document.getElementById('string_' + stringElement.dataset.string).getElementsByClassName('note')[0].innerHTML = getNote(0, stringElement.dataset.string);
        document.getElementById('string_' + stringElement.dataset.string).style.color = 'black';
    }
}

function guessChord() {
    var notes = {};
    for(i = 5; i >= 0; i--) {
        var stringID = 'string_' + i;
        var string = document.getElementById(stringID);
        var note = string.getElementsByClassName('note')[0].innerHTML;
        if(note !== 'x')
        {
            notes[note] = true;
        }
    }
    var noteString = '';
    for(let note in notes) {
        noteString += note + ' ';
    }
    document.getElementById('chord-values').innerHTML = noteString;
}

function renderNut() {
    var nutHeader = `<div class="nut">`;
    var nutStrings = '';
    for(i = 0; i < 6; i++) {
        nutStrings += 
            `<div class="string" data-string="${i}" data-note="x">
                <div class="over"></div>
                <div class="x">
                    <div class="dot">X</div>
                </div>
                <div class="under"></div>
            </div>`;
    };
    return nutHeader + nutStrings + `</div>`;
}

function renderFret(fretNotes) {
    return `<div class="fret">
        <div class="string" data-string="0" data-note="${fretNotes[0]}">
            <div class="over"></div>
            <div class="line">
                <div class="dot"></div>
            </div>
            <div class="under"></div>
        </div>
        <div class="string" data-string="1" data-note="${fretNotes[1]}">
            <div class="over"></div>
            <div class="line">
                <div class="dot"></div>
            </div>
            <div class="under"></div>
        </div>
        <div class="string" data-string="2" data-note="${fretNotes[2]}">
            <div class="over"></div>
            <div class="line">
                <div class="dot"></div>
            </div>
            <div class="under"></div>
        </div>
        <div class="string" data-string="3" data-note="${fretNotes[3]}">
            <div class="over"></div>
            <div class="line">
                <div class="dot"></div>
            </div>
            <div class="under"></div>
        </div>
        <div class="string" data-string="4" data-note="${fretNotes[4]}">
            <div class="over"></div>
            <div class="line">
                <div class="dot"></div>
            </div>
            <div class="under"></div>
        </div>
        <div class="string" data-string="5" data-note="${fretNotes[5]}">
            <div class="over"></div>
            <div class="line">
                <div class="dot"></div>
            </div>
            <div class="under"></div>
        </div>
        <div class="bar"></div>
    </div>
    `
}