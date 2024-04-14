import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
// import Typography from "@mui/joy/Typography";
// import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
import Search from "@mui/icons-material/Search";
import SumaryMobile from "../SumaryMobile/SumaryMobile";
import "../DataMenuMobile/DataMenuMobile";
import "./MenuLateral.css";
import { useState } from "react";

const MenuLateral = (props, key) => {
  const [open, setOpen] = React.useState(false);

  const [openSummaryKey, setOpenSummaryKey] = useState(null);

  const toggleSummary = (key) => {
    setOpenSummaryKey(key === openSummaryKey ? null : key);
  };

  return (
    <React.Fragment>
      <IconButton
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
          }}
        ></Box>
        <Input
          size="sm"
          placeholder="O que você está procurando?"
          variant="plain"
          endDecorator={<Search />}
          slotProps={{
            input: {
              "aria-label": "Search anything",
            },
          }}
          sx={{
            m: 3,
            borderRadius: 0,
            borderBottom: "2px solid",
            borderColor: "neutral.outlinedBorder",
            "&:hover": {
              borderColor: "neutral.outlinedHoverBorder",
            },
            "&::before": {
              border: "1px solid var(--Input-focusedHighlight)",
              transform: "scaleX(0)",
              left: 0,
              right: 0,
              bottom: "-2px",
              top: "unset",
              transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
              borderRadius: 0,
            },
            "&:focus-within::before": {
              transform: "scaleX(1)",
            },
          }}
        />
        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "xl",
            "& > div": { justifyContent: "center" },
          }}
        >
          <ListItemButton>
            <SumaryMobile key={props.nome} isOpen={key === openSummaryKey} />
          </ListItemButton>
          <ListItemButton class="listItem">{props.nome8}</ListItemButton>
          <ListItemButton>{props.nome9}</ListItemButton>
          <ListItemButton>{props.nome10}</ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default MenuLateral;
