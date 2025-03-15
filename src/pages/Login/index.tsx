import React, { Fragment } from "react";
import SignIn from "../../components/SignIn";
import styles from "./LoginP.module.css";

const LoginP: React.FC = () => {
  return (
    <Fragment>
      <div className="container flex">
        <div className={styles.card}>
          <img src="../../src/assets/svgs/typescript.svg" alt="TypeScript Logo" />
        </div>
        <SignIn />
      </div>
    </Fragment>
  );
};

export default LoginP;
