import React, { useMemo } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';
import { Text } from '@chakra-ui/react';

interface Props {
    itemCount: number;
    pageSize: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ itemCount, pageSize, currentPage, onPageChange }) => {
    const pageCount = Math.ceil(itemCount / pageSize);

    const pages: number[] = useMemo(() => {
        if (pageCount <= 1) return [];

        const range = _.range(1, pageCount + 1);
        return range.filter((_, index) => (index <= 3) || (index >= (range.length - 3)));
    }, [pageCount]);

    if (pages.length === 0) return null;

    return (
        <div className="font-satoshi w-full px-[1rem] gap-x-[1.5rem] flex items-center justify-center">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="cursor-pointer flex items-center gap-1 disabled:opacity-30 disabled:bg-light text-ash text-sm font-medium"
            >
                <LuArrowLeft size={14} />
                <Text>
                    Previous
                </Text>
            </button>

            <div className="flex items-center justify-center gap-x-[0.75rem]">
                {pages.map((page, index) => (index === Math.floor(pages.length / 2) && pages.length > 2) ? (
                    <div key={page} className="text-ash text-sm lg:text-xl font-medium rounded-sm w-[2rem] h-[2rem] lg:w-[2.25rem] lg:h-[2.25rem] flex items-center justify-center">
                        ...
                    </div>
                ) : (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={classNames({
                            "cursor-pointer rounded-xl w-[2rem] h-[2rem] lg:w-[2.25rem] lg:h-[2.25rem] flex items-center justify-center text-ash text-sm  font-medium": true,
                            "bg-[#CC0000] lg:bg-secondary text-white": currentPage === page,
                            "bg-transparent text-ash": currentPage !== page,
                        })}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === pageCount}
                className="cursor-pointer flex justify-center items-center gap-1 disabled:opacity-30 disabled:bg-light text-ash text-sm font-medium"
            >
                <Text>Next</Text>
                <LuArrowRight size={14} />

            </button>
        </div>
    );
};

export default Pagination;