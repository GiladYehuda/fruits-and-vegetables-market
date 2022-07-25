import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import { Box } from "@mui/system";
import { useContext } from "react";
import ContextOfPro from "../../contexts/ContextOfPro";

export default function Contact() {
  const { showCart, setShowCart } = useContext(ContextOfPro);
  return (
    <Drawer
      open={showCart}
      onClose={() => setShowCart(false)}
      anchor="right"
      PaperProps={{
        sx: { width: 350, backgroundColor: "#F6F5F5" },
      }}
    >
      <Box sx={{ textAlign: "center", fontFamily: "Roboto Slab, serif" }}>
        {" "}
        <h1>Contact Us</h1>
        <Box sx={{ fontSize: "1.1rem" }}>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <LocalPhoneIcon />
                </ListItemIcon>
                <ListItemText />
                054-9303098{" "}
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText />
                Giladyeuda1390@gmail.com
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Drawer>
  );
}
