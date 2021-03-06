import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import { withRouter } from 'react-router-dom';

import {
    CollectionPreviewContainer,
    CollectionPreviewTitle,
    CollectionPreviewItemsContainer
} from './preview-collection.styles'

const CollectionPreview = ({ title, items, history, match, routeName }) => {
    return (
        <CollectionPreviewContainer>
            <CollectionPreviewTitle onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</CollectionPreviewTitle>
            <CollectionPreviewItemsContainer>
                {
                    items   
                    .filter((item, index) => index < 4)
                    .map((item) => {
                        return <CollectionItem key={item.id} item={item} /> 
                    })
                }
            </CollectionPreviewItemsContainer>
        </CollectionPreviewContainer>
    );
}


export default withRouter(CollectionPreview);