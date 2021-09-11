import { CounterContextProvider } from "../../context/Counter";
import { ProductDetailContainer } from "../../containers/ProductDetailContainer";

export const Detail = () => {
  return (
    <CounterContextProvider>
      <ProductDetailContainer />
    </CounterContextProvider>
  );
};
