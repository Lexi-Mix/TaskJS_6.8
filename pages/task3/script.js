let elements = document.querySelectorAll('.trafficLight');
let a = 1;
for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
        const trafficLightEl1 = document.querySelector('#green');
        const trafficLightEl2 = document.querySelector('#yellow');
        const trafficLightEl3 = document.querySelector('#red');

        if (trafficLightEl1.style.background == ('green')) {

            trafficLightEl1.style.background = ('black')
            trafficLightEl2.style.background = ('yellow');
            trafficLightEl3.style.background = ('black');

        } else if (trafficLightEl2.style.background == ('yellow')) {

            trafficLightEl2.style.background = ('black')
            trafficLightEl1.style.background = ('black');
            trafficLightEl3.style.background = ('red');

        } else if (trafficLightEl3.style.background == ('red')) {

            trafficLightEl3.style.background = ('black')
            trafficLightEl1.style.background = ('green');
            trafficLightEl2.style.background = ('black');

        } else {
            trafficLightEl1.style.background = ('green');
        }
        a++;
        if (a > 5) {
            a = 1;
        }
        document.getElementById('step').src = `img/step_${a}.png`;
        //girl
    };
}