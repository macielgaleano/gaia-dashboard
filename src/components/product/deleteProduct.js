import axios from "axios";
import { useSelector } from "react-redux";

function deleteItem(slug, products, setProducts) {
  const store = useSelector((state) => state);
  axios
    .delete("https://gaia-server.vercel.app/admin/productos", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${store.admin.token}`,
      },
      data: { slug: slug },
    })
    .then((res) => {
      const newsProducts = products.filter((product) => product.slug !== slug);
      setProducts(newsProducts);
    });
}

export default deleteItem;
