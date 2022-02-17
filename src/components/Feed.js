import React from 'react'
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import FeedOption from './FeedOption';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FeedIcon from '@mui/icons-material/Feed';
import Post from './Post';

const Feed = () => {

  const uploadFile = () => {
    document.getElementById("selectFile").click()
  }
  return (
    <div className='feed'>
      <div className="feed-inputContainer">
        <div className="feed-Input">
          <CreateIcon />

          <form action="">
            <input type="text" />
            <button type='submit'>send</button>
          </form>
        </div>
        <div className="feed-inputOptions">
          <div onClick={uploadFile}>
            <input id='selectFile' style={{display: "none"}} type="file" accept="image/*" />
            <FeedOption Icon={ImageIcon} title="Photo" color="#7085f9" />
          </div>
          <FeedOption Icon={VideoLibraryIcon} title="Video" color="#70db70" />
          <FeedOption Icon={EventNoteIcon} title="Event" color="#ffaa80" />
          <FeedOption Icon={FeedIcon} title="Write article" color="#ff6666" />
        </div>
      </div>

      <Post />

    </div>
  )
}

export default Feed