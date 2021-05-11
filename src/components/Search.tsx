import {VFC} from "react";
import {TextField} from "@material-ui/core";
import {injectParamsInUrl} from "../helpers";
import {useHistory, useLocation} from "react-router-dom";

const queryString = require('query-string');

export const Search: VFC  = ()=> {
  const {search} = useLocation()
  const history = useHistory()

  const onInput = (e: any) => {
    const name = e.target.value
    const nameQuery = injectParamsInUrl(search, {name: name as string});

    history.push(nameQuery)
  }
  return (
      <TextField onChange={onInput}/>
  )
}
