
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Search, ListFilter } from 'lucide-react';
import { 
  ToggleGroup, 
  ToggleGroupItem 
} from '@/components/ui/toggle-group';
import { Input } from '@/components/ui/input';

type FilterOption = {
  value: string;
  label: string;
}

type FilterBarProps = {
  title: string;
  options: FilterOption[];
  onFilterChange: (filter: string) => void;
  onSearchChange: (search: string) => void;
}

export function FilterBar({ title, options, onFilterChange, onSearchChange }: FilterBarProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const handleFilterChange = (value: string) => {
    if (value) {
      setActiveFilter(value);
      onFilterChange(value);
    } else {
      setActiveFilter('all');
      onFilterChange('all');
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
      <h2 className="text-3xl font-display">{title}</h2>
      
      <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
        <div className="relative w-full sm:w-56">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input 
            placeholder="Search..." 
            className="pl-10 bg-techno-dark border-gray-700 focus:border-neon-purple"
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        
        <ToggleGroup type="single" variant="outline" onValueChange={handleFilterChange} defaultValue="all">
          <ToggleGroupItem value="all" className="text-xs">
            All
          </ToggleGroupItem>
          {options.map((option) => (
            <ToggleGroupItem key={option.value} value={option.value} className="text-xs">
              {option.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </div>
  );
}
