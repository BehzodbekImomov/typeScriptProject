import React, { useState } from "react";
import { Divider, Table } from "antd";
import useFetch from "../../Hooks/UseFetch";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const columns = [
  {
    title: "Sarlavha",
    dataIndex: "title",
    render: (text: string) => <span>{text}</span>,
    key: "title",
  },
  {
    title: "Matn",
    dataIndex: "body",
    key: "body",
  },
  {
    title: "#id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "#UserId",
    dataIndex: "userId",
    key: "userId",
  },
];

const HomeP: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const {
    data: posts,
    loading,
    error,
  } = useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");

  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  const rowSelection = {
    type: "checkbox" as "checkbox",
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
  };

  return (
    <div>
      <Divider />
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={posts?.map((post) => ({ ...post, key: post.id }))}
        loading={loading}
      />
    </div>
  );
};

export default HomeP;
