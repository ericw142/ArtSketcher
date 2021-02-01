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
      
  
      paper.view.draw();
}    

export default Sketch; 