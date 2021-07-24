selectionSort.addEventListener("click", selection_sort);

function selection_sort(){ 
    delay = 0;
    set_heights();
    var min;
    for(i=0;i<size-1;i++){
        min = i;
        update_color(elements[i],swappingColor);
        for(j=i+1;j<size;j++){
            update_color(elements[j],processingColor);
            if(heights[min] > heights[j]){
                if(min != i){
                    update_color(elements[min], baseColor);
                }
                min = j;
                update_color(elements[min],swappingColor);                
            }
            else{
                update_color(elements[j],baseColor);
            }
        }
        if(i != min){
            var temp = heights[i];
            heights[i] = heights[min];
            heights[min] = temp;
            div_update(elements[i], elements[min], heights[i], heights[min],swappingColor);
            update_color(elements[min], baseColor);
        }
        update_color(elements[i], sortedColor);   
    }
    update_color(elements[size-1],sortedColor)   
}

