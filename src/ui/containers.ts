import styled from 'styled-components';

const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
`;

const ContainerFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerFlexBeetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContainerFlexRowCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ContainerFlexColumnCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export {
  ContainerFlex,
  ContainerFlexRowCenter,
  ContainerFlexColumnCenter,
  ContainerFlexColumn,
  ContainerFlexBeetween,
};
