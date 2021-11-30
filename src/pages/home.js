import React from 'react';
import Picture from '../image/trumanPic.jpg';

class Home extends React.Component {
   

  


    render() {
        return (
        <div class="row">
            <div class="col-sm-6 ">
                <div className="container-fluid text center">
                <img src={Picture} class="rounded mx-auto d-block"  width="300" height="300"/>
                </div>
                
            </div> 

            <div class="col-sm-6 ">
                <div className="container-fluid text-center">
                <p> Hello, I am Truman Nguyen. I am a computer science senior at Lehman college in the Bronx, home of the great Bronx Zoo. I currently have a 3.7 GPA and will be graduating this Fall. I like to play video games, walk my dog, and when I have an idea in mind, create a project. I currently have experience in Java and Android mobile programming.</p>
                </div>
            </div>  
            

        </div>
        )
    }
}



export default Home;
