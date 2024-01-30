import React, { useState, useEffect } from "react";
import { Button, Divider, Popover, Radio, Switch } from "antd";
import { SettingOutlined } from "@ant-design/icons";

const Portrait = () => {
  const [type, setType] = useState(0.5);
  const [background, setBackground] = useState(true);

  const handleTypeChange = (e: any) => {
    setType(e.target.value);
  };

  const settings = (
    <>
      <div>Type</div>
      <div>
        <Radio.Group value={type} onChange={handleTypeChange}>
          <Radio.Button value={1}>Robot</Radio.Button>
          <Radio.Button value={2}>Zombie</Radio.Button>
          <Radio.Button value={3}>Head</Radio.Button>
          <Radio.Button value={4}>Cat</Radio.Button>
        </Radio.Group>
      </div>
      <Divider />
      <div>Background</div>
      <Switch checked={background} onChange={() => setBackground(!background)}/>
    </>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ marginTop: "0" }} >Generate Image</h2>
      <div className="imgBox">
        {/* <img src='https://robohash.org/saadsa.png?bgset=bg1&size=350x350&set=set4' style={{borderRadius : "10px"}}/> */}
      </div>
      <div className="generateDiv">
        <Popover
          title="Settings"
          trigger="click"
          placement="topLeft"
          content={settings}
          arrow={false}
        >
          <SettingOutlined className="cog" />
        </Popover>
        <Button type="primary" shape="round" size="large" className="buttons">
          Generate
        </Button>
      </div>
    </div>
  );
};

export default Portrait;
