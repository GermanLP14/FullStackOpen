import '../index.css'

const Notification = ({message}) => {
  
  if(message === null){
    return null
  }
  if(message.includes('error')){
    return (
      <div className='error'>
        {message}
      </div>
    )
  }else{
    return (
      <div className='success'>
        {message}
      </div>
    )
  }
  
}

export default Notification