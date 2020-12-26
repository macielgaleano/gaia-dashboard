import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import ProductList from "../components/product/productList";

const Product = () => {
  return (
    <div>
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Listar, modificar y eliminar producto."
            subtitle="GAIA"
            className="text-sm-left"
          />
        </Row>

        <Row>
          {/* Editor */}
          <Col lg="12" md="12">
            <ProductList />
          </Col>

          {/* Sidebar Widgets */}
        </Row>
      </Container>
    </div>
  );
};

export default Product;
