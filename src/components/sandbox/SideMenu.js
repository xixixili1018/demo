import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import "./index.css";
import axios from "axios";
const { Sider } = Layout;
const menuList = [
  {
    key: "/home",
    title: "首页",
    icon: <UserOutlined />,
  },
  {
    key: "/user-manage",
    title: "用户管理",
    icon: <UploadOutlined />,
    children: [
      {
        key: "/user-manage/list",
        title: "用户列表",
        icon: <VideoCameraOutlined />,
      },
    ],
  },
  {
    key: "/right-manage",
    title: "权限管理",
    icon: <UserOutlined />,
    children: [
      {
        key: "/right-manage/role/list",
        title: "角色列表",
        icon: <UserOutlined />,
      },
      {
        key: "/right-manage/right/list",
        title: "权限列表",
        icon: <UserOutlined />,
      },
    ],
  },
];
function SideMenu(props) {
   let [menu, setMenu] = useState([]);
   useEffect(() => {
     axios.get("http://localhost:8000/rights?_embed=children").then((res) => {
       console.log(res.data);
       setMenu(res.data);
     });
   }, []);
  const renderMenu = (menuList) => {
    return menuList.map((item) => {
      if (!item.children) {
        return {
          key: item.key,
          label: item.title,
          icon: item.icon,
        };
      }
      if (item.children) {
        return {
          key: item.key,
          label: item.title,
          icon: item.icon,
          children: item.children.map((item) => {
            return {
              key: item.key,
              label: item.title,
              icon: item.icon,
              onClick: () => {
                console.log(item.key);
                props.history.push(item.key);
              },
            };
          }),
        };
      }
      // return <Menu.Item key={item.key} icon={item.icon}>{item.title}</Menu.Item>
    });
  };
  return (
    <Sider trigger={null} collapsible collapsed={false}>
      <div className="logo">全球新闻发布管理系统</div>

      <Menu
        theme="dark"
        items={renderMenu(menu)}
        mode="inline"
        defaultSelectedKeys={["1"]}
        // onClick={({key}) => {
        //   console.log(e);
        //   props.history.push(key);
        // }}
      ></Menu>
    </Sider>
  );
}
export default withRouter(SideMenu);
