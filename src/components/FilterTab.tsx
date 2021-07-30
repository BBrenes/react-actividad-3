import React from 'react'
import Button from '@material-ui/core/Button'

interface Props {
    theme: {
      filterTab: {
          selected: object;
          noSelected: object;
      };
    };
    category: Category;
    action: (id: number) => void;
}

interface Category {
    name: string;
    selected: boolean;
    id: number;
}

const FilterTab:React.FC<Props> = ({theme, category, action, ...other}) => {

    return (
        <Button 
            {...other}
            onClick={() => action(category.id)}
            style={Object.assign({}, theme.filterTab as Object, (category.selected ? theme.filterTab.selected : theme.filterTab.noSelected) as Object)}
        >{category.name}
        </Button>
    )
} 

export default FilterTab;