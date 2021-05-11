import React, {VFC} from "react";
import {ListItemText} from "@material-ui/core";

interface IProps {
  status: string
  gender: string;
}


export const PersonSecondaryInfo: VFC<IProps> = ({gender, status}) => {
  return (
    <ListItemText>{`Gender: ${gender} Status:${status}`}</ListItemText>
  )
}
