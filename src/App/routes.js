import { getCategories } from "./firebase/utils";

export const getRoutes = async () => {
  const categories = await getCategories();
  let routes = [{ name: "home", link: "/home" }];

  routes = routes.concat(
    categories.map((category) => ({
      ...category,
      link: `/productos/categoria/${category.id}`,
    }))
  );

  return routes;
};
