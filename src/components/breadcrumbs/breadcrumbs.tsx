import { BreadcrumbsContent, StyledBreadcrumbs, Text } from './styles';

interface IProps {
  crumbs: { category: string; booksName: string };
}

export const Breadcrumbs = ({ crumbs }: IProps) => {
  const { category, booksName } = crumbs;

  return (
    <StyledBreadcrumbs>
      <BreadcrumbsContent>
        <Text>
          {category ? category : 'Все книги'} / {booksName}
        </Text>
      </BreadcrumbsContent>
    </StyledBreadcrumbs>
  );
};
