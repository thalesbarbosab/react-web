import React, { Component } from 'react'
import api from '../services/api'
import './feed.css'
import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

class Feed extends Component {
  state = {
    feed: []
  }

  async componentDidMount() {
    const response = await api.get('/posts')
    this.setState({ feed: response.data })
  }
  render() {
    return (
      <section id='post-list'>
        {this.state.feed.map(post => (
          <article key={post._id}>
          <header>
            <div className='user-info'>
              <span>{post.author}</span>
              <span className='place'>{post.place}
              </span>
            </div>
            <img src={more} alt='Mais' />
          </header>
          <img 
          src={`http://localhost:3333/files/${post.image}`}
                alt='' />
          <footer>
            <div className='actions'>
              <img src={like} alt=''/>
              <img src={comment} alt=''/>
              <img src={send} alt=''/>
            </div>
            <strong>{post.likes}</strong>
            <p>
              {post.description}
            </p>
            <span>
              {post.hashtags}
            </span>
          </footer>

        </article>

        ))}
        

      </section>
    )
  }
}

export default Feed