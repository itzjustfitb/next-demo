import styled from "styled-components";

export const DefaultBtn = styled.a(({ color }) => ({
  cursor: "pointer",
  backgroundColor: color,
  padding: "12px 28px",
  width: "fit-content",
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
  width: "399px",
  padding: "16px",
  alignIitems: "center",
  gap: "2px",
  borderRadius: "6px",
  border: "1.5px solid #D9D9D9",
  fontFamily: "SF Pro",
  fontSize: 18,
  "&:focus": {
    outlineColor: "#367aff",
    borderColor: "transparent",
  },
});
