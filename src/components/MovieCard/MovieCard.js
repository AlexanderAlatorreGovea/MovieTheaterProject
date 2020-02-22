import React from 'react';
import './MovieCard.scss'

const MovieList = (props) => {

    function  textLimit(str, length = 20) {
        const strArr = props.title.split(' ');
        return strArr.length < length ? str : strArr.filter((word, i) => i < length).join(' ') + '...';
    }
    console.log(props)
    return(
        <div className="MovieCard" style={{margin: '0', padding: '0'}}>
            <div className="MovieCard__container">
                 { props.image == null ? 
                    <div className="MovieCard--wrapper">
                    <div class="card__img"><span><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd" fill="#999"><path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"></path></svg></span></div>
                    </div> :  <div className="MovieCard--wrapper alternative-image">   <img className="searched-image" src={`http://image.tmdb.org/t/p/w342${props.image}`} style={{width: '100%', height: '100%' }}
                      /></div>
                }
            </div>
            <dd className="ml0 fw9 title">Blonde</dd>
            <dd className="ml0 gray star-rating">{props.searchQuery}</dd>
    </div>
    )
}

export default MovieList;


