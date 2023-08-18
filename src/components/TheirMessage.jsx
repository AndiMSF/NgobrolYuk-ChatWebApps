import React from 'react'

const TheirMessage = ({lastMessage, message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username
  return (
    // ini kita buat message box nya orang lain selain kita
    <>
    {isFirstMessageByUser && (
        <p className='message-name' style={{marginLeft:'16px', marginBottom:'8px'}}>{message.sender.username}</p>
    )}
    <div className='message-row'>

        {isFirstMessageByUser && (
            <>
            
            <div 
            className='message-avatar'
            style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
            />
            </>
        )}

        {/* Check Kondisi kalau gambar return tag img, kalau text biasa return div message */}
        {message.attachments && message.attachments.length > 0
            ? (
                
                <img src={message.attachments[0].file} alt="message-attachment" className='message-image' style={{marginLeft: isFirstMessageByUser ? '4px' :  '48px'}}/>
            ) : (
                <div className='message' style={{float:'left', marginLeft: isFirstMessageByUser ? '4px' :  '48px'}}>{message.text}</div>
            )
        }
    </div>
    </>
  )
}

export default TheirMessage