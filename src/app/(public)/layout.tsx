import Header from "@/components/Header";
import { PropsWithChildren } from "react";
import Content from "@/components/Content";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Content>{children}</Content>
    </div>
  );
};

export default layout;
