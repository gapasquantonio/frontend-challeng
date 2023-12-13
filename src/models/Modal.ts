import { ReactNode } from "react";

export interface Modal {
  isOpen: boolean;
  children?: ReactNode;
}
