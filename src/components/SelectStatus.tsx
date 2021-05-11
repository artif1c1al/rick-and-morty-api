import React, {useState, VFC} from "react";
import {useHistory, useLocation} from 'react-router-dom';
import {MenuItem, Select} from "@material-ui/core";
import {STATUS} from "../constants";
import {injectParamsInUrl} from "../helpers";

const queryString = require('query-string');


export const SelectStatus: VFC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const {search} = useLocation()

  const querySearch = queryString.parse(search)

  const toggleSelect = () => setIsOpen((prev: boolean) => !prev);

  const onSelect = (e: React.ChangeEvent<{value: unknown}>) => {
    const status = e.target.value;

    const modifiedOldQuery = injectParamsInUrl(search, {status: status as string});
    const newQuery = '?' + queryString.stringify({status})
    const emptyStatusQuery = queryString.exclude(search, ['status']);

    const urlQuery = search.length ? modifiedOldQuery : newQuery;

    if (status !== STATUS.no_info) {
      history.push(urlQuery)
    } else {
      history.push(emptyStatusQuery)
    }
  }

  return (
    <Select
      open={isOpen}
      onOpen={toggleSelect}
      onClose={toggleSelect}
      value={querySearch.status || STATUS.no_info}
      onChange={onSelect}
      >
      <MenuItem value={STATUS.no_info}>No Info</MenuItem>
      <MenuItem value={STATUS.dead}>Dead</MenuItem>
      <MenuItem value={STATUS.alive}>Alive</MenuItem>
      <MenuItem value={STATUS.unknown}>unknown</MenuItem>
    </Select>
  )
}
