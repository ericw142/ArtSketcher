import paper from 'paper';

function Sketch(color, width) {
    var myPath;
      if (color === null) {
        paper.view.onMouseDown = function(event) {
          myPath = new paper.Path();
          myPath.strokeColor = 'black';
          myPath.strokeWidth = 10;
        }
      
        paper.view.onMouseDrag = function(event) {
            myPath.add(event.point);
        }
      } 
      else {
        paper.view.onMouseDown = function(event) {
          myPath = new paper.Path();
          myPath.strokeColor = color;
          myPath.strokeWidth = width;
        }
      
        paper.view.onMouseDrag = function(event) {
            myPath.add(event.point);
        }
      }
      
  
      paper.view.draw();
}    

export default Sketch; 