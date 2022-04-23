function init() {
    initializePlayer('osborn', 42);
    initializePlayer('garnag', 42);
    initializePlayer('zerath', 42);
    initializeMonsters();
}


function initializePlayer(player, hp) {
    initializeAltitude(player);
    initlizeStuntDice(player);
    initializeHitPoints(player, hp)
}

function initializeAltitude(player) {
    $(`#${player}_altitude .less`).on('click', function() {
        var currentValue = parseInt($(`#${player}_altitude  .altitude-value`).html());
        var nextValue = currentValue - 1;
        if(currentValue === 0) {
            nextValue = 0;
        }

        switch(nextValue) {
            case 0:
                $(`#${player}_altitude`).removeClass('low');
                $(`#${player}_altitude`).addClass('crash');
                break;
            case 1:
                $(`#${player}_altitude`).addClass('low');
                break;
            case 6:
                $(`#${player}_altitude`).removeClass('high');
                break;
        }
        $(`#${player}_altitude .altitude-value`).html(nextValue);
        console.log(`POST: ${player} has ${nextValue} altitude`)
    });

    $(`#${player}_altitude .more`).on('click', function() {
        var currentValue = parseInt($(`#${player}_altitude .altitude-value`).html());
        var nextValue = currentValue + 1;
        if(currentValue === 12) {
            nextValue = 12;
        }

        switch(nextValue) {
            case 1:
                $(`#${player}_altitude`).removeClass('crash');
                $(`#${player}_altitude`).addClass('low');
                break;
            case 2:
                $(`#${player}_altitude`).removeClass('low');
                break;
            case 7:
                $(`#${player}_altitude`).addClass('high');
                break;
        }

        $(`#${player}_altitude .altitude-value`).html(nextValue);
        console.log(`POST: ${player} has altitude ${nextValue}`)
    });
}

function initlizeStuntDice(player) {
    $(`.player`).delegate(`#${player}_stunt-dice .dice`, 'click', function(e) {
        $(e.target).toggleClass('selected');
    });

    $(`#${player}_roll`).on('click', function() {
        var diceCount = parseInt($(`#${player}_flight-modifier`).html()); 
        var altitude = parseInt($(`#${player}_altitude  .altitude-value`).html());
        var altitudeBonus = altitude - 6;
        if(altitudeBonus > 0) {
            diceCount += altitudeBonus;
        }
      
        for(let i = 0; i < diceCount; i++) {
            var diceRoll = Math.floor(Math.random() * 4) + 1;
            $(`#${player}_stunt-dice #dice-array`).append(`<span class='dice hidden'>${diceRoll}</span>`);
            $(`#${player}_stunt-dice #dice-array`).append($(`#${player}_stunt-dice #dice-array .dice`).sort(function(a, b) { return parseInt(a.innerText) > parseInt(b.innerText) ? 1 : -1}))
            setTimeout(function() {
                $(`#${player}_stunt-dice #dice-array .dice`).removeClass('hidden');
            }, 200);
        }
        console.log(`POST: ${player} has ${$(`#${player}_stunt-dice #dice-array .dice`).map((_, d) => d.innerText).toArray()} stunt dice`)
    });

    $(`#${player}_spend`).on('click', function() {

        console.log(`POST: ${player} has spend ${$(`#${player}_stunt-dice .dice.selected`).map((_, d) => d.innerText).toArray()}`)

        $(`#${player}_stunt-dice .dice.selected`).fadeOut(250, function () {
            $(this).remove();
        });
    });

    $(`#${player}_add`).on('click', function() {
        var value = parseInt($(`#${player}_add_value`).val()); 
        if(value > 0 && value < 5) {
            console.log(`POST: ${player} has added ${value} to their pool of Stunt Dice`)
            $(`#${player}_stunt-dice #dice-array`).append(`<span class='dice hidden'>${value}</span>`);
            $(`#${player}_stunt-dice #dice-array`).append($(`#${player}_stunt-dice #dice-array .dice`).sort(function(a, b) { return parseInt(a.innerText) > parseInt(b.innerText) ? 1 : -1}))
            setTimeout(function() {
                $(`#${player}_stunt-dice #dice-array .dice`).removeClass('hidden');
            }, 200);
        } else {
            console.error('Value must be valid for a d4. Value was: ' + value);
        }
    });
}

function initializeHitPoints(player, hp) {
    $(`#${player}_hitpoint .hp`).on('change', function() {
        var value = $(`#${player}_hitpoint .hp`).val();
        const hpMax = hp;
        
        if(value > hpMax) {
            $(`#${player}_hitpoint .hp`).addClass('temp');
        } else {
            $(`#${player}_hitpoint .hp`).removeClass('temp');
        }
        if(value < hpMax / 2) {
            $(`#${player}_hitpoint .hp`).addClass('going-down');
        } else {
            $(`#${player}_hitpoint .hp`).removeClass('going-down');
        }

        console.log(`POST: ${player} has ${value} hp`)
    });
}

function initializeMonsters() {
    $('#monster-add').on('click', function() {
        var displayName = $('#monster-name').val();
        var fmod = $('#monster-flight-mod').val();
        var altitude = $('#monster-altitude').val();
        var hp = $('#monster-hp').val();
        var temp = $('#monster-temphp').val();
        var name = displayName.replaceAll(' ', '').replaceAll('#','_');
        createMonster(name, fmod, altitude, hp, temp, displayName);
    })
}

function createMonster(name, fmod, altitude, hp, temp, displayName) {

    var monsterHtml = `
    <div class='col-5'>
        <div class="monsters player box row p-2 mt-3">
            <div class='col-12 box title mb-1 text-center'>${displayName}</div>
            <div class="col-2">
                <div id='${name}_flight-modifier' class="justify-content-center flight-mod box p-1 mb-1 row">${fmod}</div>
                <div id='${name}_altitude' class="justify-content-center altitude box py-4  row bold">
                <span class='icon less mr-1'>-</span>
                <span class="altitude-value">${altitude}</span>
                <span class='icon more ml-1'>+</span>
                </div>
                <div id='${name}_hitpoint' class="justify-content-center flight-mod box p-1 mt-1 row">
                    <input class='hp temp' type="text" value="${parseInt(hp) + parseInt(temp)}" ></input>
                </div>
            </div>
            <div id="${name}_stunt-dice" class="py-4 ml-1 stunt-dice box col-7">
                <div id="dice-array" class="col"></div>
            </div>
            <div class='buttons box col ml-1 p-2'>
                <div id='${name}_roll' class='col roll-stunt-dice p-2'>
                    Roll
                </div>
                <div class='col my-2'>
					<div class="row">
						<input type="text" id='${name}_add_value'  class="col p-0 mr-1 text-center add">
						<div id='${name}_add' class='col roll-stunt-dice p-2'>
							Add
						</div>
				  	</div>
				</div>
                <div id='${name}_spend' class='col spend roll-stunt-dice p-2'>
                    Spend
                </div>
            </div>
        </div>
  </div>
  <div class='col-1'></div>`

    $('#monsters').append(monsterHtml);
    initializePlayer(name, hp);
}