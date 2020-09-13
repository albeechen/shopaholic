import React from 'react';
import './directory.styles.scss';
import MenuItem from '../meni-item/menu-item.component';
import Section from '../directory/directory_data.js';

class Directory extends React.Component {
    constructor(){
      super();

      this.state = { 
        sections: Section 
      };
    }

    

    render(){
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}

export default Directory; 
