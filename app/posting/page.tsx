'use client'
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import("@/macrocosm/components/useQuil"), {
    ssr: false,
});
const Posting = () => {
    const [value, setValue] = useState<string>("")
    return (
        <div data-color-mode="dark" style={{ width: '100%', height: "100%" }} >
            <Editor value={value} setValue={setValue} />
        </div>
    );
};

export default Posting;
