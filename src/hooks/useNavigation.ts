import { useContext } from "react";
import { navigation } from "../context/navigation";

export const useNavigation = () => {
  const context = useContext(navigation);
  if (!context) throw new Error ('Need to wrapper the provider!');
  return context;
}