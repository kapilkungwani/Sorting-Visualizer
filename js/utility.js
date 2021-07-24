function set_heights() {
    heights = [];
    for (i = 0; i < size; i++) {
        heights.push(elements[i].offsetHeight);
    }
}

function div_update(element1, element2, height1, height2, color) {
    window.setTimeout(function () {
        element1.style.height = height1 + "px";
        element2.style.height = height2 + "px";
        element1.style.backgroundColor = color;
        element2.style.backgroundColor = color;
    }, delay += inc_delay);
}

function update_color(element, color = "#549ce8") {
    window.setTimeout(function () {
        element.style.backgroundColor = color;
    }, delay += inc_delay);
}

function merge_update(element, height, color) {
    window.setTimeout(function () {
        element.style.backgroundColor = color;
        element.style.height = height + "px";
    }, delay += inc_delay);
}

function update_all_colors(start, end, color) {
    window.setTimeout(function () {
        for (var p = start; p <= end; p++) {
            elements[p].style.backgroundColor = color;
        }
    }, delay += inc_delay);
}