import { Link} from 'react-router-dom';
import { useState } from 'react'

export default function EditPost({ id }: { id: any }) {
    const [content, setContent] = useState('');
    const editPost = () => {

        fetch(`http://localhost:7070/posts/${id}`, {
            method: 'POST',
            body: JSON.stringify({
                content: content,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
    };

    const Edit =
        <form action="">
            <textarea name="post" id="" cols={30} rows={10}
                value={content} onChange={event => setContent(event.target.value)}></textarea>
            <button onClick={editPost}>Сохранить</button>
            <Link to="/post"><button>x</button></Link>
        </form>
    return (
        <div>{Edit}</div>
    )
}
