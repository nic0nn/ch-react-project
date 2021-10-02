import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { makeId } from "../helpers";
import { firestore, storage } from "./firebase";

const getProductInfo = async (product) => {
  product.image = await getFileURL(product.image);
  product.category = (await getCategoryById(product.categoryId)).name;
  return product;
};

export const getFileURL = async (path) => {
  return await getDownloadURL(ref(storage, path));
};

export const getProducts = async (categoryId) => {
  let products = [];

  const refCollection = collection(firestore, "products");

  const q = categoryId
    ? query(refCollection, where("categoryId", "==", categoryId))
    : refCollection;

  const snapshot = await getDocs(q);

  if (snapshot.empty) return [];

  snapshot.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));

  for (let product of products) {
    product.image = await getFileURL(product.image);
  }

  return products;
};

export const getProduct = async (productId) => {
  let product = await getDoc(doc(firestore, "products", productId));
  if (product.exists()) {
    const productInfo = await getProductInfo(product.data());
    return { id: productId, ...productInfo };
  }
  return null;
};

export const getCategoryById = async (categoryId) => {
  const category = await getDoc(doc(firestore, "categories", categoryId));
  if (category.exists()) return category.data();
  return null;
};

export const getCategoryByName = async (name) => {
  if (!name) return null;

  let category;

  const categories = await getDocs(
    query(collection(firestore, "categories"), where("name", "==", name))
  );

  if (!categories?.empty) {
    category = { id: categories.docs[0].id, ...categories.docs[0].data() };
  }

  return category;
};

export const getCategories = async () => {
  const snapshot = await getDocs(collection(firestore, "categories"));

  if (snapshot.empty) return [];

  let categories = [];
  snapshot.forEach((doc) => categories.push({ ...doc.data(), id: doc.id }));

  return categories;
};

export const saveOrder = async (order) => {
  const id = makeId(20);
  await setDoc(doc(firestore, "orders", id), { ...order });
  return id;
};

export const getOrderById = async (orderId) => {
  if (!orderId) return null
  const order = await getDoc(doc(firestore, "orders", orderId));
  if (order.exists()) return order.data();
  return null;
};
