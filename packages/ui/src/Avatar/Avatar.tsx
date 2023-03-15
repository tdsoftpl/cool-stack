import React from "react";
import {AvatarProps} from "./Avatar.props";
import {generateInitials} from "./Avatar.utils";

const Avatar: React.FC<AvatarProps> = ({nickname, src}) => {
    return src ? (
        <div className="h-[38px] w-[38px] rounded-full sm:h-12 sm:w-12">
            <img
                className="rounded-full p-px"
                src={src}
                alt={`${nickname} avatar`}
                loading="lazy"
            />
        </div>
    ) : (
        <div className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border-2 border-sky-300 bg-gray-300 sm:h-12 sm:w-12">
            <span className="text-sm font-medium leading-none text-gray-50 sm:text-lg">
                {generateInitials(nickname)}
            </span>
        </div>
    );
};

export default Avatar;
