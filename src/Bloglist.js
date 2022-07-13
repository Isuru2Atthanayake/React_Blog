const BlogList = ({blogsprop, tittleprop, handleDelete}) => {
    

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