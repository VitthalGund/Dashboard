import React from 'react'
import Candidate from './Candidate';

const CandidateList = () => {
    let candidates =
        [{ "email": "mjackson@example.net", "full_name": "Caleb Jefferson", "id": 1, "score": 80 }, { "email": "reyesnancy@example.com", "full_name": "Ann Vincent", "id": 2, "score": 86 }, { "email": "hahnjoshua@example.org", "full_name": "Nicholas Shaffer", "id": 3, "score": 94 }, { "email": "cirwin@example.org", "full_name": "Wayne Allen", "id": 4, "score": 20 }, { "email": "raymondortega@example.com", "full_name": "Katherine Rodriguez", "id": 5, "score": 15 }, { "email": "debrawilliamson@example.net", "full_name": "Eric Ward", "id": 6, "score": 25 }, { "email": "rjohnson@example.com", "full_name": "Ruben Simmons", "id": 7, "score": 38 }, { "email": "hhendricks@example.com", "full_name": "Joe Williamson", "id": 8, "score": 67 }, { "email": "alexander06@example.com", "full_name": "Richard Thompson", "id": 9, "score": 2 }, { "email": "nicolecervantes@example.com", "full_name": "Mary Garza", "id": 10, "score": 88 }]
    return (
        <>
            <section className="container mx-auto  font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-600">
                                    <th className="px-4 py-3">Candidate</th>
                                    <th className="px-4 py-3">Score</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {
                                    candidates.sort((a, b) => b.score - a.score).map((item, idx) => {
                                        return (
                                            <Candidate
                                                full_name={item.full_name}
                                                email={item.email}
                                                img=''
                                                score={item.score}
                                                index={idx}
                                                key={item.full_name}
                                            />
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CandidateList;
