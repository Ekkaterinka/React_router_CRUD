import { Link, useNavigate } from 'react-router-dom';

const AddPost = () => {

    const goToHome = useNavigate();
    const postData = (e: any) => {
        e.preventDefault();
        const target = e.target;
        (async function () {
            const post = {
                name: target.name.value,
                content: target.content.value
            }
            await fetch('http://localhost:7070/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            });
        })();
        goToHome('/')
    }

    return (
        <div>
            <h3> Создать пост </h3>
            <form method='POST' id='add-post' onSubmit={(e) => postData(e)}>
                <input placeholder='Введите ваше имя' type={'text'} name='name' />
                <input placeholder='Введите что-нибудь' type={'text'} name='content' />
                <div >
                    <Link to={'/'}> х</Link>
                    <button type='submit'> Опубликовать </button>
                </div>
            </form>
        </div>
    )
};

export default AddPost;