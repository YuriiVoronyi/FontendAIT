import React from 'react'

const Friend: React.FC<{ photo: string, i: number }> = ({ photo, i }) => {
    // if (i === 6) {
    //     return (
    //         <img className="bottomLeft" src={photo} alt={`friend${i + 1}`} />
    //     )
    // }

    // if (i === 8) {
    //     return (
    //         <img className="bottomRight" src={photo} alt={`friend${i + 1}`} />
    //     )
    // }

    let nameOfClass = '';

    // if (i === 6) {
    //     nameOfClass += ' bottomLeft';
    // }

    // if (i === 8) {
    //     nameOfClass += ' bottomRight';
    // }

    nameOfClass += i === 6 ? ' bottomLeft' : i === 8 ? ' bottomRight' : '';

    return (
        <img className={nameOfClass} src={photo} alt={`friend${i + 1}`} />
    )
}

export default Friend