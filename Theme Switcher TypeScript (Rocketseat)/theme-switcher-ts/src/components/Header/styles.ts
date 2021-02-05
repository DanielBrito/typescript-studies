import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${(props) => props.theme.colors.primary};
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0px 30px;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
`;
