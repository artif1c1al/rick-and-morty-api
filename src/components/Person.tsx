import React, {VFC} from "react";
import {Avatar, Link, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {PersonName} from "./PersonName";
import {IPerson} from "../types";
import {BookmarkStar} from "./BookmarkStar";
import {INDEX_NOT_FOUND} from "../constants";

interface IProps {
  person: IPerson;
  bookmarksList: IPerson[];
  toggleBookmarkItem: (person: IPerson) => void;
}

export const Person: VFC<IProps> = ({person, bookmarksList, toggleBookmarkItem}) => {
  const isSaved = Array.isArray(bookmarksList) && bookmarksList.findIndex(bookmark => bookmark.id === person.id) !== INDEX_NOT_FOUND

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={person.image} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Link href="#">
            {`${person.name} (${person.status})`}
          </Link>
        }
        secondary={
          <span>{`Gender: ${person.gender}`}</span>
        }
      />
      <BookmarkStar isSaved={isSaved} toggleBookmarkItem={() => toggleBookmarkItem(person)}/>
    </ListItem>
  )
}
