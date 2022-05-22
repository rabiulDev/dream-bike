import React from 'react'
import "./QuestionAns.css"
const QuestionAns = () => {
    return (
        <div className='qns-container'>
            <div className="how-react-work">
                <h4>How react work ?</h4>
                <p>Ans: React works with the diff algorithm for change or update the UI.
                    First react reads the objects and create HTML elements on the virtual
                    DOM, then render the elements on real DOM. React always compare between
                    the virtual DOM and real DOM. If there occurred any change or update in
                    virtual DOM then the changes will sync in real DOM according to the
                    comparison.</p>
            </div>
            <div className="props-state">
                <h4>What is the different between props and state ?</h4>
                <p>
                    Ans: Props is like property of an element. We can only read props data 
                    and can't modify or change them. We can pass data like array, object,
                     function, string, number, boolean from parent component to child component
                      through props.
                    On the other hand state is like a store of data which can be changed according
                     to the specific moment. We can read data from the state and aso can change or 
                     update data via setState method and state can be asynchronous.
                </p>
            </div>
        </div>
    )
}

export default QuestionAns