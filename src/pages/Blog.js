import React from 'react';

class Blog extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [
        {
          title: 'Lorem Ipsum',
          desc: 'Lorem Ipsum'
        },{
          title: 'Lorem Ipsum',
          desc: 'Lorem Ipsum'
        },{
          title: 'Lorem Ipsum',
          desc: 'Lorem Ipsum'
        },{
          title: 'Lorem Ipsum',
          desc: 'Lorem Ipsum'
        }
      ]
    }
  }
  postsToDisplay = this.state.posts.map((post,i)=>{
    return(
      <div key={i}>
        <h4>{post.title}</h4>
        <p>{post.desc}</p>
      </div>
    )
  })
  render(){
    return(
      <div>
        {this.postsToDisplay}
      </div>
    )
  }
}

export default Blog