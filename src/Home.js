import { useEffect, useState } from "react"; //use state hook
import BlogList from "./Bloglist";

const Home = () => {
    const[blogs, setBlogs] = useState([  //list stored inside a use state
        {title: 'My new website',body:'lorem ipsum....',author:'mario', id:1},
        {title: 'WELCOME PARTY',body:'lorem ipsum....',author:'yoshi', id:2},
        {title: 'Web dev top tips',body:'lorem ipsum....',author:'sam', id:3}
    ]);

    const handleDelete = (id) => { // funtion to delete the values
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(()=>{
        console.log('use effect ran');
        console.log(blogs);
            
    });

    return ( 
    <div className="Home">
       <BlogList blogsprop ={blogs} tittleprop="All Blogs!" handleDelete = {handleDelete} />
       <BlogList blogsprop ={blogs.filter((blog) => blog.author === 'mario')} tittleprop="Mario's blogs Blogs!"/>
    </div> 
    );
}
 
export default Home;