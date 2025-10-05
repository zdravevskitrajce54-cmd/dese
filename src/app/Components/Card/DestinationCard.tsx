import Link from 'next/link';
import React from 'react';

const DestinationCard = ({img,title,content}) => {
    return (
        <div className="new-top-desti-thumb">
        <img src={img} alt="img" />
        <Link href="/destination/destination-details" className="icon img-popup2">
        <i className="bi bi-plus-lg"></i>
        </Link>
        <div className="content">
            <h4><Link href="/destination/destination-details">{title}</Link></h4>
            <p>{content}</p>
        </div>
    </div>
    );
};

export default DestinationCard;