import React from 'react'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'
const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages} = props;

    const chat = chats && chats[activeChat];

    

    const renderReadReceipts = (message, isMyMessage) => {
         chat.people.map((person, index) => person.last_read === message.id && (
            <div 
                key={`read_${index}`}
                className='read-receipt'
                style={{
                    float: isMyMessage ? 'right' : 'else',
                    backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
                }}
            />
        ))
    }

    const renderMessages = () => {
        // Setiap messages ada key nya, keys variabel untuk mengambil key nya aja
        const keys = Object.keys(messages);
        // mengeluarkan semua messages beserta keynya
        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index-1]
            const isMyMessage = userName === message.sender.username

            // ini chat message nya / per message
            return (
                <div key={`msg_${index}`} style={{width: '100%'}}>
            
                    <div className='message-block'>
        
                        {
                            isMyMessage 
                            ? <MyMessage message={message}/> 
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                        }
                    </div>
                    {/* ini pembeda antara message orang dan message kita */}
                    <div className='read-receipts' style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>

                </div>
            )
        })
        
    }

    if(!chat) return <div />

  return (
    <div className='chat-feed'>
        {/* 1. Chat Title Container */}
        <div className='chat-title-container'>
            {/* Render Title */}
            {/* chat?.title , artinya kita harus sudah ada chat sblm akses .title variable */}
            <div className='chat-title'>{chat?.title}</div>
            {/* Render Chat SubTitle */}
            <div className='chat-subtitle'>
                {chat.people.map((person) => `${person.person.username} `)}
            </div>
        </div>
        {/* Messages */}
        {renderMessages()}
        <div style={{height: '100px'}}/>
        {/* Form untuk user kirim messages */}
        <div className="message-form-container">
            <MessageForm { ...props} chatId={activeChat}/>
        </div>
    </div>
  )
}

export default ChatFeed