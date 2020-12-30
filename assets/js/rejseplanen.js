var Rejseplanen = function() {

    function minutes(time) {
        var split = time.split(':');
        return parseInt(split[0]) * 60 + parseInt(split[1]);
    }

    function initalizeEventListeners() {
        document.getElementById('header-251').addEventListener('click', function () {
            toggle('dep-251', 'hidden');
            hide('dep-253');
            hide('dep-254');
            remove('line-253', 'chosen');
            remove('line-254', 'chosen');
            toggle('line-251', 'chosen');
        });
       
        document.getElementById('header-253').addEventListener('click', function () {
            toggle('dep-253', 'hidden');
            hide('dep-251');
            hide('dep-254');            
            remove('line-251', 'chosen');
            remove('line-254', 'chosen');
            toggle('line-253', 'chosen');
        });

        document.getElementById('header-254').addEventListener('click', function () {
            toggle('dep-254', 'hidden');

            hide('dep-251');
            hide('dep-253');
            remove('line-253', 'chosen');
            remove('line-251', 'chosen');
            toggle('line-254', 'chosen');
        });

        document.getElementById('route-button').addEventListener('click', function () {
            toggle('dep-footer', 'dep-footer-open');
            remove('dep-footer', 'dep-footer-hover');
        });

        document.getElementById('route-button').addEventListener('mouseover', function () {
            if(!hasClass('dep-footer', 'dep-footer-open')) {
                add('dep-footer', 'dep-footer-hover');
            }
        });

        document.getElementById('route-button').addEventListener('mouseout', function () {
            remove('dep-footer', 'dep-footer-hover');
        });
    }

    function populate(data) {
        console.log(data);
        var departureIds = ['a', 'b' ];
        Object.entries(data).forEach(([line, destinations]) => {
            var j = 0;
            Object.entries(destinations).forEach(([destination, departures]) => {
                var departureHeader = document.getElementById('route-' + line + '-' + departureIds[j]);
                departureHeader.insertAdjacentHTML('beforeend', destination);
                var departureContainer = document.getElementById('dep-' + line + '-' + departureIds[j]);
                for(i = 0; i < departures.length; i++) {
                    var dep = `<div class='time-wrapper'>
                    <span class='time'>
                        <span>${departures[i].time}</span>
                        ${(() => {
                            if(departures[i].rtTime !== null) {
                                var rtMinutes = minutes(departures[i].rtTime);
                                var actualMinutes = minutes(departures[i].time);
                                if (rtMinutes > actualMinutes) {
                                    var diff = rtMinutes - actualMinutes;
                                    return `<span class="off">+${diff}</span>`
                                }
                                if (rtMinutes < actualMinutes) {
                                    var diff = actualMinutes - rtMinutes;
                                    return `<span class="off">-${diff}</span>`
                                }
                            }
                            return ``;
                        })()}
                        ${(() => {
                            if(departures[i].goesFurther) {
                                return `<span class="goes-further">*</span>`
                            }
                            return ``;
                        })()}
                    </span>
                    </div>
                    `
                    departureContainer.insertAdjacentHTML('beforeend', dep)
                }
                j++;
            });
        });
    }

    return {
        init: function() {
            initalizeEventListeners();
        },

        populate: function(data) {
            populate(data);
        }
    }
}
