import paper from 'paper';

const Sketch = () => {
    var myPath;
  
      paper.view.onMouseDown = function(event) {
          myPath = new paper.Path();
          myPath.strokeColor = 'black';
      }
      
      paper.view.onMouseDrag = function(event) {
          myPath.add(event.point);
      }
      
      paper.view.onMouseUp = function(event) {
          var myCircle = new paper.Path.Circle({
              center: event.point,
              radius: 10
          });
          myCircle.strokeColor = 'black';
          myCircle.fillColor = 'white';
      }
  
      paper.view.draw();
}    

export default Sketch; 