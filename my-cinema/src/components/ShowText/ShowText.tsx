import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState, ReactNode } from "react";

interface ShowTextProps {
    first_children: ReactNode;
    second_children?: ReactNode;
    maxLines: number;
}

const ShowText = ({
    first_children,
    second_children,
    maxLines,
}: ShowTextProps) => {
    const [showReadMore, setShowReadMore] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const element = contentRef.current;
        if (element) {
            const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
            const maxHeight = lineHeight * maxLines;
            if (element.scrollHeight > maxHeight) {
                setShowReadMore(true);
            }
        }
    }, [second_children, maxLines]);

    return (
        <div className="flex flex-col">
            <div>{first_children}</div>
            <div>
                <p
                    ref={contentRef}
                    style={
                        !isExpanded
                            ? {
                                  display: "-webkit-box",
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                  WebkitLineClamp: maxLines,
                              }
                            : undefined
                    }
                    className="text-gray-700 text-[15px] transition-all duration-200 ease-in-out"
                >
                    {second_children}
                </p>
                {showReadMore && (
                    <div className="flex justify-end">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="font-bold text-sm text-blue-400 hover:text-blue-600 mt-1 pr-3 self-start"
                        >
                            {isExpanded ? (
                                <>Show less</>
                            ) : (
                                <>
                                    Read more{" "}
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
export default ShowText;
