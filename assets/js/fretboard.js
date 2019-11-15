var Fretboard = function() {

    var notes = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'];
    var offset = [7, 2, 10, 5, 0, 7];
    var onNotesUpdate = function(notes) {};
 
    function initializeNotes(rootID) {
        document.getElementById(rootID).insertAdjacentHTML('beforebegin', `<div class="notes">
            <div id="string_0">
                <div class="over"></div>
                <div class="note">e</div>
                <div class="under"></div>
            </div>
            <div id="string_1"> 
                <div class="over"></div>
                <div class="note">b</div>
                <div class="under"></div>
            </div>
            <div id="string_2"> 
                <div class="over"></div>
                <div class="note">g</div>
                <div class="under"></div>
            </div>
            <div id="string_3"> 
                <div class="over"></div>
                <div class="note">d</div>
                <div class="under"></div>
            </div>
            <div id="string_4"> 
                <div class="over"></div>
                <div class="note">a</div>
                <div class="under"></div>
            </div>
            <div id="string_5"> 
                <div class="over"></div>
                <div class="note">e</div>
                <div class="under"></div>
            </div>
        </div>`);
    }

    function initializeRoot(rootID) {
        document.getElementById(rootID).insertAdjacentHTML('beforeend', `<div id="fretboard" class="fretboard"></div>`);
    }

    function initializeNut() {
        document.getElementById('fretboard').insertAdjacentHTML('beforeend', renderNut());
    }

    function initializeFrets() {   
        for (i = 1; i <= 12; i++) {
            var fretNotes = {
                0 : getNote(i, 0),
                1 : getNote(i, 1),
                2 : getNote(i, 2),
                3 : getNote(i, 3),
                4 : getNote(i, 4),
                5 : getNote(i, 5),
            };
            document.getElementById('fretboard').insertAdjacentHTML('beforeend', renderFret(fretNotes, i));
            if(i === 3 || i === 5 || i === 7 || i === 9) {
                var fret = document.getElementById('fretboard').querySelectorAll("[data-fret='"+i+"']")[0];
                fret.insertAdjacentHTML('beforeend', `<div class="single-dot"></div>`);
            }
            if(i === 12) {
                var fret = document.getElementById('fretboard').querySelectorAll("[data-fret='"+i+"']")[0];
                fret.insertAdjacentHTML('beforeend', `<div class="double-dot-one"></div>`);
                fret.insertAdjacentHTML('beforeend', `<div class="double-dot-two"></div>`);
            }
        }
    }

    function initializeStrings() {
        var strings = document.getElementById('fretboard').getElementsByClassName('string'); 
        for (i = 0; i < strings.length; ++i) {
            strings[i].addEventListener('click', function() {
                toggleDot(this);
                onNotesUpdate(getCurrentNotes());
            });
        }
    }

    function getCurrentNotes() {
        var notes = [];
        for(i = 5; i >= 0; i--) {
            var stringID = 'string_' + i;
            var string = document.getElementById(stringID);
            var note = string.getElementsByClassName('note')[0].innerHTML;
            if(note !== 'x')
            {
                notes.push(note);
            }
        }
        return Array.from(new Set(notes));
    }

    function getNote(fret, string) {
        return notes[(fret+offset[string]) % 12];
    }

    function clearDots(stringElement) {
        var stringNumber = stringElement.dataset.string;
        var strings = document.getElementById('fretboard').querySelectorAll("[data-string='"+stringNumber+"']");
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
        } else {
            dot.style.display = ''
            document.getElementById('string_' + stringElement.dataset.string).getElementsByClassName('note')[0].innerHTML = getNote(0, stringElement.dataset.string);
        }
    }

    function renderNut() {
        var nutHeader = `<div class="nut">`;
        var nutStrings = '';
        for(i = 0; i < 6; i++) {
            nutStrings += 
                `<div class="string string-${i}" data-string="${i}" data-note="x">
                    <div class="over"></div>
                    <div class="x">
                        <div class="dot">X</div>
                    </div>
                    <div class="under"></div>
                </div>`;
        };
        return nutHeader + nutStrings + `</div>`;
    }

    function renderFret(fretNotes, fret) {
        return `<div class="fret" data-fret="${fret}">
            <div class="string string-0" data-string="0" data-note="${fretNotes[0]}">
                <div class="over"></div>
                <div class="line">
                    <div class="dot"></div>
                </div>
                <div class="under"></div>
            </div>
            <div class="string string-1" data-string="1" data-note="${fretNotes[1]}">
                <div class="over"></div>
                <div class="line">
                    <div class="dot"></div>
                </div>
                <div class="under"></div>
            </div>
            <div class="string string-2" data-string="2" data-note="${fretNotes[2]}">
                <div class="over"></div>
                <div class="line">
                    <div class="dot"></div>
                </div>
                <div class="under"></div>
            </div>
            <div class="string string-3" data-string="3" data-note="${fretNotes[3]}">
                <div class="over"></div>
                <div class="line">
                    <div class="dot"></div>
                </div>
                <div class="under"></div>
            </div>
            <div class="string string-4" data-string="4" data-note="${fretNotes[4]}">
                <div class="over"></div>
                <div class="line">
                    <div class="dot"></div>
                </div>
                <div class="under"></div>
            </div>
            <div class="string string-5" data-string="5" data-note="${fretNotes[5]}">
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

    return {
        init : function(rootID) {
            initializeNotes(rootID);
            initializeRoot(rootID);
            initializeNut();
            initializeFrets();
            initializeStrings();
        },
        onNotesUpdate(f) {
            onNotesUpdate = f;
        }
    }
};