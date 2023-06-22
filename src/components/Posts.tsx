import { useEffect, useState } from 'react'
import { useParams ,Link  } from 'react-router-dom';

interface Data {
    id: number;
    name: string;
}
export default function Posts() {
    const [posts, setPosts] = useState<Data[]>([])
    const { rId } = useParams();
    
    
    useEffect(() => {
        fetch('http://localhost:7070/posts')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
    }, []);

    console.log(posts)

    const List = posts.map(([rId, e], idx) => {
        return (<li key={rId} > 
        <Link to={`/Posts/${rId}`}>
        {e.content}</Link> 
        </li>
        )
    })

    return (
        <div>
            <h1>Главная</h1>
            {List}

        </div>
    )
}