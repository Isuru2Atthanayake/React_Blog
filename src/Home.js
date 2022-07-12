import { useState } from "react"; //use state hook

const Home = () => {
    const[blogs, setBlogs] = useState([  //list stored inside a use state
        {title: 'My new website',body:'lorem ipsum....',author:'mario', id:1},
        {title: 'WELCOME PARTY',body:'lorem ipsum....',author:'yoshi', id:2},
        {title: 'Web dev top tips',body:'lorem ipsum....',author:'sam', id:3}
    ]);

    return ( 
    <div className="Home">
        {blogs.map((blog)=>( // map used to go through each item 
            <div className="blog-preview" key={blog.id}> {/* unique key property*/}
                <h2>{blog.title}</h2>  {/*displays the blog tittle */}
                <p>Written by {blog.author}</p>
                {/* <p>{blog.body}</p> */}
            </div>
        ))}
       
  
    </div> 
    );
}
 
export default Home;