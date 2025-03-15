import React, { useState } from 'react';
import { SettingOutlined, LineChartOutlined } from "@ant-design/icons";
import { PiGraduationCap } from "react-icons/pi";
import { Avatar, Layout, Menu, Space, theme, Typography } from 'antd';
import { Outlet } from 'react-router-dom';
import { LiaAwardSolid } from 'react-icons/lia';
import { RiBookOpenLine } from 'react-icons/ri';
import type { MenuProps } from 'antd';

const { Header, Content, Sider } = Layout;

type MenuItem = {
  key: string;
  icon: React.ReactNode;
  label: string;
  style?: React.CSSProperties;
};

const CustomLayout: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<string>('');

  const handleClick: MenuProps['onClick'] = (e) => {
    setSelectedKey(e.key);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

 
  const menuItems: MenuItem[] = [
    { key: "/statistic", icon: <LineChartOutlined />, label: "Statistics" },
    { key: "/education", icon: <PiGraduationCap />, label: "Education" },
    { key: "/settings", icon: <SettingOutlined />, label: "Settings" },
    { key: "/skill", icon: <LiaAwardSolid />, label: "Hard skill" },
    { key: "/conditions", icon: <RiBookOpenLine />, label: "Conditions" },
  ].map((item) => ({
    ...item,
    style: {
      backgroundColor: selectedKey === item.key ? '#3178C6' : 'transparent',
      color: selectedKey === item.key ? 'white' : '#475467',
      borderRadius: '5px',
    },
  }));

  return (
    <Layout>
      <Sider
        width="15%"
        trigger={null}
        collapsible
        theme="light"
        style={{ borderRight: "1px solid #D0D5DD" }}
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="demo-logo-vertical" />
        <Typography.Title level={4} style={{ padding: '13px 32px ', fontWeight: "normal" }}>Pages</Typography.Title>

        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={handleClick}
          items={menuItems}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            paddingRight: "10px",
            borderBottom: "1px solid #D0D5DD",
            background: colorBgContainer,
            display: "flex",
            justifyContent: "end"
          }}
        >
          <Space wrap direction="vertical" size={16}>
            <Avatar />
          </Space>
        </Header>

        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              margin: "15px",
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              border: "1px solid #D0D5DD"
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default CustomLayout;
