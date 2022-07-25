import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContextOfPro from "../../contexts/ContextOfPro";
import { useContext } from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    background: "red",
  },
}));

export default function CustomizedBadges(props) {
  const { countCart } = useContext(ContextOfPro);
  return (
    <IconButton aria-label="cart" sx={{ pr: "2rem" }}>
      <StyledBadge badgeContent={countCart} color="secondary">
        <ShoppingCartIcon sx={{ pt: "0.2rem", pl: "1rem", fontSize: "2rem" }} />
      </StyledBadge>
    </IconButton>
  );
}
