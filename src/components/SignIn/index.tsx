import React, { useState } from "react";
import { Alert, Button, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styles from "./SignIn.module.css";
import { login } from "../../../store/authSlice";
import { useAppDispatch } from "../../Hooks/UseAppDispatch";


// Form uchun interfeys
interface LoginFormValues {
  login: string;
  password: string;
}

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const onFinish = (values: LoginFormValues) => {
    if (values.login === "a" && values.password === "b") {
      dispatch(login({ username: values.login, password: values.password }));
      navigate("/home");
    } else {
      setError("Login yoki parol noto'g'ri!");
    }
  };

  return (
    <div className={styles.card_signIn}>
      <div className={styles.form_group}>
        <h2 className="text-center to-gray-700 text-4xl">Sign in</h2>
        {error && <Alert message={error} type="error" showIcon className="mb-4" />}

        <Form<LoginFormValues> 
          onFinish={onFinish}
          name="basic"
          layout="vertical"
          requiredMark={false}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label={<span className="text-xl to-gray-900 font-normal">Login</span>}
            name="login"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input suffix={<UserOutlined />} placeholder="Please write login" />
          </Form.Item>

          <Form.Item
            label={<span className="text-xl to-gray-900 font-normal">Password</span>}
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Please write password" />
          </Form.Item>

          <Form.Item>
            <Button
              style={{
                width: "100%",
                backgroundColor: "#3178C6",
                color: "white",
                fontSize: "16px",
                padding: "10px",
              }}
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
