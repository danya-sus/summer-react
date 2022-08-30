import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getQuotesData } from "./GetDataService";

const QuoteList = () => {
    const [author, setAuthor] = useState('');
    const [quotes, setQuotes] = useState({data: [], isLoading: false});

    const changeAuthor = ((e) => {
        setAuthor(() => e.target.author = e.target.value)
    })

    useEffect(() => {
        setQuotes((quotes) => ({...quotes, isLoading: true}));
        getQuotesData(author)
            .then((data) => {
                setQuotes((quotes) => ({...quotes, data, isLoading: false}));
            });
    }, []);

    return (
        <>
            <div class="menu">
                <input type="text" value={author} onChange={changeAuthor} className="characterName" placeholder="Enter author name"></input>
                <button onClick={() => {
                    setQuotes((quotes) => ({...quotes, isLoading: true}));
                    getQuotesData(author)
                        .then((data) => {
                            setQuotes((quotes) => ({...quotes, data, isLoading: false}));
                            });
                            }}>Search</button>
            </div>
            <div class="gallery">
                {quotes.data.map((x, i) => 
                    <div class="item" key={x.quote_id}>
                        <h2>Quote: {x.quote}</h2>
                        <p>Author: {x.author}</p>
                        <p>Series: {x.series}</p>
                    </div>)
                }
            </div>
        </>
    )
}

export default QuoteList;