import React from "react";
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";

import { MainContainer } from "./styles";
import TableList from "../../components/TableList";

function createData(name, type, description) {
  return { name, type, description};
}

const Template = () => {

  const columns = [
    {
      title: 'Nome',
      key: 'name'
    },
    {
      title: 'Tipo',
      key: 'type'
    },
    {
      title: 'Descrição',
      key: 'description'
    }
  ];

  const rows = [
    createData("Frozen yoghurt", 241, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <MainContainer container justify="flex-end">
      <IconButton color="secondary" aria-label="add to shopping cart">
        <AddIcon />
      </IconButton>
      
      <TableList columns={columns} rows={rows} />
    </MainContainer>
  );
};

export default Template;
