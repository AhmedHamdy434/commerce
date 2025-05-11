import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { CartAccountType, initialState } from "../redux/cart/cartSlice";

export async function updatingFirebaseStore(
  userId: string,
  cartDetail: CartAccountType
) {
  const cartList = doc(db, "carts", userId);

  await setDoc(cartList, cartDetail);
}

export async function gettingFirebaseStore(
  userId: string
): Promise<CartAccountType> {
  const cartRef = doc(db, "carts", userId);
  const cartSnap = await getDoc(cartRef);

  if (cartSnap.exists()) {
    return cartSnap.data() as CartAccountType;
  }

  await updatingFirebaseStore(userId, initialState);
  return initialState;
}
