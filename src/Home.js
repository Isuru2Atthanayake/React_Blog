import { useState } from "react"; //use state hook

const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: 'My new website',body:'lorem ipsum....',author:'mario', id:1},
        {title: 'WELCOME PARTY',body:'lorem ipsum....',author:'yoshi', id:2},
        {title: 'Web dev top tips',body:'lorem ipsum....',author:'sam', id:3}
    ]);

    return ( 
    <div className="Home">
        {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>  {/*displays the blog tittle */}
                <p>Written by {blog.author}</p>
            </div>
        ))}
       
  
    </div> 
    );
}
 
export default Home;