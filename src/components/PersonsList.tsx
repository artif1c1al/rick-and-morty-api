import {Box, List} from "@material-ui/core";
import {Person} from "./Person";
import React, {VFC} from "react";
import {IPerson} from "../types";
import {useStickyState} from "../helpers";
import {INDEX_NOT_FOUND} from "../constants";

interface IProps {
  personsList?: IPerson[]
}

export const PersonsList: VFC<IProps> = ({personsList}) => {
  const [bookmarksList, setBookmarksList] = useStickyState<IPerson[]>([], 'bookmarksList');

  const list = personsList ? personsList : bookmarksList

  const toggleBookmarkItem = (person: IPerson) => {
    if (Array.isArray(bookmarksList) && bookmarksList.length > 0) {
      const index = bookmarksList.findIndex((bookmark) => bookmark.id === person.id)
      if (index === INDEX_NOT_FOUND) {
        setBookmarksList([...bookmarksList, person])
      } else {
        setBookmarksList(bookmarksList.filter(bookmark => bookmark.id !== person.id))
      }
    } else {
      setBookmarksList([person])
    }
  }


  return (
    <Box mb={5}>
      <List>
        {
          list && list.map((person) => (
            <Person
              person={person}
              bookmarksList={bookmarksList}
              toggleBookmarkItem={toggleBookmarkItem}
              key={person.id}/>
          ))
        }
      </List>
    </Box>
  )
}
