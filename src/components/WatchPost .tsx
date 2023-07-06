import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom'

interface Data {
    id: number;
    name: string;
    content: string;
    created: any;
    
}
const WatchPost = () => {
    const navigation = useNavigate();
    const { id } = useParams();
    const [dataId, setData] = useState<Data>(Object);

    useEffect(() => {
        (async function () {
            fetch(`http://localhost:7070/posts/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(data => data.json())
                .then(res => setData(res))
        })();


    }, [id]);


    const onDelPost = () => {
        (async function () {
            fetch(`http://localhost:7070/posts/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })();
        navigation('/');
    }
   
    return (
        <>
            {Object.keys(dataId).map((i) => {
                return (
                    <div key={dataId[i].id}>
                        <Link to={'/'}>Назад</Link>
                        <div >
                            <div> Имя: <span>{dataId[i].name}</span></div>

                            <div>
                                <p> {dataId[i].content} </p>
                                <button>
                                    <Link
                                        to={`/posts/${id}/edit`}>
                                        Редактировать
                                    </Link>
                                </button >
                                <button onClick={() => onDelPost()}>
                                    Удалить
                                </button >
                                <span>{dataId[i].created}</span>
                            </div>
                        </div>
                    </div>
                )
            })}

            <br /><br />

        </>



    )

};

export default WatchPost;