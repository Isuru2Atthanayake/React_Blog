const BlogList = (props) => {
    const blogs = props.blogsprop; // linking the blogsprop to this page
    const title = props.tittleprop;
    // console.log(props,blogs); // logging in to the console

    return (
        <div className="blogList">
            <h2>{title}</h2>
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

export default BlogList;