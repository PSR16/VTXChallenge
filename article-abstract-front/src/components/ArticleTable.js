import React, { useState, useEffect } from 'react';

function ArticleTable() {
    const [message, setArticles] = useState([]);
    const [isBusy, setBusy] = useState(true)
    const [abstract, setAbstract] = useState('')
    //const res = await fetch('http://localhost:8080/articles')
    //const articles = await res.json();
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
        .then(response =>  setAbstract(response))
    }

    return (
        <div>
            { 
                isBusy ?
                    <div> waiting...</div>
                    : <table>
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
                    </table>
            }
        </div>
    )
}

export default ArticleTable;