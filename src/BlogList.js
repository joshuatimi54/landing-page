const BLogList = ({blogs, title, handledelete}) => {
   
    return (
        <div className="home">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key ={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <button onClick={() => handledelete(blog.id)}>Delete blog</button>
                </div>
            ))}
        </div>
    );
}
 
export default BLogList;