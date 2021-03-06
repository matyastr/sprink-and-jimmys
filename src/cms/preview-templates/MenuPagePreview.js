import React from 'react'

import { MenuPageTemplate } from '../../templates/menu-page';

const MenuPagePreview = ({ entry }) => (
    <MenuPageTemplate
        menu={{
            heading: entry.getIn(['data', 'heading']),
            introduction: entry.getIn(['data', 'introduction']),
            categories: entry.getIn(['data', 'categories']).toJS(),
        }}
    />
)

export default MenuPagePreview;
