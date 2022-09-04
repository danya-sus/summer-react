import { useEffect, useState } from "react"
import { getQuotesData } from "./GetDataService";
import { QuoteGalleryItem } from "./QuoteGalleryItem";

function QuoteGallery(props) {
    const author = props.author;
    const [quotes, setQuotes] = useState({data: [], isLoading: false});

    useEffect(() => {
        setQuotes((quotes) => ({...quotes, isLoading: true}));
        getQuotesData(author)
            .then((data) => {
                setQuotes((quotes) => ({...quotes, data, isLoading: false}));
            });
    }, []);

    let element = (
        <div className="gallery">
            {quotes.data.map((x, i) => 
              <QuoteGalleryItem key={x.quote_id} quote={x.quote} author={x.author} series={x.series}/>
            )}
        </div>
    );

    return element;
}

export default QuoteGallery;