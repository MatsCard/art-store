const React = require("react");
const Layout = require("./src/components/layout").default;
const {CartProvider} = require('./src/context')
require("jquery/dist/jquery.min.js");
require("@popperjs/core/dist/umd/popper.min");
require("bootstrap/dist/js/bootstrap");
require("bootstrap/dist/css/bootstrap.css");
require("@fortawesome/fontawesome-free/css/all.css")

exports.wrapRootElement = ({ element }) => (

  <CartProvider>
  <Layout>
    {element}
  </Layout>
  </CartProvider>
  
);
