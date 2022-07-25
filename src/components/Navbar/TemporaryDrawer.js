import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (Anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [Anchor]: open });
  };

  const list = (Anchor) => (
    <Box
      sx={{ width: Anchor === "top" || Anchor === "bottom" ? "auto" : 270 }}
      textAlign="center"
      fontFamily="Libre Baskerville, serif"
      role="presentation"
      onClick={toggleDrawer(Anchor, false)}
      onKeyDown={toggleDrawer(Anchor, false)}
    >
      <h1>Contact Us</h1>
      <List>
        {["08-6890-973", "Giladeyuda@gmail.com"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <LocalPhoneIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["CONTACT US"].map((Anchor) => (
        <React.Fragment key={Anchor}>
          <Button
            onClick={toggleDrawer(Anchor, true)}
            sx={{
              color: "#fff",
              fontSize: "1.2rem",
              fontFamily: "Roboto Slab, serif",
              margin: "1.05rem 0.5rem",
            }}
          >
            {Anchor}
          </Button>
          <Drawer
            Anchor={Anchor}
            open={state[Anchor]}
            onClose={toggleDrawer(Anchor, false)}
          >
            {list(Anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
