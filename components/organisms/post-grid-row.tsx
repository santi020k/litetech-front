import { PostCard } from '@/components/molecules/post-card'

import { Post } from '@/types/post'

interface PostGridRowProps {
  posts: Post[]
  reversed?: boolean
}

export const PostGridRow = ({ posts, reversed = false }: PostGridRowProps) => {
  const [large, small1, small2] = posts

  return (
    <div
      className={`grid grid-cols-1 gap-8 lg:grid-cols-3 lg:grid-rows-2 ${
        reversed ? 'lg:[direction:rtl]' : ''
      }`}
    >
      {large ?
        (
          <div
            className={`lg:col-span-2 lg:row-span-2 ${
              reversed ? 'lg:[direction:ltr]' : ''
            }`}
          >
            <PostCard post={large} />
          </div>
        ) :
        null}

      {small1 ?
        (
          <div className={reversed ? 'lg:[direction:ltr]' : ''}>
            <PostCard post={small1} />
          </div>
        ) :
        null}
      {small2 ?
        (
          <div className={reversed ? 'lg:[direction:ltr]' : ''}>
            <PostCard post={small2} />
          </div>
        ) :
        null}
    </div>
  )
}
