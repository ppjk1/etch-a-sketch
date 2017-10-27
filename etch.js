// This variable controls how we apply color; default is black;
var brush = "black";

document.body.onload = initGrid;

function initGrid(e, dimension) {
  dimension = (typeof dimension !== 'undefined') ? dimension : 16;
  var grid = document.getElementById('grid');
  for (var row = 0; row < dimension; row++) {
    for (var col = 0; col < dimension; col++) {
      var cell = document.createElement('div');
      cell.classList.add('cell');
      grid.appendChild(cell);
    }
  }
  var size = $('#grid').height() / dimension;
  $('.cell').width(size).height(size);
}

function resetGrid() {
  var d = Number(window.prompt('How many squares per side? (default is 16)', 16));
  document.getElementById('grid').innerHTML = '';
  initGrid(null, d);
}

$(document).on('mouseenter', '.cell', function() {
  if (brush == 'black') {
    this.style.backgroundColor = 'rgba(0,0,0,1)';
  } else if (brush == 'fade') {
    this.style.backgroundColor = $.Color(this, 'backgroundColor').alpha('+=0.1');

  }
});

$('button[name=reset]').click(resetGrid);

$('button[name=fade]').click(function() {
  brush = 'fade';
});
