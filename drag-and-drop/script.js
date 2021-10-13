const addBtns = document.querySelectorAll('.add-btn:not(.solid)');
const saveItemBtns = document.querySelectorAll('.solid');
const addItemContainers = document.querySelectorAll('.add-container');
const addItems = document.querySelectorAll('.add-item');
const h1 = document.querySelectorAll('h1');
// Item Lists
const listColumns = document.querySelectorAll('.drag-item-list');
const backlogList = document.getElementById('backlog-list');
const progressList = document.getElementById('progress-list');
const completeList = document.getElementById('complete-list');
const onHoldList = document.getElementById('on-hold-list');

// Items
let updatedOnLoad = false;

// Initialize Arrays
let backlogListArray = [];
let progressListArray = [];
let completeListArray = [];
let onHoldListArray = [];
let h1Array = [];
let listArrays = [];

// Drag Functionality
let draggedItem;
let dragging = false;
let currentColumn;


// Get Arrays from localStorage if available, set default values if not
function getFromLocalStorage() {
  if (localStorage.getItem('backlogItems')) {
    backlogListArray = JSON.parse(localStorage.backlogItems);
    progressListArray = JSON.parse(localStorage.progressItems);
    completeListArray = JSON.parse(localStorage.completeItems);
    onHoldListArray = JSON.parse(localStorage.onHoldItems);
    h1Array = JSON.parse(localStorage.h1Items);
  } else {
    backlogListArray = ['Release the course', 'Sit back and relax'];
    progressListArray = ['Work on projects', 'Listen to music'];
    completeListArray = ['Being cool', 'Getting stuff done'];
    onHoldListArray = ['Being uncool'];
    h1Array = ['Project', 'Backlog', 'Progress', 'Complete', 'On-hold']
    
  }
}

// Set localStorage Arrays
function updateLocalStorage() {
  listArrays = [backlogListArray, progressListArray, completeListArray, onHoldListArray, h1Array];
  const arrayNames = ['backlog', 'progress', 'complete', 'onHold', 'h1'];
  arrayNames.forEach((arrayName, index) => {
    localStorage.setItem(`${arrayName}Items`, JSON.stringify(listArrays[index]));
  });
}

// Filter arrays to remove empty items
function filterArray(array){
  const filteredArray = array.filter(item => item !== null)
  return filteredArray;

}
// Create DOM Elements for each list item
function createItemEl(columnEl, column, item, index) {
  
  // List Item
  const listEl = document.createElement('li');
  listEl.classList.add('drag-item');
  listEl.textContent = item;
  listEl.draggable = true;
  listEl.setAttribute('ondragstart', 'drag(event)');
  listEl.contentEditable = true;
  listEl.id = index;
  listEl.setAttribute('onfocusout', `updateItem(${index}, ${column})`);
  // Append
  columnEl.appendChild(listEl);

}

// Update Columns in DOM - Reset HTML, Filter Array, Update localStorage
function updateDOM() {
  // Check localStorage once
  if (!updatedOnLoad){
    getFromLocalStorage();
  }

  // Titles (h1)

for (let i = 0; i < h1Array.length; i++) {
  h1[i].innerText = h1Array[i];
  
}
  // Backlog Column
  backlogList.textContent = '';
  backlogListArray.forEach((backlogItem, index) => {
    createItemEl(backlogList, 0, backlogItem, index);
  });
  backlogListArray = filterArray(backlogListArray);
  

  // Progress Column
  progressList.textContent = '';
  progressListArray.forEach((progressItem, index) => {
    createItemEl(progressList, 1, progressItem, index);
  });
  progressListArray = filterArray(progressListArray);


  // Complete Column
  completeList.textContent = '';
  completeListArray.forEach((completeItem, index) => {
    createItemEl(completeList, 2, completeItem, index);
  });
  completeListArray = filterArray(completeListArray);


  // On Hold Column
  onHoldList.textContent = '';
  onHoldListArray.forEach((onHoldItem, index) => {
    createItemEl(onHoldList, 3, onHoldItem, index);
  });
  onHoldListArray = filterArray(onHoldListArray);


  // Run getFromLocalStorage only once, Update Local Storage
  updatedOnLoad = true;
  updateLocalStorage();

}
// update item - delete if necessary, or update array value
function updateItem(id, column){
  const selectedArray = listArrays[column];

  const selectedColumnEl = listColumns[column].children;
  if (!dragging){
    if (!selectedColumnEl[id].textContent){
      delete selectedArray[id];
    } else {
      selectedArray[id] = selectedColumnEl[id].textContent;
    }
    updateDOM();  
  }
  
}

// Add to column list
function addToColumn(column){
  const itemText = addItems[column].textContent;
  const selectedArray = listArrays[column];
  selectedArray.push(itemText);
  addItems[column].textContent ='';
  updateDOM();
  
}


// Show add item input box
function showInputBox(column){
  addBtns[column].style.visibility = 'hidden';
  saveItemBtns[column].style.display = 'flex';
  addItemContainers[column].style.display = 'flex';

}

// Hide item input box
function hideInputBox(column){
  addBtns[column].style.visibility = 'visible';
  saveItemBtns[column].style.display = 'none';
  addItemContainers[column].style.display = 'none';
  addToColumn(column);

}
// Allow arrays to reflect Drag and Drop items
function rebuildArrays(){
  backlogListArray = Array.from(backlogList.children).map(i => i.textContent);
  progressListArray = Array.from(progressList.children).map(i => i.textContent);
  completeListArray = Array.from(completeList.children).map(i => i.textContent);
  onHoldListArray = Array.from(onHoldList.children).map(i => i.textContent);
  updateDOM();
}

// When item starts dragging
function drag(e){
  draggedItem = e.target;
  dragging = true;
}

// Column allows for items to drop
function allowDrop(e){
  e.preventDefault();
}

// When item enters column area
function dragEnter(column){
  listColumns[column].classList.add('over');
  currentColumn = column;
  
}

// dropping item in column
function drop(e){
  e.preventDefault();
  // remove background color/padding
  listColumns.forEach((column) => {
    column.classList.remove('over');
  });
  // Add item to column
  const parent = listColumns[currentColumn];
  parent.appendChild(draggedItem);
  // dragging complete
  dragging = false;
  rebuildArrays();

}

function editTitles(index, text){
  h1Array[index] = text;
  updateDOM();
}



// On Load
updateDOM();