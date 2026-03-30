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

    const pages = useMemo(() => {
        if (pageCount <= 1) return [];

        const totalNumbers = 5; // Adjustment to show more/less numbers
        const totalBlocks = totalNumbers + 2;

        if (pageCount > totalBlocks) {
            const startPage = Math.max(2, currentPage - 1);
            const endPage = Math.min(pageCount - 1, currentPage + 1);

            let pages: (number | string)[] = _.range(startPage, endPage + 1);

            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (pageCount - endPage) > 1;
            const spillOffset = totalNumbers - (pages.length + 1);

            switch (true) {
                case (hasLeftSpill && !hasRightSpill): {
                    const extraPages = _.range(startPage - spillOffset, startPage);
                    pages = ['...', ...extraPages, ...pages];
                    break;
                }
                case (!hasLeftSpill && hasRightSpill): {
                    const extraPages = _.range(endPage + 1, endPage + spillOffset + 1);
                    pages = [...pages, ...extraPages, '...'];
                    break;
                }
                case (hasLeftSpill && hasRightSpill):
                default: {
                    pages = ['...', ...pages, '...'];
                    break;
                }
            }

            return [1, ...pages, pageCount];
        }

        return _.range(1, pageCount + 1);
    }, [pageCount, currentPage]);

    if (pages.length === 0) return null;

    return (
        <div className="w-full px-[1rem] flex items-center justify-center gap-x-4 md:gap-x-8 mt-12 py-8">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="cursor-pointer flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed text-[#1A1A2E] text-sm md:text-base font-medium transition-opacity hover:opacity-70"
            >
                <LuArrowLeft size={18} />
                <Text display={{ base: 'none', md: 'block' }}>Previous</Text>
            </button>

            <div className="flex items-center justify-center gap-x-2 md:gap-x-4">
                {pages.map((page, index) => {
                    if (page === '...') {
                        return (
                            <div key={`dots-${index}`} className="text-[#1A1A2E] text-sm md:text-base font-medium min-w-[2.5rem] h-[2.5rem] flex items-center justify-center">
                                ...
                            </div>
                        );
                    }

                    const pageNum = page as number;
                    return (
                        <button
                            key={pageNum}
                            onClick={() => onPageChange(pageNum)}
                            className={classNames({
                                "cursor-pointer rounded-2xl md:rounded-[18px] min-w-[2.5rem] h-[2.5rem] md:min-w-[3rem] md:h-[3rem] flex items-center justify-center text-sm md:text-base font-medium transition-all": true,
                                "bg-[#FF0101] text-white shadow-md": currentPage === pageNum,
                                "bg-transparent text-[#1A1A2E] hover:bg-[#1A1A2E10]": currentPage !== pageNum,
                            })}
                        >
                            {pageNum}
                        </button>
                    );
                })}
            </div>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === pageCount}
                className="cursor-pointer flex justify-center items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed text-[#1A1A2E] text-sm md:text-base font-medium transition-opacity hover:opacity-70"
            >
                <Text display={{ base: 'none', md: 'block' }}>Next</Text>
                <LuArrowRight size={18} />
            </button>
        </div>
    );
};

export default Pagination;