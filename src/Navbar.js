 const Navbar = () => {  //stateless funtional componet
    return ( 
    <nav className="navbar">
        <h1> Isuru Blog</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/create">New Blog</a>
        </div>
    </nav> 
     );
}
 
export default Navbar ;