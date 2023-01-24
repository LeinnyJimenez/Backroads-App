import React from 'react'

export const SocialLink = ({ id, href, iconClass, itemClass }) => {
    return (
        <li key={id}>
            <a href={href} target="_blank" rel="noreferrer" className={itemClass}
            >
                <i className={iconClass}></i>
            </a>
        </li>
    )
}
