let delay,
  inc_delay = 500;
let heights = [];
let i, j;
let size = 7;

let generateArray = document.getElementById("generateArray");
let ArraySize = document.getElementById("ArraySize");
let bubbleSort = document.getElementById("bubbleSort");
let selectionSort = document.getElementById("selectionSort");
let mergeSort = document.getElementById("mergeSort");
let quickSort = document.getElementById("quickSort");
let array = document.getElementById("array");
let elements = array.getElementsByTagName("div");

//colors
let baseColor = "purple";
let processingColor = "#6ef07d";
let swappingColor = "#e85d54";
let sortedColor = "#549ce8";
