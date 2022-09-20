import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Cart = () => {
  return (
    <li className="list-item top-nav-cart">
      <ShoppingCartOutlinedIcon color="inherit" />
      <span className="cart-count">0</span>
    </li>
  );
};

export default Cart;
