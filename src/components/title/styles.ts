import styled from 'styled-components';

interface IProps {
  size: number;
  color: 'black' | 'white';
  margin: number;
  weight: 100 | 200 | 300 | 400 | 500 | 600 | 700;
}

const StyledTitle = styled.p.attrs<IProps>((props) => ({
  size: `${props.size}px`,
  margin: `${props.margin}px`,
}))<IProps>`
  font-size: ${({ size }) => size};
  line-height: 125%;
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => (color === 'black' ? '#363636' : '#FFFFFF')};
  margin-bottom: ${({ margin }) => margin};
`;

export { StyledTitle };
