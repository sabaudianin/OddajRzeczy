import React from 'react';

const RenderList = ({item, index}) => {
    return (
        <div key={index}>
            <div className="flex justify-between">
                <div className={"text-left"}>
                    <h3 className={"font-semibold"}>{item.name}</h3>
                    <span>{item.target}</span>
                </div>
                <div className={"text-right"}>
                    <span>{item.need}</span>
                </div>
            </div>
            <hr className="border-black my-4"></hr>
        </div>
    );
};

export default RenderList;