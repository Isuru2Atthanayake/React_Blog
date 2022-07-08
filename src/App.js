
import './App.css';

function App() {
  const title ='Welcome to the new Blog';//constant variable
  const likes = 50; //constant variable
  // const person = {name:'isuru'} object
  const link = "https://www.youtube.com";

  return (
    <div className="App">
      <div className="content">
        {/* <h1>App Component</h1>  */}
        <h1>{title}</h1> {/*the above constant variable is called here*/}
        <p>Liked {likes} times</p>
        {/* <p>{person}</p> objects cannot be called*/}
        <p>10</p>
        <p>"hello,isuru"</p>
        <p>{[1,2,3,4,5,6,7,8,9]}</p>{/* this is an array*/}
        <p>{Math.random()*10}</p>

        <a href={link}>Youtube</a>
      </div>
    </div>
  );
}

export default App;
