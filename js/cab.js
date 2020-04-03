function makeStraight() {
    let objects = document.getElementsByClassName("indicator");
    let gap = 50;
    let max = 0;
    for (let i = 0; i < objects.length; i++) {
        let element = objects[i].children;
        let indicator_length = element[0].textContent.length;
        let indicator_value_length = element[1].textContent.length;
        if (indicator_length + indicator_value_length > max) {
            max = indicator_length + indicator_value_length;
        }
    }
    for (let i = 0; i < objects.length; i++) {
        let element = objects[i].children;
        let indicator_length = element[0].textContent.length;
        let indicator_value_length = element[1].textContent.length;
        let gap = max - indicator_value_length - indicator_length;
        gap *= 10;
        element[1].style.paddingLeft =  `${gap}px`;
    }
}

makeStraight();