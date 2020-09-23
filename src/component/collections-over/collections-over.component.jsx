import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

import CollectionsPreview from '../collections-preview/collections-preview.component';

import './collections-over.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-over'>  
        {
            collections.map( ({ id, ...otherCollectionProps }) => (
                <CollectionsPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);


const mapToStateProps = createStructuredSelector({
    collections: selectCollectionsForPreview 
});

export default connect(mapToStateProps)(CollectionsOverview);