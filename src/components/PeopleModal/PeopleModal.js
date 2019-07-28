import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import './PeopleModal.scss';

const modalRoot = document.getElementById('people-modal')

class PeopleModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        personInfo: '',
    };
    this.apiKey = '745fff882d6434c78ae4843ae559ef06'
 }

  el = document.createElement('div')
  componentWillMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/person/${this.props.id}?api_key=${this.apiKey}&language=en-US`).then(res => {
      console.log(res.data)
      this.setState({ 
        personInfo: res.data.biography
      })
  })
  }

  truncateTitle = (title, limit = 300) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);

        // return the result
        return `${newTitle.join(' ')} ...`;
    }
    return title;
  }


  render() {
  const { onClose, backDrop, personImage, modalId, name, character } = this.props;
  const imgURL= 'http://image.tmdb.org/t/p/w780';
  return ReactDOM.createPortal(
        <div
        style={{
          position: 'fixed',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.99)',
          zIndex: '100',
          height: '100vh'
        }} 
        onClick={onClose}
      >
        <svg onClick={onClose} className="x" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"><path d="M.75.75l13.5 13.5M14.25.75L.75 14.25"></path></g></svg>
            <div class="movie_card" id="bright" key={modalId} >
                <div class="info_section">
                    <div class="movie_header">
                        <img style={{ borderRadius: '10px'}} class="locandina" src={`${imgURL}${personImage}`}/>
                        <h1>{name}</h1>
                        <h4>2019, {character}</h4>
                        <span class="minutes">{this.props.time}</span>
                        <p class="type">Action, Crime, Fantasy</p>
                    </div>
                    <div class="movie_desc">
                        <p class="text">
                            {this.state.personInfo ? this.truncateTitle(this.state.personInfo) : this.props.overview} 
                        </p>
                    </div>
                    <div class="movie_social">
                        <ul>
                            <li><i class="share alternate icon"></i></li>
                            <li><i class="heart icon"></i></li>
                            <li><i class="comment icon"></i></li>
                        </ul>
                    </div>
                </div>
                <div 
                  style={{ background: `url('${imgURL}${backDrop}')`}}         
                  class="blur_back bright_back"></div>
            </div>
        </div>,
      this.el
    )
  }
}

export default PeopleModal;


