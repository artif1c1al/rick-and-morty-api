import React, {useEffect, useState, VFC} from "react";
import {Box, Container} from "@material-ui/core";
import {Pagination} from "@material-ui/lab";
import {IPerson} from "../types";
import {BASE_REQUEST_URL} from "../constants";
import {useHistory, useLocation} from 'react-router-dom';
import {injectParamsInUrl} from "../helpers";
import {PersonsList} from "../components/PersonsList";

const queryString = require('query-string');


export const MainPage: VFC = () => {
  const [results, setResults] = useState<IPerson[]>([]);
  const [pagesCount, setPagesCount] = useState(1);
  const {search} = useLocation()
  const history = useHistory()

  const searchQueryObj = queryString.parse(search)

  const urlQueryString = queryString.stringifyUrl({
    url: BASE_REQUEST_URL,
    query: {
      ...searchQueryObj
    }
  })

  useEffect(() => {
    const searchQuery = injectParamsInUrl(search, {page:  searchQueryObj.page ? searchQueryObj.page : 1})
    history.push(searchQuery)
  }, [])

  useEffect(() => {
    fetch(urlQueryString)
      .then(resp => resp.json())
      .then(data => {
        setResults(data.results)
        setPagesCount(data.info ? data.info.pages : 1)
      })
  }, [urlQueryString])

  const changePage = (_: any, page: number) => {
    const searchQuery = injectParamsInUrl(search, {page: page.toString()})
    history.push(searchQuery)
  }

  return (
    <Container>
      <Box mb={7}>
        <PersonsList personsList={results}/>
        <Pagination
          count={pagesCount || 1}
          page={parseInt(searchQueryObj.page, 10)}
          onChange={changePage}
          shape="rounded"
        />
      </Box>
    </Container>
  )
}
