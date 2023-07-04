import React from 'react';
import SharedState from "host/SharedState";

export default function AudioPlayer({someProp}: {someProp: number}) {
    const {count, increment} = SharedState();

    return (
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <div>Name: AudioPlayerr</div>
            <div>Framework: react</div>
            <div>Language: TypeScript</div>
            <div>CSS: Tailwind</div>
            <div>Count {count}</div>
            <button onClick={increment} className="bg-green-500"> +1 </button>
        </div>
    );
}