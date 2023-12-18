
import scss from "./layout.module.css";
import { useSession } from "next-auth/react";
import React from "react";
import Head from "next/head";
import Sidebar from '../sidebar/sidebar';
import Footer from "../Footer";

const Layout = (props: any) => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>DataSoft - Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={scss.layout}>
        {session && <Sidebar />}
        {props.children}
        <Footer/>
      </main>
    </>
  );
};

export default Layout;