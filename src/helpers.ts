import {IPerson} from "./types";
import {Dispatch, SetStateAction, useEffect, useState} from "react";

const queryString = require('query-string')

type TParams = Partial<Record<TParamsKeys, string>>
type TParamsKeys = 'status' | 'gender' | 'name' | 'page'


const resetPage = (params: TParams) => {
  const keys = ['status', 'gender', 'name']
  const shouldResetPage = keys.map(key => params.hasOwnProperty(key)).includes(true)
  if (shouldResetPage) {
    return {page: 1}
  }
  return {}
}

export const injectParamsInUrl = (url: string, params: TParams) => {
  const parsedUrl = queryString.parse(url)
  return (
    '?' + queryString.stringify({
      ...parsedUrl,
      ...params,
      ...resetPage(params),
    }))
}


export const getBookmarksList = (): IPerson[] => {
  return JSON.parse(localStorage.getItem('bookmarksList') as string);
}


export const useStickyState = <T>(defaultValue: T, key: string): [T, Dispatch<SetStateAction<T>>] => {
  const valueFromStorage = localStorage.getItem(key)

  const [value, setValue] = useState<T>(() => {
    return valueFromStorage !== null ? JSON.parse(valueFromStorage) : defaultValue
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}
