import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  cartData: [],
  totalPrice: 0,
  isSidebarOpen:false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartData.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartData.push({ ...item, quantity: 1 });
      }

      // Calculate total price after addition
      state.totalPrice = state.cartData.reduce((total, item) => total + item.originalPrice * item.quantity, 0);
      toast.success("Item added to cart!", { position: "top-center" });
    },
    
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cartData.find(item => item.id === itemId);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartData = state.cartData.filter(item => item.id !== itemId);
      }

      // Calculate total price after decreasing quantity
      state.totalPrice = state.cartData.reduce((total, item) => total + item.originalPrice * item.quantity, 0);
      toast.info("Item quantity decreased", { position: "top-center" });
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartData = state.cartData.filter(item => item.id !== itemId);

      // Calculate total price after removal
      state.totalPrice = state.cartData.reduce((total, item) => total + item.originalPrice * item.quantity, 0);
      toast.success("Item removed from cart!", { position: "top-center" });
    },



    togglesidebar: (state) => {

      state.isSidebarOpen=!state.isSidebarOpen
    }
  },
});

export const { addToCart, removeFromCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
