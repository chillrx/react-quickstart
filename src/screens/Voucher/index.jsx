import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import TableList from "../../components/TableList";

const Template = () => {
  return (
    <Grid container>
      <Button variant="contained">
          Adicionar
      </Button>

      <TableList />
    </Grid>
  );
};

export default Template;
