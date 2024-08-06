import React, { useState } from 'react';

interface Citation {
    citation_id: string;
    snippet: string;
}

interface ClaimProps {
    claim: {
        start_index: number;
        end_index: number;
        claim_text: string;
        document_id: string;
        parent_claim_ids: string[];
        children_claim_ids: string[];
        relevant_citations: Citation[];
    };
    citations: {
        [key: string]: {
            fulltext: string;
            link: string;
            summary: string;
            tags: string[];
        };
    };
}

const Claim: React.FC<ClaimProps> = ({ claim, citations }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails((prev) => !prev);
    };

    return (
        <div className="p-4 my-4 border rounded-lg bg-gray-800 text-white">
            <p className="font-bold">{claim.claim_text}</p>
            <button
                className="text-blue-400 underline"
                onClick={toggleDetails}
            >
                {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
            {showDetails && (
                <div className="mt-2">
                    <p className="text-sm text-gray-400">Citations:</p>
                    {claim.relevant_citations.map((citation) => (
                        <div key={citation.citation_id} className="my-2">
                            <p className="text-yellow-400">{citation.snippet}</p>
                            <p className="text-sm text-gray-300">
                                {citations[citation.citation_id].summary}
                            </p>
                            <a
                                href={citations[citation.citation_id].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-300 underline block break-words"
                            >
                                {citations[citation.citation_id].link}
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Claim;
