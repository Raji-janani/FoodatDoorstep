import React from "react";
import ReactDOM from "react-dom/client";



const elem1 =(
    <h2>this is element1</h2>
);

//React element inside another react element

const elem2 = (
    <div><span>{elem1}</span> this is element2</div>
)


const Title = () =>(
<h1>This is from Title component</h1>

);

//React component inside another react element
const elem3 =(
   <div>this is elem3 and has title component text {Title()} and also <span><Title/></span></div>
   
)

//React component inside another react component
const Heading = () => (
    <div id="container">
        {elem1}
        {elem2}
        {Title()}
        <Title/>
        <h2>This is from heading component</h2>
    </div>
);
    

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(elem3);