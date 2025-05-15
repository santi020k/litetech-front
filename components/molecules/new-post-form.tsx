'use client'

import { type ChangeEvent, useState } from 'react'

import { Button } from '@/components/atoms/button'
import { ImageLoader } from '@/components/atoms/image-loader'
import { Input } from '@/components/atoms/input'

interface NewPostFormProps {
  onSubmit: (title: string, file: File) => void
  loading?: boolean
  progress?: number
  error?: boolean
}

export const NewPostForm = ({ onSubmit, loading, progress = 0, error }: NewPostFormProps) => {
  const [title, setTitle] = useState('')
  const [file, setFile] = useState<File | null>(null)

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      setFile(event.target.files[0])
    }
  }

  const handleSubmit = () => {
    if (!title || !file) return

    onSubmit(title, file)
  }

  return (
    <div className="space-y-4 px-20">
      <Input
        placeholder="Post Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="h-14 rounded-none bg-[#ffffff] px-4 py-2 text-base outline-none transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
      />

      {!loading && !error && !(progress === 100) && (
        <>
          <label className="flex h-14 cursor-pointer place-content-center items-center border border-black px-4 py-2">
            Upload image ↑
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFile}
            />
          </label>

          {file ?
            (
              <p className="text-sm text-black">
                Selected:
                {file.name}
              </p>
            ) :
            null}
        </>
      )}

      {loading ? <ImageLoader progress={progress} status="loading" /> : null}
      {error ? <ImageLoader progress={0} status="error" /> : null}
      {!loading && !error && progress === 100 && <ImageLoader progress={100} status="done" />}

      <div className="flex justify-center">
        <Button className="w-full rounded-none bg-black px-8 py-6 text-lg font-bold text-white transition hover:cursor-pointer md:w-auto" onClick={handleSubmit} disabled={!title || !file || loading}>
          Confirm
        </Button>
      </div>
    </div>
  )
}
