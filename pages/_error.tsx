// pages/_error.tsx

import React from "react";
import { NextPage, NextPageContext } from "next";

type ErrorPageProps = {
  statusCode?: number;
};

const Error: NextPage<ErrorPageProps> = ({ statusCode }) => {
  return (
    <div>
      <h1>Error</h1>
      {statusCode ? (
        <p>An error {statusCode} occurred on the server.</p>
      ) : (
        <p>An error occurred on the client.</p>
      )}
    </div>
  );
};

export default Error;
