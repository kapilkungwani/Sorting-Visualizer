mergeSort.addEventListener("click", ms);

function ms() {
    delay = 0;
    heights = [];
    set_heights();
    merge_sort(0, size - 1);
}

function merge(start, mid, end) {
    update_all_colors(start, end, processingColor);
    var i, j, k;
    i = start;
    j = mid + 1;
    var arr = [];
    while (i <= mid && j <= end) {
        if (heights[i] <= heights[j]) {
            arr.push(heights[i]);
            i++;
        } else {
            arr.push(heights[j]);
            j++;
        }
    }
    while (i <= mid) {
        arr.push(heights[i]);
        i++;
    }
    while (j <= end) {
        arr.push(heights[j]);
        j++;
    }
    i = 0;
    for (var k = start; k <= end; k++) {
        heights[k] = arr[i];
        i++;
    }
    i = 0;
    for (var k = start; k <= end; k++) {
        merge_update(elements[k], arr[i], sortedColor);
        i++;
    }
}

function merge_sort(start, end) {
    if (start >= end) return;
    var x = (start + end) / 2;
    var mid = Math.floor(x);
    merge_sort(start, mid);
    merge_sort(mid + 1, end);
    merge(start, mid, end);
}
