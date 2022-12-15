import { useEffect, useState } from "react";
import BLogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipum....', author: 'mario', id: 1},
        {title: 'welcome party!', body: 'lorem ipum....', author: 'yoshi', id: 2},
        {title: 'web dev top tips', body: 'lorem ipum....', author: 'mario', id: 3},
    ]);

    const handledelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(() => {
        console.log('use effect ran');
        console.log(blogs);
    }, []);

    return (
        <div className="home">
            <BLogList blogs={blogs} title="All Blogs!" handledelete={handledelete} />
        </div>
    );
}
 
export default Home;