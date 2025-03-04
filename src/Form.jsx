import React from 'react';
import './App.css';

const Form = () => {



    const ErrorHandler = (e) => {
        e.preventDefault();
       if(true) {
           alert('Name is required')
           return;
       }
    }
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value = {''}/>
                </div>
          
                <button type="submit" onClick={ErrorHandler(e)}>Submit</button>
            </form>
        </div>
    );
};

export default Form;    