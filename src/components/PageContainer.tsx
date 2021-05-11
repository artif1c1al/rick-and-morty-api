import {ReactNode, VFC} from "react";
import {Box} from "@material-ui/core";

interface IProps {
  children: ReactNode
}

export const PageContainer: VFC<IProps> = ({children}) => {
  return (
    <Box mt={10}>
      {children}
    </Box>
  )
}
