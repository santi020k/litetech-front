interface ImageLoaderProps {
  progress: number
  status?: 'loading' | 'error' | 'done'
}

export const ImageLoader = ({ progress, status = 'loading' }: ImageLoaderProps) => {
  const barColor = status === 'error' ? 'bg-red-500' : 'bg-black'

  return (
    <div className="mb-12 mt-10 flex w-full flex-col gap-6">
      {status === 'error' && (
        <p className="text-sm text-red-500">Failed to upload your file</p>
      )}
      {status === 'loading' && (
        <div className="text-sm text-black">
          Loading image
          {progress}
          %
        </div>
      )}
      {status === 'done' && (
        <div className="text-sm text-green-600">Upload successful ✓</div>
      )}
      <div>
        <div className="relative h-2 w-full overflow-hidden bg-gray-200">
          <div
            className={`h-full ${barColor}`}
            style={{ width: `${progress}%` }}
          />
        </div>
        {status === 'error' && (
          <div className="mt-1 cursor-pointer text-right text-sm text-black underline">Retry</div>
        )}
      </div>
    </div>
  )
}
