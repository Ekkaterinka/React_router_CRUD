import { useState, useEffect } from 'react'
import {Link } from "react-router-dom";

export default function New() {
    const [content, setContent] = useState('');
    const addPost = () => {
        if (content) {
            fetch('http://localhost:7070/posts', {
                method: 'POST',
                body: JSON.stringify({"content": content
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
        };
    }

    return (
        <div>
            <form>
                <div>
                    <textarea name="newPost" />
                    <Link to={'/'}><button onClick={addPost}>Опубликовать</button></Link>
                    <Link to={'/'}><button>x</button></Link>                   
                </div>
            </form>
        </div>
    )
}
