import styled, { createGlobalStyle } from 'styled-components'

import Card from '@/modules/feed/components/Card'

import { feedService } from '@/modules/feed/data/service'
import { ContentCard } from '@/modules/feed/types'

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
  posts: ContentCard[]
}

const Home = ({ posts }: HomeProps) => (
  <>
    <GlobalStyle />
    <PostsList>
      {posts.map((p) => (
        <PostItem key={p.id}>
          <Card
            author={`${p.textData.author.first} ${p.textData.author.last}`}
            date={p.metadata.publishDate}
            image={p.imageUri}
            title={p.textData.title}
            subtitle={p.textData.subTitle}
            body={p.textData.body}
            comments={p.comments}
          />
        </PostItem>
      ))}
    </PostsList>
  </>
)

export default Home

export async function getServerSideProps() {
  const feedData = await feedService()

  return {
    props: {
      posts: feedData,
    },
  }
}
