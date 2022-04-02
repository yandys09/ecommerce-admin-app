import React from "react";
import Layout from "../../components/Layout";
import { Jumbotron } from 'react-bootstrap';

function index() {
  return (
    <div>
      <Layout>
        <Jumbotron
          style={{ margin: "1rem", background: "#fff" }}
          className="text-center"
        >
          <h1>Welcome to Admin Dashboard</h1>
          <p>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).{" "}
          </p>
        </Jumbotron>
      </Layout>
    </div>
  );
}

export default index;
