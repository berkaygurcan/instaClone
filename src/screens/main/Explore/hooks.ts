import {useState} from 'react';
import {mockExploreData} from '../../../config/mockData';

const ExploreHooks = () => {
  const [searchText, setSearchText] = useState('');

  const filteredData = mockExploreData
    .map(section => ({
      ...section,
      items: section.items.filter(content =>
        content.name.toLowerCase().includes(searchText.toLowerCase()),
      ),
    }))
    .filter(section => section.items.length > 0);

  const displayData = searchText.trim() === '' ? mockExploreData : filteredData;

  return {searchText, setSearchText, filteredData, displayData};
};

export default ExploreHooks;
