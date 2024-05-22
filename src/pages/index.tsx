import styled, { createGlobalStyle } from 'styled-components'

import Card from '@/modules/feed/components/Card'

import { feedService } from '@/modules/feed/data/service'
import { ContentCard } from '@/modules/feed/types'

const CardsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0;
`

const CardItem = styled.li`
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

const Home = ({ cards }: HomeProps) => (
  <>
    <GlobalStyle />
    <CardsList>
      {cards.map((c) => (
        <CardItem key={c.id}>
          <Card
            author={`${c.textData.author.first} ${c.textData.author.last}`}
            date={c.metadata.publishDate}
            image={c.imageUri}
            title={c.textData.title}
            subtitle={c.textData.subTitle}
            body={c.textData.body}
            comments={c.comments}
          />
        </CardItem>
      ))}
    </CardsList>
  </>
)

export default Home

export async function getServerSideProps() {
  const feedData = await feedService()

  return {
    props: {
      cards: feedData,
    },
  }
}
