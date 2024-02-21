'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ICategory } from '@/lib/database/models/category.model'
import { getAllCategories } from '@/lib/actions/category.action'
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils'

const CategoryFilter = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [category, setCategory] = useState<string>('')
  const [categories, setCategories] = useState<ICategory[]>([])

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();

      categoryList && setCategories(categoryList as ICategory[])
    }

    getCategories();
  }, [])

  const onSelectedCategory = async (category: string) => {
    let newUrl = ''
    if (category && category !== 'All') {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value: category
      })
    }
    else {
      newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ['category'],

      })
    }
    router.push(newUrl, { scroll: false })
  }
  return (
    <Select onValueChange={(value: string) => onSelectedCategory(value)}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem className='select-item p-regular-14' value="All">All</SelectItem>
        {
          categories?.map((category) => (
            <SelectItem
              className='select-item p-regular-14'
              value={`${category.name}`}
              key={category._id}
            >
              {category.name}
            </SelectItem>
          ))
        }
      </SelectContent>
    </Select>
  )
}

export default CategoryFilter