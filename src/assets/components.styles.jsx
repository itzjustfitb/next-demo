import styled from "styled-components";

export const DefaultBtn = styled.a(({ color }) => ({
  textDecoration: "none",
  color: "black",
  cursor: "pointer",
  backgroundColor: color,
  padding: "12px 28px ",
  width: "fit-content",
  fontWeight: 600,
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  fontSize: 20,
  borderRadius: 5,
  border: "1px solid transparent",
  transition: "0.4s",
  "&:hover": {
    opacity: 0.7,
  },
}));

export const DefaultInput = styled.input({
  display: "flex",
  padding: "16px",
  alignIitems: "center",
  gap: "2px",
  borderRadius: "6px",
  border: "1.5px solid #D9D9D9",
  fontFamily: "SF Pro",
  fontSize: 18,
  "&:focus": {
    outlineColor: "#6875D1",
    borderColor: "transparent",
  },
});
