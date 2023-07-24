import { useQuery } from '@apollo/client'
import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  GetCollectionListDocument,
  GetCollectionListQuery,
  GetCollectionListQueryVariables,
} from '../generated/graphql'

type CollectionContextProps = {
  collectionData: any
  collectionOption: any
  updateCollection: (newCollection: any) => void
  convertToDropdown: (colIndex: any) => void
}

const initial: CollectionContextProps = {
  collectionData: [],
  collectionOption: [],
  updateCollection: () => {},
  convertToDropdown: () => {},
}

const CollectionContext = createContext(initial)

interface ModalProps {
  children: ReactNode
}

export const CollectionProvider: React.FC<ModalProps> = ({ children }) => {
  const [colData, setColData] = useState([])
  const [option, setOption] = useState([])

  const { data, loading } = useQuery<
    GetCollectionListQuery,
    GetCollectionListQueryVariables
  >(GetCollectionListDocument, {
    variables: { userId: 1 },
  })
  const result = data?.MediaListCollection?.lists

  // get collection from graphql or local storage
  const getCollectionData = useCallback(() => {
    const collectionLocal: any = localStorage.getItem('collection')
    if (!collectionLocal) {
      const parse: any = JSON.stringify(result)
      localStorage.setItem('collection', parse)
      setColData(JSON.parse(parse))
    } else {
      setColData(JSON.parse(collectionLocal))
    }
  }, [loading])

  const collectionData = useMemo(() => colData, [colData])
  const collectionOption = useMemo(() => option, [option])

  // convert to collection dropdown list by aniem id
  const convertToDropdown = useCallback(
    (colIndex: any) => {
      const lists: any = []
      colData.forEach((cdata: any, index: number) => {
        if (!colIndex.some((cIndex: any) => cIndex === index)) {
          lists.push({
            value: cdata.name,
            label: cdata.name,
          })
        }
      })
      setOption(lists)
    },
    [colData],
  )

  // save data to local storage
  const updateCollection = useCallback((newCollection: any) => {
    console.log(newCollection)
    setColData(newCollection)
    localStorage.setItem('collection', JSON.stringify(newCollection))
    console.log('updated..')
  }, [])

  useEffect(() => {
    if (!loading) getCollectionData()
  }, [loading])

  // useEffect(() => {
  //   convertToDropdown()
  // }, [convertToDropdown])

  return (
    <CollectionContext.Provider
      value={{
        collectionData,
        collectionOption,
        updateCollection,
        convertToDropdown,
      }}
    >
      {children}
    </CollectionContext.Provider>
  )
}

export const useCollection = () => {
  return useContext(CollectionContext)
}
