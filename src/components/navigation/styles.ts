/* eslint-disable no-negated-condition */
/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

import background from '../../assets/icons/background.svg';
import { ContainerFlex, ContainerFlexBeetween } from '../../ui/containers';
import { Media } from '../../ui/media';

type isOpen = { $isOpen: boolean };
type InputTypes = { $isOpen: boolean; $isActiveInput: boolean };

const StyledNavigation = styled(ContainerFlexBeetween)`
  margin-bottom: 32px;

  ${Media.MD} {
    margin-bottom: 24px;
  }

  ${Media.SM} {
    width: 100%;
    margin-bottom: 16px;
  }
`;

const WrapperInputs = styled(ContainerFlexBeetween)<isOpen>`
  position: relative;
  width: ${({ $isOpen }) => ($isOpen ? '100%' : 'content')};
`;

const WrapperSorting = styled(ContainerFlexBeetween)`
  grid-gap: 16px;
`;

const Search = styled(ContainerFlex)<isOpen>`
  padding: 10px 100px 10px 16px;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 599px;
  margin-right: 16px;

  ${Media.MD} {
    padding: 10px 44px 10px 16px;
  }

  ${Media.SM} {
    width: 100%;
    margin-right: ${({ $isOpen }) => ($isOpen ? '0px' : '16px')};
    padding: 0px;
  }
`;

const Filter = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-gap: 8px;
  padding: 8px 15px;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 599px;

  ${Media.SM} {
    padding: 8px;
    border-radius: 50%;
  }
`;

const SearchButton = styled.button<InputTypes>`
  margin-right: 8px;
  fill: ${({ $isActiveInput }) => ($isActiveInput ? '#f83600' : '#a7a7a7')};

  ${Media.SM} {
    display: ${({ $isOpen }) => (!$isOpen ? 'flex' : 'none')};
    padding: 8px;
    border-radius: 50%;
  }
`;

const CloseButton = styled.button<isOpen>`
  display: none;

  ${Media.MD} {
    position: absolute;
    top: 11px;
    right: 16px;
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  }
`;

const SearchInput = styled.input<isOpen>`
  border: none;
  color: #363636;
  width: 190px;
  caret-color: #f83600;

  &::placeholder {
    color: #a7a7a7;
  }

  ${Media.SM} {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    min-width: 100%;
    width: 100%;
    padding: 10px 44px 10px 16px;
    font-size: 12px;
  }
`;

const ButtonSquare = styled.button<{ $isSquare: boolean }>`
  padding: 10px;
  background: ${({ $isSquare }) => ($isSquare ? `no-repeat url(${background})` : 'none')};
  box-shadow: ${({ $isSquare }) =>
    $isSquare
      ? 'none'
      : '0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),0px 1px 5px rgba(191, 196, 201, 0.24)'};
  border-radius: 50%;
`;

const ButtonColumn = styled.button<{ $isColumn: boolean }>`
  padding: 10px;
  background: ${({ $isColumn }) => ($isColumn ? `no-repeat url(${background})` : 'none')};
  box-shadow: ${({ $isColumn }) =>
    $isColumn
      ? 'none'
      : '0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),0px 1px 5px rgba(191, 196, 201, 0.24)'};
  border-radius: 50%;
`;

const SortIconContainer = styled(ContainerFlex)`
  width: 100%;
  height: 100%;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 0.1px;
  color: #a7a7a7;
  white-space: nowrap;

  ${Media.SM} {
    display: none;
  }
`;

export {
  StyledNavigation,
  WrapperInputs,
  WrapperSorting,
  Search,
  Filter,
  SearchButton,
  SearchInput,
  ButtonSquare,
  ButtonColumn,
  Text,
  SortIconContainer,
  CloseButton,
};
