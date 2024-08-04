import { useState } from 'react';

const ClientFilter = () => {
  const [activeFilter, setActiveFilter] = useState('All');


  const filters = [
    { name: 'All', flag: '🔻' },
    { name: 'KSA', flag: '🔻'},
    { name: 'EGY', flag: '🔻' },
    { name: 'UAE', flag: '🔻' },
  ];

  return (
    <div className="flex flex-col items-center mb-12">
      <div className="flex space-x-2">
        {filters.map((filter) => (
          <button
            key={filter.name}
            className={`px-6 py-2 rounded-full ${
              activeFilter === filter.name
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-700'
            } ${filter.name === 'All' ? 'px-6' : ''}`}
            onClick={() => setActiveFilter(filter.name)}
          >
            {filter.flag && <span className="mr-2">{filter.flag}</span>}
            {filter.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClientFilter;
