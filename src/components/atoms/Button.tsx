import styled from "styled-components";

type ButtonProps = {
  onClick?: (e: React.MouseEvent) => void;
  action: "add" | "edit" | "delete";
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ onClick, action, children }) => {
  return <CustomButton action={action} onClick={onClick}>{children}</CustomButton>;
};

const CustomButton = styled.button<{ action: "add" | "edit" | "delete" }>`
  background-color: ${({ action }) => {
    switch (action) {
      case "add":
        return "blue";
      case "edit":
        return "orange";
      case "delete":
        return "red";
      default:
        return "black";
    }
}};
color: white;
`;
