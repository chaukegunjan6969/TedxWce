import React from "react";
import { Outlet } from "react-router-dom";
import '../pagescss/mainnav.css'

const Mainnav = ()=>{
    return(
      <div>
         <Outlet></Outlet>


         <div className="Footer" >
          
          <div>
             <p>Site Map</p>
              <br></br>

              <span> <p>support :</p> <p> 7248909674</p></span>
          </div>

          <div>

             <p>Footer</p>
             <p>SOCIAL MEDIA HANDLES</p>
             <p>Copy right TedX WCE Web team</p>

          </div>

          <div>

            <p>Last Updated</p>
            <p>10:00 pm</p>
            <p>term and conditions</p>

          </div>

         </div>

        
         
       
      </div>
       
    )
}

export default Mainnav;