import React, { useEffect } from "react";

const EssentialScripts = () => {
  useEffect(() => {
    window.jQuery = require("../../assets/js/jquery-2.2.3.min.js");
    require("../../assets/js/jquery.flexslider.js");
    require("../../assets/js/functions.js");
  }, []);
  return <></>;
};

export default EssentialScripts;
