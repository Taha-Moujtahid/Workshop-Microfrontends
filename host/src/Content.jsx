import AudioPlayer from "AudioPlayer/AudioPlayer";
import { Suspense } from "react";
import SafeComponent from "./SafeComponent";
import SongList from "SongList/SongList";

export default function Content() {
    return (
        <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0 flex mb-4" >
                    <div className="flex w-1/4 border-4 border-dashed border-gray-200 rounded-lg h-96">
                        <SafeComponent >
                            <AudioPlayer name="test"/>
                        </SafeComponent>
                    </div>
                    <div className="flex w-1/2 border-4 border-dashed border-gray-200 rounded-lg h-96">
                        <SongList/>
                    </div>
                    <div className="flex w-1/4 border-4 border-dashed border-gray-200 rounded-lg h-96">
                        <h1 className="text-3xl font-bold leading-tight text-gray-900">Das hören deine Freunde</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}