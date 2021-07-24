bubbleSort.addEventListener("click", bubble_sort);

function bubble_sort() {
  delay = 0;
  set_heights()
  for (i = 0; i < size - 1; i++) {
    for (j = 0; j < size - 1 - i; j++) {
      div_update(elements[j], elements[j + 1], heights[j], heights[j + 1], "#6ef07d");
      if (heights[j] > heights[j + 1]) {
        div_update(elements[j], elements[j + 1], heights[j], heights[j + 1], "#e85d54");
        div_update(elements[j], elements[j + 1], heights[j + 1], heights[j], "#e85d54");
        var temp = heights[j];
        heights[j] = heights[j + 1];
        heights[j + 1] = temp;
      }
      div_update(elements[j], elements[j + 1], heights[j], heights[j + 1], "purple");
    }
    update_color(elements[size - i - 1])
  }
  update_color(elements[0]);
}