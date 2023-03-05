import { JSXElement } from "solid-js";
import Header from "./Header";

const Layout = (props: { children: JSXElement }) => {
  return (
    <div class='flex flex-col h-screen'>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
