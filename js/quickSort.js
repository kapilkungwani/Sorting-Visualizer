
quickSort.addEventListener("click", qs);
function qs(){
    delay = 0;
    heights = [];
    set_heights();
    quick_sort(0, size-1);
    update_all_colors(0, size-1, sortedColor);
}

function partition(start, end){
    var i = start;
    var j = end;
    var temp;
    while(i<j){
        
        while(i<=end && heights[i] <= heights[start]){
            update_color(elements[i], baseColor)
            i++;
            update_color(elements[i], processingColor)
        }
        
        update_color(elements[j], baseColor);

        while(j>=0 && heights[j] > heights[start]){
            update_color(elements[j], baseColor);
            j--;
            update_color(elements[j], processingColor);
        }
        if(i<j){
            temp = heights[i];
            heights[i] = heights[j];
            heights[j] = temp;
            div_update(elements[i], elements[j], heights[i], heights[j], swappingColor);
            div_update(elements[i], elements[j], heights[i], heights[j], baseColor); 
        }
        else{
            update_color(elements[i], baseColor);
            update_color(elements[j], baseColor);
            break;
        }
    }
    temp = heights[j];
    heights[j] = heights[start];
    heights[start] = temp;
    div_update(elements[start], elements[j], heights[start], heights[j], swappingColor);
    update_color(elements[start], baseColor);
    update_color(elements[j], sortedColor);
    return j;
}
 
function quick_sort(start, end){
    if(start>=end){
        if(start == end){
            update_color(elements[start], sortedColor);
        }
        return;
    }
    var pivot = partition(start, end);
    quick_sort(start, pivot-1);
    quick_sort(pivot+1, end);
}