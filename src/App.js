
import './App.css';

function App() {
  const title ='Welcome to the new Blog';//constant variable
  const likes = 50; //constant variable
  return (
    <div className="App">
      <div className="content">
        {/* <h1>App Component</h1>  */}
        <h1>{title}</h1> {/*the above constant variable is called here*/}
        <p>Liked {likes} times</p>

      </div>
    </div>
  );
}

export default App;
