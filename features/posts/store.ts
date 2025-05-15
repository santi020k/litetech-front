import { api } from '@/lib/axios'

import { create } from 'zustand'

import { Post } from '@/types/post'

interface PostState {
  posts: Post[]
  loading: boolean
  page: number
  total: number
  fetchPosts: (page?: number) => Promise<void>
  initializePosts: (posts: Post[], total: number, page: number) => void
  refetchPosts: () => Promise<void>
}

export const usePostStore = create<PostState>((set, get) => ({
  posts: [],
  loading: false,
  page: 1,
  total: 0,

  initializePosts: (posts, total, page) => {
    set({ posts, total, page })
  },

  fetchPosts: async (page = 1) => {
    if (get().loading) return

    set({ loading: true })

    try {
      const { data, total } = await api.get(`/posts?page=${page}`).then(res => res.data)

      set(state => ({
        posts: page === 1 ? data : [...state.posts, ...data],
        page,
        total,
        loading: false
      }))
    } catch (err) {
      console.error(err)

      set({ loading: false })
    }
  },

  refetchPosts: async () => {
    const { fetchPosts } = get()

    await fetchPosts(1)
  }
}))
