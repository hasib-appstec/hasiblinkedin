import {Avatar} from '@mui/material'
import React from 'react'
import NavIcons from './NavIcons'
import "./Post.css";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = () => {
  return (
    <>
      <div className='post'>
        <div className="post-header">
          <Avatar />
          <div className="post-info">
            <h2>Hasib</h2>
            <p>description</p>
          </div>
        </div>
        <div className="post-body">
          <p>message</p>
        </div>

        <div className="post-button">
          <NavIcons Icon={ThumbUpOffAltIcon} title="Like" />
          <NavIcons Icon={CommentIcon} title="Comment" />
          <NavIcons Icon={ShareIcon} title="Share" />
          <NavIcons Icon={SendIcon} title="Send" />

        </div>

      </div>

      <div className='post'>
        <div className="post-header">
          <Avatar />
          <div className="post-info">
            <h2>Hasib</h2>
            <p>description</p>
          </div>
        </div>
        <div className="post-body">
          <p>message</p>
        </div>

        <div className="post-button">
          <NavIcons Icon={ThumbUpOffAltIcon} title="Like" />
          <NavIcons Icon={CommentIcon} title="Comment" />
          <NavIcons Icon={ShareIcon} title="Share" />
          <NavIcons Icon={SendIcon} title="Send" />

        </div>

      </div>

      <div className='post'>
        <div className="post-header">
          <Avatar />
          <div className="post-info">
            <h2>Hasib</h2>
            <p>description</p>
          </div>
        </div>
        <div className="post-body">
          <p>message</p>
        </div>

        <div className="post-button">
          <NavIcons Icon={ThumbUpOffAltIcon} title="Like" />
          <NavIcons Icon={CommentIcon} title="Comment" />
          <NavIcons Icon={ShareIcon} title="Share" />
          <NavIcons Icon={SendIcon} title="Send" />

        </div>

      </div>
    </>
  )
}

export default Post