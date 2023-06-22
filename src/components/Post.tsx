import { Link, Navigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

export default function Post({ id }: { id: any }) {
    const [post, setPost] = useState({});
    const { rId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:7070/posts/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPost(data);
            })
    }, [rId]);

    if (!post) return (
        <div>Не найдено, перейти к <Link to='/'>списку постов</Link></div>
    )

    const deleteNote = () => {
        fetch(`http://localhost:7070/notes/${id}`, {
            method: "DELETE",
        })
            .then(response => response.text())
            .then(() => {
                setPost({}
                )
            })
        if (!setPost) return <Navigate to={'/'} />
    }



    return (
        <div>
            <p>{post.content}</p>
            <Link to="/edit"> <button>Редактировать</button></Link>
            <button onClick={deleteNote}>Удалить</button>
        </div>
    )
}
