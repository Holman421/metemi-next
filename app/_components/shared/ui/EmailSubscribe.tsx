'use client';

import { useState } from 'react';

type Props = {
    className: string;
}


export default function EmailSubscribe({ className }: Props) {
    const [email, setEmail] = useState('');

    const handleSubscribe = async () => {
        // Prepare for server-side function call, e.g., server action or API
        // Example: await subscribeToNewsletter(email);
        console.log('Subscribing with email:', email);
    };

    return (
        <div className={`flex h-60 ${className} w-574`}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-24 py-2 rounded-l-full border bg-white border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleSubscribe}
                className="px-24 bg-secondary text-[24px] font-bold text-white rounded-r-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Subscribe
            </button>
        </div>
    );
}