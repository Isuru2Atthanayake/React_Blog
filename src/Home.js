import { useState } from "react"; //use state hook

const Home = () => {
    // let name = 'mario'
   const[name,setName] = useState('mario'); // array to store the values 
   const[age, setAge] = useState(20);
    

    const handleClick = () => {
        setName('luigi');
        setAge(30);
    }

    // const handleClick = (e) => {
    //     console.log('Hello Isuru' , e);
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log('Hello ' + name,e.target);
    // }


    // let name1= 'mario'; //to change the name when on clicked 
    // const handleClickChangename = () => {
    //     name1 = 'luigi';
    //     console.log(name1)
    // }


    return ( 
    <div className="Home">
        <h2>Homepage</h2>
        {/* <p>{name1}</p> */}
        <p>{name} is {age} years old</p>
        <button onClick={handleClick}>Click me</button> 
        {/* <button onClick={(e) => handleClickAgain('Sam', e)}>Click me again</button>
        <button onClick={handleClickChangename}>Click me ch</button> */} 
    </div> 
    );
}
 
export default Home;