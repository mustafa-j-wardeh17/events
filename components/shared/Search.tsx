'use client'

import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'



const Search = ({ placeholder = 'Search title...' }: { placeholder?: string }) => {
  const router = useRouter()
  const [query, setQuery] = useState<string>('')
  const searchParams = useSearchParams()

  useEffect(() => {
    const delayDebounceFunction = setTimeout(() => {
      let newUrl = '';
      if (query) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'query',
          value: query.trim(),
        })
      }
      else if (query === '') {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ['query']
        })
      }
      router.push(newUrl, { scroll: false })
    }, 300)
    return () => clearTimeout(delayDebounceFunction)
  }, [query, router, searchParams])

  return (
    <div className="flex-center min-h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
      <Image src="/assets/icons/search.svg" alt="search" width={24} height={24} />
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        className="p-regular-16 border-0 bg-grey-50 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>

  )
}

export default Search