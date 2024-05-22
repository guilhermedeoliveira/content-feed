import React, { useState } from 'react'
import styled from 'styled-components'

import { formatRelativeTime } from '@/helpers/date'
import { formatNumber } from '@/helpers/number'

const PostWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  border-radius: 0.5rem;
`

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

const Author = styled.div`
  font-weight: bold;
`

const Date = styled.div`
  color: #777;
  font-size: 0.9em;
`

const PostImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 22rem;
  border-radius: 8px;
  object-fit: cover;
`

const PostTitle = styled.h2`
  margin: 0.5rem 0 0 0;
`

const PostSubtitle = styled.h4`
  margin: 0.5rem 0 0 0;
  color: #555;
`

const PostBody = styled.div`
  margin-top: 0.5rem;
`

const PostFooter = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ToggleCommentsButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

const CommentsSection = styled.div`
  margin-top: 0.75rem;
`

const Comment = styled.div`
  border-top: 1px solid #eee;
  padding: 0.5rem 0;
  display: flex;
  align-items: flex-start;
`

const CommentProfilePic = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`

const CommentContent = styled.div``

const CommentAuthor = styled.div`
  font-weight: bold;
`

const CommentText = styled.div`
  margin-top: 0.5rem;
`

const CommentLikes = styled.div`
  color: #777;
  font-size: 0.8em;
  margin-top: 0.5rem;
`

const Post = ({ image, author, date, title, subtitle, body, comments }) => {
  const [showComments, setShowComments] = useState<boolean>(false)

  const toggleComments = () => {
    setShowComments(!showComments)
  }

  return (
    <PostWrapper>
      <PostHeader>
        <Author>{author}</Author>
        <Date>{formatRelativeTime(date)}</Date>
      </PostHeader>
      <PostImage src={image} alt={`${author} Post Image`} />
      <PostTitle>{title}</PostTitle>
      <PostSubtitle>{subtitle}</PostSubtitle>
      <PostBody>{body}</PostBody>
      <PostFooter>
        <ToggleCommentsButton onClick={toggleComments}>
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </ToggleCommentsButton>
      </PostFooter>
      {showComments && (
        <CommentsSection>
          {comments.map((comment, index) => (
            <Comment key={`${comment.author}-${index}`}>
              <CommentProfilePic
                src={comment.profilePic}
                alt={`${comment.author} Profile Pic`}
              />
              <CommentContent>
                <CommentAuthor>{comment.author}</CommentAuthor>
                <CommentText>{comment.text}</CommentText>
                <CommentLikes>{formatNumber(comment.likes)} likes</CommentLikes>
                {/* <CommentLikes>{comment.likes} likes</CommentLikes> */}
              </CommentContent>
            </Comment>
          ))}
        </CommentsSection>
      )}
    </PostWrapper>
  )
}

export default Post
