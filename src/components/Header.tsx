import React, {VFC} from "react";
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import {SelectStatus} from "./SelectStatus";
import {SelectGender} from "./SelectGender";
import {Search} from "./Search";
import {useHistory} from "react-router-dom";

const Logo: VFC = () => (
  <Typography variant="h6" component="h1">Rick and Morty</Typography>
)

export const Header:VFC = () => {
  const {location: { pathname }} = useHistory()

  return (
  <AppBar>
    <Toolbar>
      <div className="spaceBetween">
      <Logo/>
        {
          pathname === '/' ?
            <>
              <div className="searchGroup">
                <SelectStatus/>
                <SelectGender/>
                <Search/>
              </div>
              <Button href={'/bookmarks'} variant="contained">
                Bookmarks
              </Button>
            </>
            : (
                <Button href={'/'} variant="contained" >
                  List
                </Button>
            )
        }
      </div>
    </Toolbar>
  </AppBar>
)}
