import React, { Fragment } from "react";
import SignIn from "../../components/SignIn";
import styles from "./LoginP.module.css";
import typescript from "../../../src/assets/svgs/typescript.svg"

const LoginP: React.FC = () => {
  return (
    <Fragment>
      <div className="container flex">
        <div className={styles.card}>
          <img src={typescript} alt="TypeScript Logo" />
        </div>
        <SignIn />
      </div>
    </Fragment>
  );
};

export default LoginP;
