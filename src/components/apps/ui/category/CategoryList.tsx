import { useCategoriesQuery } from '@/categories/categories.query';
import { SubCategoryType } from '@/categories/types';
import { useEffect, useState } from 'react';
import { styled, theme } from 'twin.macro';

import { SubCategoryItem } from './SubCategoryItem';

export default function CategoryList() {
  const { data, isLoading } = useCategoriesQuery({});
  const [selectedMainCategoryId, setSelectedMainCategoryId] = useState<
    number | null
  >(null);

  const [subCategories, setSubCategories] = useState<SubCategoryType[]>([]);

  useEffect(() => {
    if (selectedMainCategoryId === null) {
      // 전체 선택시 모든 subCategories를 설정
      const allSubCategories =
        data?.flatMap((category) => category.subCategories) || [];
      setSubCategories(allSubCategories);
    } else {
      // 특정 카테고리가 선택되었을 때 해당 카테고리의 subCategories를 설정
      const selectedCategory = data?.find(
        (category) => category.id === selectedMainCategoryId,
      );
      setSubCategories(selectedCategory ? selectedCategory.subCategories : []);
    }
  }, [selectedMainCategoryId, data]);

  if (isLoading) {
    return;
  }

  return (
    <CategoryContainer>
      <TabsContainer>
        <Tab
          isActive={selectedMainCategoryId === null}
          onClick={() => setSelectedMainCategoryId(null)}
        >
          전체
        </Tab>
        {data?.map((allCategoriesData) => (
          <Tab
            key={allCategoriesData.id}
            isActive={allCategoriesData.id === selectedMainCategoryId}
            onClick={() => setSelectedMainCategoryId(allCategoriesData.id)}
          >
            {allCategoriesData.name}
          </Tab>
        ))}
      </TabsContainer>

      <SubCategoryContainer>
        {subCategories.map((subCategory) => (
          <SubCategoryItem key={subCategory.id} name={subCategory.name} />
        ))}
      </SubCategoryContainer>
    </CategoryContainer>
  );
}

const CategoryContainer = styled.div`
  margin: 36px auto 52px;
  max-width: 728px;
`;

const TabsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  margin-bottom: 20px;
  font-family: Pretendard !important;
  font-size: 12px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.025em;
  text-align: center;
  color: #767676;
  border-bottom: 1px solid #f0f0f0;
`;

const Tab = styled.button<{ isActive: boolean }>`
  border: none;
  border-bottom: ${(props) =>
    props.isActive ? '2px solid #632ed8' : '2px solid transparent'};
  background: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }

  &:after {
    content: '';
    flex: auto;
  }
`;

const SubCategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  place-items: center;
  @media (min-width: ${theme`screens.lg`}) {
    grid-template-columns: repeat(7, 1fr);
  }
`;
