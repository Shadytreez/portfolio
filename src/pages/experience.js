import React from 'react';
import Cyborg from '../image/cyborg.png';

class Experience extends React.Component {
   

  


    render() {
        return (
            <div>
                <div class='row'>
                    <div class="col-sm-6 ">
                        <div className="container-fluid text-center">
                        <h2> Cyborg Inc. Internship </h2>
                        <h3> June 2021 - Aug 2021 </h3>
                        <a href="Cyborg.co">Cyborg.co </a>
                        <ul>
                            <li>Wrote a test bench for Spring Boot server to test REST API responses using Rest Assured, Spring Boot, and Unix4j grep.</li>
                            <li>Conducted extensive feature testing in order to identify defects in pre-released software in testing environments.</li>
                            <li>Created the database using Postgres to record the results from the test bench.</li>
                            <li>Used a service in Linux with terminal commands to increase automation.</li>
                            <li>Wrote a documentation using Google Docs and ObjectAid UML Explorer to provide an easier understanding of the test bench.</li>
                        </ul>   
                        </div>
                    </div>
                    <div class="col-sm-6 ">
                        <img src={Cyborg} class="rounded mx-auto d-block"  width="600" height="200"/>
                    </div>
                </div>
            </div>
          );
    }
}



export default Experience;
