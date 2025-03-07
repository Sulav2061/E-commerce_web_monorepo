import { Card, Col, Flex, Row, Typography } from "antd";
import React from "react";
import { cardItems } from ".";

const DashCard = () => {
  return (
    <Row>
      {cardItems?.map((item) => {
        return (
          <Col xs={24} sm={12} md={8} lg={6} xl={6} key={item.id}>
            <Card
              style={{
                height: "100px",
                width: "100% ",
                borderRadius: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Flex gap={20} align="center">
                {item?.icon}

                <Flex vertical>
                  <Typography.Text style={{ fontSize: "18px" }}>
                    {item.name}
                  </Typography.Text>

                  <Typography.Text
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#8E6CEF",
                    }}
                  >
                    {item.count}
                  </Typography.Text>
                </Flex>
              </Flex>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default DashCard;
