import { render } from "react-dom";
import { useState } from "react"
import QuoteGallery from "./QuoteGallery";

const QuoteMenu = () => {
    const [author, setAuthor] = useState('');

    const changeAuthor = (e) => {
        setAuthor(() => e.target.author = e.target.value)
    }

    function renderQuoteGallery() {
        render(<QuoteGallery author={author} />, document.getElementById('quoteGalleryBlock'));
    }

    return (
        <>
            <div className="menu">
                <input type="text" value={author} onChange={changeAuthor} className="characterName" placeholder="Enter author name"></input>
                <button onClick={() => renderQuoteGallery()}>Search</button>
            </div>
            <div id='quoteGalleryBlock'></div>
        </>
    )
}

export default QuoteMenu;