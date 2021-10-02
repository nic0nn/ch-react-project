import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { Loading } from "./../../shared/Loading";

import { getOrderById } from "../../firebase/utils";
import { OrderInfo } from "../../components/OrderInfo";

export const OrderInfoContainer = () => {
  const { orderId } = useParams();
  const [loading, setLoading] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  useEffect(() => {
    const getOrder = async (orderId) => {
      const order = await getOrderById(orderId);
      return order;
    };

    (async () => {
      setLoading(true);
      const order = await getOrder(orderId);
      setCurrentOrder(order);
      setLoading(false);
    })();
  }, [orderId]);

  return (
    <Loading size={40} state={loading}>
      {!currentOrder ? (
        <div>Orden no encontrada</div>
      ) : (
        <OrderInfo {...currentOrder.user} {...currentOrder} />
      )}
    </Loading>
  );
};
