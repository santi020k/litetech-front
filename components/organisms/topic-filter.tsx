'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'

const ALL_TOPICS = [
  'Diversity & Inclusion',
  'Tech companies',
  'Crypto',
  'Security',
  'Global',
  'Leaks'
]

export const TopicFilter = () => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const isSelected = (topic: string) => selectedTopics.includes(topic)

  const toggleTopic = (topic: string) => {
    if (isSelected(topic)) {
      setSelectedTopics(prev => prev.filter(t => t !== topic))
    } else {
      setSelectedTopics(prev => [...prev, topic])
    }
  }

  const handleAllClick = () => {
    setSelectedTopics([])
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-white">Topics</h3>
      <div className="scrollbar-hide overflow-x-auto">
        <div className="flex w-max flex-wrap gap-2">
          <button
            type="button"
            onClick={handleAllClick}
            className={cn(
              'rounded-full px-4 py-1 text-sm font-medium flex items-center gap-1 transition hover:cursor-pointer', selectedTopics.length === 0 ?
                'bg-[#D8F34E] text-black' :
                'border border-white/40 text-white'
            )}
          >
            All
            {selectedTopics.length === 0 && <span>×</span>}
          </button>

          {/* OTHERS */}
          {ALL_TOPICS.map(topic => (
            <button
              type="button"
              key={topic}
              onClick={() => toggleTopic(topic)}
              className={cn(
                'rounded-full px-4 py-1 text-sm font-medium flex items-center gap-1 transition-colors transition hover:cursor-pointer', isSelected(topic) ?
                  'bg-[#D8F34E] text-black' :
                  'border border-white/40 text-white/70'
              )}
            >
              {topic}
              {isSelected(topic) && <span>×</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
