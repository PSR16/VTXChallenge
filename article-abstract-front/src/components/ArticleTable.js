import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';

function ArticleTable({onArticleClick}) {
    const [message, setArticles] = useState([]);
    const [isBusy, setBusy] = useState(true)
   
    useEffect(() => {
        setBusy(true);
        fetch("/articles", {
            headers : { 
                'Accept': 'application/json'
            }
            }).then(res => {
                setBusy(false);
                if (res.ok){
                    return res.json();
                }
            }).then(jsonRes => {
                setArticles(jsonRes);
            })
    }, []);

    async function getAbstract(id) {
        await fetch('http://localhost:8080/articles/' + id, {
                method: 'GET',
                headers: { 
                    'Content-type': 'application/json'
                }
        }).then(res => res.json())
        .then(response =>  onArticleClick(response.text))
    }

    return (
        <div>
            <h1>Articles</h1>
            { 
                isBusy ?
                    <div> loading...</div>
                    :
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Type</th>
                                <th>Article ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {message && 
                                message.map((a, k) => (
                                    <tr key={a._id}>
                                        <td>{k+1}</td>
                                        <td>{a.type}</td>
                                        <td onClick={() => getAbstract(a.id)}>{a.id}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
            }
        </div>
    )
}

export default ArticleTable;