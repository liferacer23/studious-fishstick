import React, { useEffect, useState } from "react";
import { invoke } from "@forge/bridge";
import Button from "@atlaskit/button";
import Select from "@atlaskit/select";
import TextArea from "@atlaskit/textarea";
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    invoke("getText", { example: "my-invoke-variable" }).then(setData);
  }, []);

  return (
    <div
      style={{
        height: "200px",
      }}
    >
     
      <div
        style={{
          width: "200px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Select
          inputId="single-select-example"
          className="single-select"
          classNamePrefix="react-select"
          options={[
            { label: "Automatic", value: "automatic" },
            { label: "Manual", value: "manual" },
          ]}
          placeholder="Choose Type"
        />
      </div>

      <br />
      <div
        style={{
          width: "500px",
          flexDirection: "column" ,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
      <TextArea
        resize="auto"
        maxHeight="20vh"
        name="area"
        placeholder="Enter your text here"
      />
      <div
        style={{
          marginTop: "10px",
        }}
      >
      <Button
        type="submit"
        appearance="primary"
      >
        Submit
      </Button>
      </div>
      </div>
      {/* {data ? data : "Loading..."} */}
    </div>
  );
}

export default App;
