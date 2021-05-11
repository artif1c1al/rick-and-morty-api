import React, {VFC} from "react";
import {Container} from "@material-ui/core";
import {PersonsList} from "../components/PersonsList";


export const BookmarksPage: VFC = () => {
  return (
    <Container>
      <PersonsList />
    </Container>
  )
}
