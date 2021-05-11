import React, {useState, VFC} from "react";
import {MenuItem, Select} from "@material-ui/core";
import {GENDER} from "../constants";
import {useHistory, useLocation} from 'react-router-dom';
import {injectParamsInUrl} from "../helpers";

const queryString = require('query-string');

export const SelectGender: VFC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const {search} = useLocation();

  const toggleSelect = () => setIsOpen((prev: boolean) => !prev);

  const querySearch = queryString.parse(search)

  const onSelect = (e: React.ChangeEvent<{value: unknown}>) => {
    const gender = e.target.value;

    const modifiedOldQuery = injectParamsInUrl(search, {gender: gender as string});
    const newQuery = '?' + queryString.stringify({gender})
    const emptyStatusQuery = queryString.exclude(search, ['gender'])

    const urlQuery = search.length ? modifiedOldQuery : newQuery;

    if (gender !== GENDER.no_info) {
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
      value={querySearch.gender || GENDER.no_info}
      onChange={onSelect}
    >
      <MenuItem value={GENDER.no_info}>No Info</MenuItem>
      <MenuItem value={GENDER.male}>Male</MenuItem>
      <MenuItem value={GENDER.female}>Female</MenuItem>
    </Select>
  )
}
