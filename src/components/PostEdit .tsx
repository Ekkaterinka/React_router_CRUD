import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';

interface Data {
    id: number;
    name: string;
    content: string;
    created: any;
}

const PostEdit = () => {

    const { id } = useParams();
    const [data, setData] = useState<Data>(Object);
    const goTo = useNavigate();

    useEffect(() => {
        (async function () {
            fetch(`http://localhost:7070/posts/${id}`)
                .then(data => data.json())
                .then(setData)
        })();
    }, [id])

    const onSaveData = (e: any) => {
        e.preventDefault();
        const target = e.target;
        const content = target.content.value;
        (async function () {
            await fetch(`http://localhost:7070/posts/${id}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ content })
            })
        })();
        goTo(-1);
    }

    return (
        <>
            {Object.keys(data).map((i) => {
                return (
                    <div key={data[i].id}>
                        <div > Имя:{data[i].name}</div>
                        <div >
                            <form onSubmit={(e) => onSaveData(e)}>
                                <h5>Контент:</h5>
                                <textarea type={'text'}
                                    name='content' cols="20" rows="5">{data[i].content}</textarea>
                                <span>
                                    <Link
                                        to={`/posts/${id}`}
                                    >
                                        отмена
                                    </Link>
                                </span>
                                <button
                                    type="submit"
                                >
                                    сохранить
                                </button>
                            </form>
                            <span >{data[i].created}</span>
                        </div>
                    </div>)
            }
            )
            }
        </>)
};

export default PostEdit;