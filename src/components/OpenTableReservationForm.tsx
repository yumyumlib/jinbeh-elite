'use client';

import { useState, useMemo } from 'react';

interface OpenTableReservationFormProps {
    restaurantId: string;
    locationName: string;
    className?: string;
}

export default function OpenTableReservationForm({
    restaurantId,
    locationName,
    className = '',
}: OpenTableReservationFormProps) {
    // Default to today's date
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];

    const [date, setDate] = useState(todayStr);
    const [time, setTime] = useState('19:00');
    const [partySize, setPartySize] = useState(2);

    // Generate next 30 days for date options
    const dateOptions = useMemo(() => {
        const options = [];
        for (let i = 0; i < 30; i++) {
            const d = new Date();
            d.setDate(d.getDate() + i);
            const value = d.toISOString().split('T')[0];
            const label = d.toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
            });
            options.push({ value, label });
        }
        return options;
    }, []);

    // Time slots from 11:00 AM to 9:30 PM
    const timeOptions = useMemo(() => {
        const options = [];
        for (let hour = 11; hour <= 21; hour++) {
            for (const min of ['00', '30']) {
                if (hour === 21 && min === '30') continue;
                const h24 = `${hour.toString().padStart(2, '0')}:${min}`;
                const h12 = hour > 12 ? hour - 12 : hour;
                const ampm = hour >= 12 ? 'PM' : 'AM';
                const label = `${h12}:${min} ${ampm}`;
                options.push({ value: h24, label });
            }
        }
        return options;
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Build the OpenTable URL with pre-filled params
        const dateTime = `${date}T${time}`;
        const url = `https://www.opentable.com/booking/restref/availability?rid=${restaurantId}&partySize=${partySize}&dateTime=${dateTime}&lang=en-US`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 ${className}`}
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent-red/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <div>
                    <h3 className="text-lg font-heading font-bold text-charcoal">
                        Reserve at {locationName}
                    </h3>
                    <p className="text-sm text-charcoal/60">via OpenTable</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {/* Party Size */}
                <div>
                    <label htmlFor={`party-${restaurantId}`} className="block text-sm font-medium text-charcoal/70 mb-1.5">
                        Party Size
                    </label>
                    <select
                        id={`party-${restaurantId}`}
                        value={partySize}
                        onChange={(e) => setPartySize(parseInt(e.target.value))}
                        className="w-full px-4 py-3 bg-warm-ivory rounded-xl border border-charcoal/10 text-charcoal font-medium focus:outline-none focus:ring-2 focus:ring-accent-red/30 focus:border-accent-red/50 transition-all appearance-none cursor-pointer"
                    >
                        {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                            <option key={n} value={n}>
                                {n} {n === 1 ? 'Guest' : 'Guests'}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Date */}
                <div>
                    <label htmlFor={`date-${restaurantId}`} className="block text-sm font-medium text-charcoal/70 mb-1.5">
                        Date
                    </label>
                    <select
                        id={`date-${restaurantId}`}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-3 bg-warm-ivory rounded-xl border border-charcoal/10 text-charcoal font-medium focus:outline-none focus:ring-2 focus:ring-accent-red/30 focus:border-accent-red/50 transition-all appearance-none cursor-pointer"
                    >
                        {dateOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Time */}
                <div>
                    <label htmlFor={`time-${restaurantId}`} className="block text-sm font-medium text-charcoal/70 mb-1.5">
                        Time
                    </label>
                    <select
                        id={`time-${restaurantId}`}
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full px-4 py-3 bg-warm-ivory rounded-xl border border-charcoal/10 text-charcoal font-medium focus:outline-none focus:ring-2 focus:ring-accent-red/30 focus:border-accent-red/50 transition-all appearance-none cursor-pointer"
                    >
                        {timeOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <button
                type="submit"
                className="w-full btn btn-primary btn-shimmer py-4 text-base font-semibold inline-flex items-center justify-center gap-2"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Find a Table
            </button>

            <p className="text-xs text-charcoal/50 text-center mt-3">
                Powered by OpenTable · Free, instant confirmation
            </p>
        </form>
    );
}
