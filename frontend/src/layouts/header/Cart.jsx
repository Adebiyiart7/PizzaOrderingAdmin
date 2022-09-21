import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Cart = ({count}) => {
  return (
    <li className="list-item top-nav-cart">
      <ShoppingCartOutlinedIcon color="inherit" />
      <span className="cart-count">{count}</span>
    </li>
  );
};

export default Cart;
