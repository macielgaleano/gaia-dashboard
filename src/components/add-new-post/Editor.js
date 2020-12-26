import React, { useState } from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, FormInput, Row, Col, Button } from "shards-react";
import Categories from "./Categories";
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import Materials from "./Materials";
import { Redirect } from "react-router-dom";

const Editor = () => {
  //For redirect
  const [redirect, setRedirect] = React.useState(false);
  //Common
  const [cateogryValue, setCateogryValue] = React.useState("Seleccione una categoria");
  const [price, setPrice] = useState();
  const [name, setName] = useState("");
  const [size, setSize] = useState();
  const [materials, setMaterials] = React.useState([]);
  const [colors] = React.useState(["000", "fff"]);
  const [InputFileName, setInputFileName] = React.useState("Seleccione un archivo");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const store = useSelector((state) => state);
  //Controls
  const [errors, setErrors] = useState([]);
  const [alert, setAlert] = useState(["none"]);

  const validateInputs = (e) => {
    e.preventDefault();
    console.log(errors);
    if (name.length < 5) {
      setErrors([...errors, "El nombre del producto debes ser mas largo"]);
    }
    if (description.length < 5) {
      setErrors([...errors, "La descripcion del producto debe ser mas larga"]);
    }
    if (materials.length < 1) {
      setErrors([...errors, "Se deben agregar materiales antes de enviar"]);
    }
    if (InputFileName === "Seleccione un archivo") {
      setErrors([...errors, "Se debe agregar una imagens"]);
    }
    if (cateogryValue === "Seleccione una categoria") {
      setErrors([...errors, "Se debe agregar una categoria"]);
    }
    if (Number.isInteger(price) === false) {
      setErrors([...errors, "Ingrese un valor numerico en precio"]);
    } else {
      sendDataProduct(e);
    }
    if (Number.isInteger(size) === false) {
      setErrors([...errors, "Ingrese un valor numerico en tamaño"]);
    }
    if (errors.length > 0) {
      setAlert("block");
    }
  };

  const sendDataProduct = (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("avatar", picture);
    formData.append("colors", colors);
    formData.append("materials", materials);
    formData.append("size", size);
    formData.append("category", cateogryValue);
    formData.append("price", price);

    fetch("https://gaia-server.vercel.app/admin/productos", {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${store.user.token}`,
      }),
      body: formData,
    })
      .then((res) => res.json())
      .then((json) => {});

    setRedirect(true);
  };

  return (
    <Card small className="mb-3">
      <CardBody>
        <div className="add-new-post">
          <FormInput
            size=""
            className="mb-3"
            placeholder="Nombre del producto"
            onChange={(e) => setName(e.target.value)}
          />
          <ReactQuill
            className="add-new-post__editor mb-3 mt-3"
            onChange={(e) => setDescription(e)}
          />
          <Row>
            <Col>
              <strong className="text-muted d-block mb-2">Suba la imagen</strong>
              <div className="custom-file mb-3">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile2"
                  onChange={(e) => {
                    setInputFileName(e.target.files[0].name);
                    setPicture(e.target.files[0]);
                  }}
                />
                <label className="custom-file-label" htmlFor="customFile2">
                  {InputFileName}
                </label>
              </div>
            </Col>
            <Col>
              <strong className="text-muted d-block mb-2">
                Seleccione una categoria
              </strong>
              <Categories
                setItemValue={setCateogryValue}
                inputVale={cateogryValue}
              ></Categories>
            </Col>
          </Row>
          <Row>
            <Col col={4}>
              {" "}
              <strong className="text-muted d-block mb-2">Precio del producto</strong>
              <FormInput
                size=""
                className="mb-3"
                placeholder="Precio del producto"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Col>
            <Col col={4}>
              <strong className="text-muted d-block mb-2">Tamaño del producto</strong>{" "}
              <FormInput
                size=""
                className="mb-3"
                placeholder="Tamaño del producto"
                onChange={(e) => setSize(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col col={12}>
              <Materials materials={materials} setMaterials={setMaterials}></Materials>
            </Col>
          </Row>
          <Row>
            <Col>
              <Alert variant={"danger"} style={{ display: alert }}>
                <h6 className="text-white">Error</h6>
                <ul>
                  {errors.length > 0 &&
                    errors.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                </ul>
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Button
                onClick={validateInputs}
                theme="dark"
                size={"md"}
                className="mb-2 mt-4 p4  mr-1"
              >
                Crear producto
              </Button>
            </Col>
          </Row>{" "}
        </div>
      </CardBody>

      {redirect && <Redirect to="/Producto" />}
    </Card>
  );
};

export default Editor;
