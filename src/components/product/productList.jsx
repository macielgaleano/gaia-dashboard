import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody } from "shards-react";
import axios from "axios";
import { MdSystemUpdateAlt } from "react-icons/md";
import { RiDeleteBack2Line } from "react-icons/ri";
import { useSelector } from "react-redux";

const ProductList = () => {
  const store = useSelector((state) => state);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://gaia-server.vercel.app/productos")
      .then((res) => setProducts(res.data));
  });

  function deleteProduct(slug) {
    axios
      .delete("https://gaia-server.vercel.app/admin/productos", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${store.user.token}`,
        },
        data: { slug: slug },
      })
      .then((res) => {
        const newsProducts = products.filter((product) => product.slug !== slug);
        setProducts(newsProducts);
      });
  }

  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">Productos activos</h6>
      </CardHeader>
      <CardBody className="p-0 pb-3">
        <table className="table mb-0" responsive striped bordered hover variant="dark">
          <thead className="bg-light">
            <tr>
              <th scope="col" className="border-0">
                #
              </th>
              <th scope="col" className="border-0">
                Id
              </th>
              <th scope="col" className="border-0">
                Nombre de producto
              </th>
              <th scope="col" className="border-0">
                Descripcion
              </th>
              <th scope="col" className="border-0">
                Precio
              </th>
              <th scope="col" className="border-0">
                Size
              </th>
              <th scope="col" className="border-0">
                Materials
              </th>
              <th scope="col" className="border-0">
                Eliminar
              </th>
              <th scope="col" className="border-0">
                Modificar
              </th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 &&
              products.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>${item.price}</td>
                    <td>{item.size} cm</td>

                    <td>
                      <ul>
                        {item.materials.map((material) => (
                          <li>{material}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <button type="button" className="btn btn-info">
                        <MdSystemUpdateAlt
                          style={{ fontSize: "1rem" }}
                        ></MdSystemUpdateAlt>{" "}
                        Modificar
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger "
                        onClick={() => deleteProduct(item.slug)}
                      >
                        <RiDeleteBack2Line
                          style={{ fontSize: "1rem" }}
                        ></RiDeleteBack2Line>{" "}
                        Eliminar
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default ProductList;
