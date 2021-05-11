import React, {VFC} from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

interface IProps {
  isSaved: boolean;
  toggleBookmarkItem: () => void;
}

export const BookmarkStar: VFC<IProps> = ({isSaved, toggleBookmarkItem}) => {
  if (isSaved) {
    return <StarIcon onClick={toggleBookmarkItem}/>
  } else {
    return <StarBorderIcon onClick={toggleBookmarkItem}/>
  }
}
