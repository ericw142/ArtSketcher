import paper from 'paper';

function Sketch(color) {
    var myPath;
      if (color === null) {
        paper.view.onMouseDown = function(event) {
          myPath = new paper.Path();
          myPath.strokeColor = 'black';
        }
      
        paper.view.onMouseDrag = function(event) {
            myPath.add(event.point);
        }
      }
      else {
        paper.view.onMouseDown = function(event) {
          myPath = new paper.Path();
          myPath.strokeColor = color;
        }
      
        paper.view.onMouseDrag = function(event) {
            myPath.add(event.point);
        }
      }
      
  
      paper.view.draw();
}    

export default Sketch; 