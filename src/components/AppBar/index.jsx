import React from "react";

import {
  AppBarStyle,
  ToolbarTitleStyle,
  ToolbarStyle,
  LinkStyle,
} from "./styles";

export const AppBar = () => {
  return (
    <AppBarStyle position="static" color="default" elevation={0}>
      <ToolbarStyle>
        <ToolbarTitleStyle variant="h6" color="inherit" noWrap>
          Westwing
        </ToolbarTitleStyle>

        <nav>
          <LinkStyle variant="button" color="textPrimary" href="templates">
            Templates
          </LinkStyle>

          <LinkStyle variant="button" color="textPrimary" href="vouchers">
            Vouchers
          </LinkStyle>
        </nav>
      </ToolbarStyle>
    </AppBarStyle>
  );
};

export default AppBar;
