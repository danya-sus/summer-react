const breackingBadApiUrl = 'https://www.breakingbadapi.com/api/';

export const getCharactersData = (props) => {
    return fetch(breackingBadApiUrl + 'characters?name=' + props.trim().replace(" ", "+"))
            .then(res => res.json())
            .then(result => result)
            .catch(error => console.error(error));
}

export const getCharacterData = (props) => {
    return fetch(breackingBadApiUrl + 'characters/' + props.trim())
    .then(res => res.json())
    .then(result => result)
    .catch(error => console.error(error));
}

export const getEpisodesData = (props) => {
    return fetch(breackingBadApiUrl + 'episodes?series=' + props.trim().replace(" ", "+"))
            .then(res => res.json())
            .then(result => result)
            .catch(error => console.error(error));
}

export const getQuotesData = (props) => {
    if (props == '') {
        return fetch(breackingBadApiUrl + 'quotes')
            .then(res => res.json())
            .then(result => result)
            .catch(error => console.error(error));
    }
    return fetch(breackingBadApiUrl + 'quote?author=' + props.trim().replace(" ", "+"))
            .then(res => res.json())
            .then(result => result)
            .catch(error => console.error(error));
}