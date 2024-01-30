import React from "react";
import { Col, Row, Button } from "antd";

const Header: React.FC = () => {
  return (
    <div>
      <Row
        justify={"space-between"}
        style={{ marginTop: "1rem", display: "flex", alignItems: "center" }}
      >
        <Col
          span={18}
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
            paddingLeft: "2rem"
          }}
        >
          <img src="logo.png" alt="logo" width="60" height="60" />
          <h2>Mint NFT's</h2>
        </Col>
        <Col span={3} style={{ textAlign: "center" }}>
          <Button
            icon={
              <img
                src={"solana.svg"}
                alt="solana"
                className="solana"
                width="30"
                height={"30"}
              />
            }
            type="primary"
            shape="round"
            size="large"
            className="buttons"
          >
            Solana
          </Button>
        </Col>
        <Col span={3} style={{ textAlign: "left" }}>
          <Button type="primary" shape="round" size="large" className="buttons">
            Connect Wallet
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
