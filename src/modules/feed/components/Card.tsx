import React, { useState } from 'react'
import styled from 'styled-components'
import { CardType } from '@/modules/feed/types'

import { formatRelativeTime } from '@/lib/date'
import { formatNumber } from '@/lib/number'

const CardWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  border-radius: 0.5rem;
`

const CardHeader = styled.div`
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

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  height: 20rem;
  max-height: 22rem;
  border-radius: 8px;
  object-fit: cover;
`

const CardTitle = styled.h2`
  margin: 0.5rem 0 0 0;
`

const CardSubtitle = styled.h4`
  margin: 0.5rem 0 0 0;
  color: #555;
`

const CardBody = styled.div`
  margin-top: 0.5rem;
`

const CardFooter = styled.div`
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

const Card = ({
  image,
  author,
  date,
  title,
  subtitle,
  body,
  comments,
}: CardType) => {
  const [showComments, setShowComments] = useState<boolean>(false)

  const toggleComments = () => {
    setShowComments(!showComments)
  }

  return (
    <CardWrapper>
      <CardHeader>
        <Author>{author}</Author>
        <Date>{formatRelativeTime(date)}</Date>
      </CardHeader>
      <CardImage src={image} alt={`${author} Card Image`} />
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
      <CardBody>{body}</CardBody>
      <CardFooter>
        <ToggleCommentsButton onClick={toggleComments}>
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </ToggleCommentsButton>
      </CardFooter>
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
              </CommentContent>
            </Comment>
          ))}
        </CommentsSection>
      )}
    </CardWrapper>
  )
}

export default Card
