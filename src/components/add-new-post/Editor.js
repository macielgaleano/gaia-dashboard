import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput, Row, Col, Button } from "shards-react";
import CustomFileUpload from "../components-overview/CustomFileUpload";
import Categories from "./Categories";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import Materials from "./Materials";

const Editor = () => {
  const [cateogryValue, setCateogryValue] = React.useState("Seleccione una categoria");
  const [price, setPrice] = React.useState();
  const [name, setName] = React.useState();
  const [size, setSize] = React.useState();
  const [materials, setMaterials] = React.useState([]);
  const [colors] = React.useState(["000", "fff"]);
  const [InputFileName, setInputFileName] = React.useState("Seleccione un archivo");
  const [description, setDescription] = React.useState();

  return (
    <Card small className="mb-3">
      <CardBody>
        <Form className="add-new-post">
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
                  onChange={(e) => setInputFileName(e.target.files[0].name)}
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
            <Col md={12}>
              <Button
                theme="dark"
                size={"md"}
                className="mb-2 mt-4 p4  mr-1"
                type="submit"
                value="Submit"
              >
                Crear producto
              </Button>
            </Col>
          </Row>{" "}
        </Form>
      </CardBody>
    </Card>
  );
};

export default Editor;
