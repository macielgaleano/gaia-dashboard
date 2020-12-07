import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput, Row, Col } from "shards-react";
import Categories from "./Categories";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Editor = () => (
  <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post">
        <FormInput size="lg" className="mb-3" placeholder="Nombre del producto" />
        <ReactQuill className="add-new-post__editor mb-1 mt-3" />
        <Categories></Categories>
        <Row>
          <Col col={5}>
            {" "}
            <FormInput size="lg" className="mb-3" placeholder="Precio del producto" />
          </Col>
          <Col col={5}>
            {" "}
            <FormInput size="lg" className="mb-3" placeholder="Tamaño del producto" />
          </Col>
        </Row>
      </Form>
    </CardBody>
  </Card>
);

export default Editor;
