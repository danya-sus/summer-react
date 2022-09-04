
export const QuoteGalleryItem = (props) => {
    return (
        <div className="item">
            <h2>Quote: {props.quote}</h2>
            <p>Author: {props.author}</p>
            <p>Series: {props.series}</p>
        </div>
    )
}