import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Side_Panel_Left = () => {
    return ( 
        <div className="m-2">
           
                <div className="alert alert-primary">
                    <ul>
                        <li>Project1</li>
                        <li>Project2</li>
                        <li>Project3</li>
                        <li>Project4</li>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                            </ul>
                        <li>Project5</li>
                    </ul>
                </div>
    
        </div>
     );
}
 
export default Side_Panel_Left;