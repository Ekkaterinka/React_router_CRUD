import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const Posts = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        (async function () {
            fetch('http://localhost:7070/posts/',)
                .then(data => data.json())
                .then(setPost);
        })();
    }, []);

    return (
        <>
            <div >
                <h2 > Главная
                    <Link to={'/posts/new'}>
                        Создать пост</Link>
                </h2>
            </div>
            <div >
                {post.map(({ name, content, created, id }) => {
                    return (
                        <div key={id}>
                            <Link key={id} to={'/posts/' + id}  >
                                <div> Имя: <span>{name}</span>

                                </div>
                                <div >
                                    <p> {content} </p>
                                    <span>{created}</span>
                                </div>
                            </Link>
                        </div>

                    )
                })}
            </div>
        </>
    )
};

export default Posts;