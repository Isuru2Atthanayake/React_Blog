const BlogList = ({blogsprop, tittleprop, handleDelete}) => {
    // const blogs = props.blogsprop; // linking the blogsprop to this page
    // const title = props.tittleprop;
    //const handleDelete = props.handleDelete;
    // console.log(props,blogs); // logging in to the console

    return (
        <div className="blogList">
            <h2>{tittleprop}</h2>
        {blogsprop.map((blog)=>( // map used to go through each item 
            <div className="blog-preview" key={blog.id}> {/* unique key property*/}
                <h2>{blog.title}</h2>  {/*displays the blog tittle */}
                <p>Written by {blog.author}</p>
                <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                {/* <p>{blog.body}</p> */}
            </div>
        ))}
       
  
    </div> 
    );
}

export default BlogList;