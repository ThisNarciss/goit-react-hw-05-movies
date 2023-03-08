import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  gap: 5px;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100px;
`;

export const CastLabel = styled.h2`
  font-size: 14px;
  text-align: center;
  margin-bottom: 5px;
`;

export const CastText = styled.p`
  font-size: 10px;
  text-align: center;
`;
