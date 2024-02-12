import './App.css'
import data from './../../data.json'
import Comments from './CommentSection'
function App() {
  return(
    <>
    {
        data.comments.map((comment,index)=>{
          console.log(comment)
          let reply_class = 'hide'
          if(comment.replies != []){
            reply_class = 'reply-section'
          }
           return(
            <div className='comment-section'>
               <Comments data_comments = {comment} />
                <div className={reply_class}>
                  {comment.replies.map((reply) =>{
                         return(
                        <Comments data_comments={reply} />
                         )
                  })}
                </div>
            </div>
            
           )
      
           })

    }
    </>
    )
}

export default App
