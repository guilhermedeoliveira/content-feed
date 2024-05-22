export type CardComment = {
  text: string
  author: string
  profilePic: string
  likes: number
}

export type Author = {
  first: string
  last: string
}

export type ContentCard = {
  id: string
  imageUri: string
  textData: {
    title: string
    subTitle: string
    body: string
    author: Author
  }
  metadata: {
    priority: number
    publishDate: string
  }
  comments: CardComment[]
}

export type CardType = {
  author: string
  image: string
  date: string
  title: string
  subtitle: string
  body: string
  comments: CardComment[]
}
