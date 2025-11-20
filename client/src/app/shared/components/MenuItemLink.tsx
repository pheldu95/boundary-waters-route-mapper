import { MenuItem } from "@mui/material";
import type { ReactNode } from "react";
import { NavLink } from "react-router";

export default function MenuItemLink({children, to}: {children: ReactNode, to: string}) {
  return (
    <MenuItem
        component={NavLink}
        to={to}
        sx={{
            fontSize: '1.2rem',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: 'inherit',
            '&.active': { //if class is active, as in the user clicked on this on the navbar
                //then the color will turn yellow to show the user where they are
                color: 'yellow'
            }
        }}
    >
        {children}
    </MenuItem>
  )
}