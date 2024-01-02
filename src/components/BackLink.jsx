import styled from '@emotion/styled';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 27px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <GoArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
