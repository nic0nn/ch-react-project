import { CounterContextProvider } from "../../context/Counter";
import { ProductDetailContainer } from "../../containers/ProductDetailContainer";

export const ProductDetailPage = () => {
  return (
    <CounterContextProvider value={0}>
      <ProductDetailContainer />
    </CounterContextProvider>
  );
};
