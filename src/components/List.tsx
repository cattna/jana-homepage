import type { ReactNode } from "react";

interface ListProps {
  children: ReactNode;
}

export default function List({ children }: ListProps) {
  return <ul style={{ paddingLeft: "1.2rem" }}>{children}</ul>;
}
