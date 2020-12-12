import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody } from "shards-react";
import axios from "axios";
import { MdSystemUpdateAlt } from "react-icons/md";
import { RiDeleteBack2Line } from "react-icons/ri";

const productList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://gaia-server.vercel.app/productos")
      .then((res) => setProducts(res.data));
  });

  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">Productos activos</h6>
      </CardHeader>
      <CardBody className="p-0 pb-3">
        <table className="table mb-0">
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
                Colors
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
                    <td>{item.colors}</td>
                    <td>
                      <ul>
                        {item.materials.map((material) => (
                          <li>{material}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <button type="button" class="btn btn-info">
                        <MdSystemUpdateAlt
                          style={{ fontSize: "1rem" }}
                        ></MdSystemUpdateAlt>{" "}
                        Modificar
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-danger">
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

export default productList;
