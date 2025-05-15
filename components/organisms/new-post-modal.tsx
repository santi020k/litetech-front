'use client'

import { useState } from 'react'

import Image from 'next/image'

import { Button } from '@/components/atoms/button'
import { NewPostForm } from '@/components/molecules/new-post-form'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

import { api } from '@/lib/axios'

import { usePostStore } from '@/features/posts/store'

const MARKDOWN = String.raw`
# Curabitur sit amet sapien at velit fringilla tincidunt porttitor eget lacus. Sed mauris libero,
malesuada et venenatis vitae, porta ac enim. Curabitur sit amet sapien at velit fringilla
tincidunt porttitor eget lacus. Sed mauris libero, malesuada et venenatis vitae, porta ac enim.
Aliquam erat volutpat. Cras tristique eleifend dolor, et ultricies nisl feugiat sed. Pellentesque
blandit orci eu velit vehicula commodo. Phasellus imperdiet finibus ex eget gravida. Maecenas
vitae molestie dolor. Nulla hendrerit ipsum leo, in tempor urna interdum ut. Sed molestie sodales
quam. Mauris sollicitudin metus at eros imperdiet, vitae pulvinar nunc condimentum. Pellentesque
rhoncus, lacus sit amet mollis placerat, nulla lectus maximus justo, quis gravida elit augue id.

![imagen
blog](https://litetech-assets.s3.us-east-2.amazonaws.com/Image.png)

# Pellentesque venenatis arcu lectu Maecenas iaculis et dolor ac laoreet. Curabitur placerat porta
dolor. Quisque consectetur vitae odio ac posuere. Nullam tristique tellus purus, quis aliquet
purus sodales sed. Sed hendrerit gravida augue luctus suscipit. Maecenas id faucibus magna. Sed
placerat orci ac orci blandit, at porta ante ornare. Praesent tristique sollicitudin fringilla.
Morbi at laoreet enim, sed viverra ligula. Sed laoreet, elit vel faucibus semper, urna ante
euismod sem, accumsan volutpat augue ante ut elit. Phasellus rutrum, nulla vitae euismod blandit,
elit nisi placerat neque, vitae facilisis massa sapien a mi. Fusce sit amet blandit lectus.

![imagen
blog](https://litetech-assets.s3.us-east-2.amazonaws.com/Image2.png)

> Commodo eget mi. In orci nunc, laoreet eleifend sem vel, suscipitlon lorem ipsum
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sem in nunc porttitor dapibus a sollicitudin nunc.
Sed lacinia nisl a magna congue, maximus tristique tellus finibus.

# Nullam tristique tellus purus Maecenas iaculis et dolor ac laoreet. Curabitur placerat porta
dolor. Quisque consectetur vitae odio ac posuere. Nullam tristique tellus purus, quis aliquet
purus sodales sed. Sed hendrerit gravida augue luctus suscipit. Maecenas id faucibus magna. Sed
placerat orci ac orci blandit, at porta ante ornare. Praesent tristique sollicitudin fringilla.
Morbi at laoreet enim, sed viverra ligula. Sed laoreet, elit vel faucibus semper, urna ante
euismod sem, accumsan volutpat augue ante ut elit. Phasellus rutrum, nulla vitae euismod blandit,
elit nisi placerat neque, vitae facilisis massa sapien a mi. Fusce sit amet blandit lectus.
`

export enum Variant {
  DEFAULT = 'default',
  DARK = 'dark'
}

interface NewPostModalProps {
  variant?: Variant
}

export const NewPostModal = ({ variant }: NewPostModalProps) => {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const { refetchPosts } = usePostStore()

  const handleUpload = async (title: string, file: File) => {
    setLoading(true)

    setError(false)

    setProgress(0)

    const formData = new FormData()

    formData.append('title', title)

    formData.append('content', MARKDOWN)

    formData.append('image', file)

    try {
      await api.post('/posts', formData, {
        onUploadProgress: event => {
          const percent = Math.round((event.loaded * 100) / (event.total || 1))

          setProgress(percent)
        }
      })

      setProgress(100)

      await refetchPosts()

      setTimeout(() => {
        setOpen(false)

        setProgress(0)

        setLoading(false)
      }, 1000)
    } catch (_e) {
      console.error('🚀 ~ handleUpload ~ _e:', _e)

      setError(true)

      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className={`text-right text-base font-semibold transition hover:cursor-pointer hover:text-[#D8F34E] hover:no-underline ${variant === Variant.DEFAULT ? 'text-white' : 'text-black'}`}
        >
          New post
          <Image src="/icons/arrow-lime.svg" alt="arrow-lime" width={24} height={24} className="inline-block" />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-screen-sm rounded-none bg-[#D8F34E] p-10 text-black">
        <DialogHeader className="max-w-[480] gap-0">
          <DialogTitle className="mb-2 text-center text-4xl font-semibold text-[#240F35]">Upload your post</DialogTitle>
          <p className="text-center text-lg text-[#595959]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </DialogHeader>

        <NewPostForm
          onSubmit={handleUpload}
          loading={loading}
          progress={progress}
          error={error}
        />
      </DialogContent>
    </Dialog>
  )
}
