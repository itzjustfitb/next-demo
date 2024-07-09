import styled from "styled-components";

export const DefaultBtn = styled.a(({ color }) => ({
  fontFamily: "Poppins",
  textDecoration: "none",
  color: "black",
  cursor: "pointer",
  backgroundColor: color,
  padding: "12px 28px ",
  width: "fit-content",
  fontWeight: 500,
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
  boxShadow: "0px 1px 2px 0px #0000000d",
  display: "flex",
  padding: "16px",
  alignIitems: "center",
  gap: "2px",
  borderRadius: "6px",
  border: "1.5px solid #D9D9D9",
  fontFamily: "Poppins",
  fontSize: 16,
  "&:focus": {
    outlineColor: "#6875D1",
    borderColor: "transparent",
  },
});

export const DefaultTextArea = styled.textarea({
  boxShadow: "0px 1px 2px 0px #0000000d",
  display: "flex",
  padding: "12px 16px",
  alignIitems: "center",
  gap: "2px",
  borderRadius: "6px",
  border: "1.5px solid #D9D9D9",
  fontFamily: "Poppins",
  fontSize: 16,
  height: 167,
  resize: "none",
  "&:focus": {
    outlineColor: "#6875D1",
    borderColor: "transparent",
  },
});
