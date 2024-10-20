import React, { useState } from 'react';
import {
  StyledFilterContainer,
  StyledFilterHeader,
  StyledFilterTitle,
  StyledClearButton,
  StyledFilterList,
  StyledFilterItem,
  StyledFilterTitleItem,
  StyledFilterContent,
  StyledToggleIcon,
} from './Filter.style';  

const FilterComponent: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const toggleFilter = (filter: string) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  const filterOptions = [
    'Type of Plants',
    'Price',
    'Nursery',
    'Ideal Plants Location',
    'Indoor/ Outdoor',
    'Maintenance',
    'Plant Size',
    'Water Schedule',
    'Color',
    'Seasonal',
    'Light Efficient',
  ];

  return (
    <StyledFilterContainer>
      <StyledFilterHeader>
        <StyledFilterTitle>Filter</StyledFilterTitle>
        <StyledClearButton>CLEAR ALL</StyledClearButton>
      </StyledFilterHeader>
      <StyledFilterList>
        {filterOptions.map((filter) => (
          <StyledFilterItem key={filter}>
            <StyledFilterTitleItem onClick={() => toggleFilter(filter)}>
              {filter}
              <StyledToggleIcon>{activeFilter === filter ? '-' : '+'}</StyledToggleIcon>
            </StyledFilterTitleItem>
            {activeFilter === filter && (
              <StyledFilterContent>
              </StyledFilterContent>
            )}
          </StyledFilterItem>
        ))}
      </StyledFilterList>
    </StyledFilterContainer>
  );
};

export default FilterComponent;
