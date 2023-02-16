export enum Breackpoint {
  SM = 768,
  MD = 1420,
}

export const Media = {
  SM: `@media screen and (max-width: ${Breackpoint.SM}px)`,
  MD: `@media screen and (max-width: ${Breackpoint.MD}px)`,
};