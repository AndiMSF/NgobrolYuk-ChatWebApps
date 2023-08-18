import React from 'react'

const MyMessage = ({ message }) => {
    // Check apakah message ini image / text
    // ini if nya menyatakan kalau ini adalah gambar akan return img tags
    if(message.attachments && message.attachments.length > 0) {
        return (
            <img src={message.attachments[0].file} alt="message-attachment" className='message-image' style={{float: 'right'}}/>
        )
    }

  return (
    
    <div className='message' style={{float:'right', marginRight:'18px', color:'black', backgroundColor:'#fff'}}>{message.text}</div>
   
  )
}

export default MyMessage