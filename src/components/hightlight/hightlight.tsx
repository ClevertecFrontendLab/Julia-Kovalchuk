/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Match } from './styles';

interface IProps {
  filter: string;
  str: string;
}

export const Hightlight = ({ filter, str }: IProps): any => {
  if (filter === '') return str;

  const regexp = new RegExp(filter, 'ig');
  const matchValue = str.match(regexp);

  if (matchValue) {
    return str.split(regexp).map((s, index, array) => {
      if (index < array.length - 1) {
        const c = matchValue.shift();

        return (
          <React.Fragment key={uuidv4()}>
            {s}
            <Match key={uuidv4()} data-test-id='highlight-matches'>
              {c}
            </Match>
          </React.Fragment>
        );
      }

      return s;
    });
  }

  return str;
};
