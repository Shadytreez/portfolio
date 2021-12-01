import React from 'react';
import IndexCard2 from '../image/IndexCard2.jpg';

class Projects extends React.Component {
   

  


    render() {
        return (
            <div>
                <div class='row'>
                    <div class="col-sm-6 ">
                        <div className="container-fluid text-center">
                            <h2> IndexCardMoblieApp </h2>
                            <a href="https://github.com/Shadytreez/IndexCardMoblieApp">GitHub </a>
                            <p>The IndexCard app is an moblie application for the android operating system using java.The project creates multiple list of index cards for different topics.Capable to create and view the questions and answers on the index card. Able to test the user on the context of the index card for topic chosen. The purpose of the application is to help people study for certain topic since people always carry their phone. Where the user can create their own question and answer on index cards. Then later going back to study and review for their topic. </p>
                        </div>
                    </div>
                    <div class="col-sm-6 ">
                        <img src={IndexCard2} class="rounded mx-auto d-block"  width="300" height="600"/>
                    </div>
                </div>
                <div class='row'>
                    <div class="col-sm-6 ">
                        <div className="container-fluid text-center">
                            
                        </div>
                    </div>
                    <div class="col-sm-6 ">
                        
                    </div>
                </div>
            </div>
          );
    }
}



export default Projects;
