import styled, { createGlobalStyle } from 'styled-components'

import Post from '@/components/Post'

import { getData } from './api/feed'
import { ContentCard } from '@/types'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const PostsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0;
`

const PostItem = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 90%;
  max-width: 25rem;
  margin: 0 auto 1rem;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`
const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 4rem;
 }
`

type HomeProps = {
  cards: ContentCard[]
}

const Home = ({ cards }: HomeProps) => {
  console.log('client', { cards })

  return (
    <>
      <GlobalStyle />
      <PostsList>
        {cards.map((c) => (
          <PostItem key={c.id}>
            <Post
              author={`${c.textData.author.first} ${c.textData.author.last}`}
              date={c.metadata.publishDate}
              image={c.imageUri}
              title={c.textData.title}
              subtitle={c.textData.subTitle}
              body={c.textData.body}
              comments={c.comments}
            />
          </PostItem>
        ))}
      </PostsList>
    </>
  )
}
export default Home

export async function getServerSideProps() {
  const jsonData = await getData()
  return {
    props: {
      cards: jsonData,
    },
  }
}
