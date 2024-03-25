import React from 'react';

function ContentCard({ image, title, paragraph }) {
    return (
        <div className="rounded overflow-hidden shadow-lg h-64 flex flex-col justify-start items-start">
            <div style={{ backgroundImage: `url(${image})`, height: '140px' }} className="w-full bg-cover" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{paragraph}</p>
            </div>
        </div>
    );
}

export default ContentCard;