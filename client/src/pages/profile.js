import React, { useContext} from "react";
import Canvas from "../components/Canvas";
import Context from "../utils/Context";
import UserPost from "../components/userPost";
import { EmojiSunglassesFill, EmojiExpressionlessFill, EmojiDizzyFill } from "react-bootstrap-icons";

function Profile(props) {
  const [context] = useContext(Context);

  if (context.username === "") {
    return(
      <div className="jumbotron">
      <div className="container">
      <div className="text-center">
        <h2>Please log in or register to start drawing!</h2>
      </div>
      </div>
      </div>
    )
  }

  // Conditional Rendering of Icons
  if (context.icon === "EmojiSunglassesFill") {
    return(
      <div className="jumbotron">
          <div className="container">
          <div className="row">
            <div className="col-md-6 UserDiv">  
            <div className="card border-secondary bg-light mb-3">
            <div className="card-body">
            {/* User Info */}
            <div className="panel">
            <EmojiSunglassesFill color="darkslategray" size={30}/>
              
              <div className="name"><h2>{context.username}</h2></div>
            
            </div>
            <hr></hr>
        
            <div className="stats">
                  <div className="row">
                    <div className="col-md-6">
                     
                    </div>
                  </div>
            </div>
            
            </div>
            <div className="card-header text-center"><h5>{context.username}'s sketches</h5></div>
            <div className="card-body sketchy mb-3">
            <UserPost />
            </div>
            
              </div>
              
              </div>
            {/* Canvas Section */}
            <div className="col-md-6 ml-auto CanvasDiv">
            
            <div className="card border-secondary bg-light mb-3 text-center">
            <div className="card-header text-center"><h5 className="display-4">Draw your Sketch!</h5></div> 
            
            <div className="card-body text-secondary paletteCard">
            <Canvas />
            </div> 
            </div>
          
            </div>
        
            </div>
            
            <br></br>
            
            <br></br>
            
            </div> 
      </div> 
    )
  }

  if (context.icon === "EmojiExpressionlessFill") {
    return(
        <div className="jumbotron">
            <div className="container">
            <div className="row">
            <div className="col-md-6">  
            <div className="card border-secondary bg-light mb-3">
            <div className="card-body">
            {/* User Info */}
            <div className="panel">
            <EmojiExpressionlessFill color="darkslategray" size={30} />

            <div className="name"><h2>{context.username}</h2></div>
            </div>
            <hr></hr>
          
            <div className="stats">
                  <div className="row">
                    <div className="col-md-6">
                     
                    </div>
                  </div>
            </div>
            
            </div>
            <div className="card-header text-center"><h5>{context.username}'s sketches</h5></div>
            <div className="card-body sketchy mb-3">
            <UserPost />
            </div>
            
              </div>
              
              </div>
              {/* Canvas Section */}
              <div className="col-md-6 ml-auto ">
              
              <div className="card border-secondary bg-light mb-3 text-center">
              <div className="card-header text-center"><h5 className="display-4">Draw your Sketch!</h5></div> 
              
              <div className="card-body text-secondary paletteCard">
              <Canvas />
              </div> 
              </div>
            
              </div>
          
              </div>
              
              <br></br>
              
              <br></br>
              
              </div> 
        </div> 
    )
  }

  if (context.icon === "EmojiDizzyFill") {
    return(
        <div className="jumbotron">
            <div className="container">
            <div className="row">
            <div className="col-md-6">  
            <div className="card border-secondary bg-light mb-3">
            <div className="card-body">
            {/* User Info */}
            <div className="panel">
            <EmojiDizzyFill color="darkslategray" size={30} />

            <div className="name"><h2>{context.username}</h2></div>
            </div>
            <hr></hr>
          
            <div className="stats">
                  <div className="row">
                    <div className="col-md-6">
                      
                    </div>
                  </div>
            </div>
            
            </div>
            <div className="card-header text-center"><h5>{context.username}'s sketches</h5></div>
            <div className="card-body sketchy mb-3">
            <UserPost />
            </div>
            
              </div>
              
              </div>
              {/* Canvas Section */}
              <div className="col-md-6 ml-auto">
              
              <div className="card border-secondary bg-light mb-3 text-center">
              <div className="card-header text-center"><h5 className="display-4">Draw your Sketch!</h5></div> 
              
              <div className="card-body text-secondary paletteCard">
              <Canvas />
              </div> 
              </div>
            
              </div>
          
              </div>
              
              <br></br>
              
              <br></br>
              
              </div> 
        </div> 
    )
  }

// If username is recognized and icon is not
  return (
  <div className="jumbotron">
  <div className="container">
  <div className="row">
  <div className="col-md-6">  
  <div className="card border-secondary bg-light mb-3">
  <div className="card-body">
  {/* User Info */}
  <div className="panel">
  </div>
  <hr></hr>

  <div className="stats">
        <div className="row">
          <div className="col-md-6">
            
          </div>
        </div>
  </div>
  
  </div>
  <div className="card-header text-center"><h5>{context.username}'s sketches</h5></div>
  <div className="card-body sketchy mb-3">
  <UserPost />
  </div>
  
    </div>
    
    </div>
    {/* Canvas Section */}
    <div className="col-md-6 ml-auto">
     
     <div className="card border-secondary bg-light mb-3 text-center">
     <div className="card-header text-center"><h5 className="display-4">Draw your Sketch!</h5></div> 
     
     <div className="card-body text-secondary paletteCard">
    <Canvas />
    </div> 
    </div>
   
    </div>

    </div>
    
    <br></br>
     
     <br></br>
     
    </div> 
    </div>                                                     
  );
}

export default Profile;