import React, { useState } from "react";
import { Layout, Dropdown,Avatar } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Header } = Layout;
export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false);
  const changeCollapsed = () => {
    setCollapsed(!collapsed);
  };
  // 下拉菜单的每项
  const items = [
    {
      key: "1",
      label: "超级管理员",
    },
  
    {
      key: "2",
      danger: true,
      label:"退出"
       
    },
  ];
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: "0 16px",
      }}
    >
      {collapsed ? (
        <MenuUnfoldOutlined onClick={changeCollapsed} />
      ) : (
        <MenuFoldOutlined onClick={changeCollapsed} />
      )}

      <div style={{ float: "right" }}>
        <span>欢迎admin回来</span>
        <Dropdown
          menu={{
            items,
          }}
        >
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  );
}
