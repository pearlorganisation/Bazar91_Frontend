import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

// Load cart data from localStorage if available
const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cartData");
  return storedCart ? JSON.parse(storedCart) : [];
};

const initialState = {
  isLoading: false,
  cartData: loadCartFromLocalStorage(),
  error: "",
  isSuccess: false,
  isError: false,
  message: "",
};



const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartData.find((cartItem) => cartItem.id === item.id);

      const quantityToAdd = parseInt(item.quantity, 0) || 1;

      if (existingItem) {
        existingItem.quantity += quantityToAdd;
      } else {
        state.cartData.push({ ...item, quantity: quantityToAdd });
      }

      saveCartToLocalStorage(state.cartData); // Save updated cart data to localStorage
      toast.success("Item added to cart!", { position: "top-center" });
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartData = state.cartData.filter((item) => item.id !== itemId);

      saveCartToLocalStorage(state.cartData); 
      toast.success("Item removed from cart!", { position: "top-center" });
    },
    clearCart: (state) => {
      state.cartData = [];
      saveCartToLocalStorage(state.cartData); 
      toast.info("Cart cleared", { position: "top-center" });
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cartData.find((item) => item.id === itemId);

      if (item && item.quantity > 1) {
        item.quantity -= 1; // Decrease the quantity if it's greater than 1
        saveCartToLocalStorage(state.cartData); // Save updated cart data to localStorage
        toast.info("Item quantity decreased", { position: "top-center" });
      } else if (item && item.quantity === 1) {
        toast.warning("Cannot decrease quantity below 1", { position: "top-center" });
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
