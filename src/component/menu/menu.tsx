import React from "react";
import { Menu } from "antd";
import { MenuProps } from "antd/lib/menu";
import { Link } from "react-router-dom";
import { IRoute, menuItems } from "./listMenu";

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: IRoute[],
  type?: "group"
): MenuItem => {
  return {
    key: key as string,
    icon,
    children: children && getMenuItems(children),
    label,
    type,
  };
};

const getMenuItems = (routes: IRoute[] | undefined): MenuItem[] => {
  if (!routes) return [];

  return routes.map((item) => {
    const { label, icon, link, key, children } = item;
    return getItem(
      <Link to={link}>{label}</Link>,
      key ? key : "1",
      icon ? icon : undefined,
      children
    );
  });
};

const SideMenu: React.FC = () => {
  const items: MenuItem[] = getMenuItems(menuItems);

  return (
    <>
      {/* <img src={} alt="logo" className="hidden md:block" /> */}
      <Menu
        style={{ backgroundColor: "none" }}
        mode="inline"
        items={items}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["Home"]}
      />
    </>
  );
};

export default SideMenu;
