import {useEffect, useState} from 'react';
import Link from 'next/link';
import css from './eventsPanel.module.css';
import {events2026, EventItem} from '../../data/events';

export const EventsPanel = () => {
    const [today, setToday] = useState<string | null>(null);

    useEffect(() => {
        setToday(new Date().toISOString().slice(0, 10));
    }, []);

    const isPast = (event: EventItem) => today !== null && event.date < today;

    return (
        <div className={css.eventsBox}>
            <h2><Link href="/akce/">Kalendář akcí 2026</Link></h2>
            {events2026.map((event, idx) => (
                <div key={idx} className={`${css.eventItem} ${isPast(event) ? css.past : ''}`}>
                    <span className={css.eventDate}>{event.dateLabel}</span>
                    {event.link ? (
                        <Link href={event.link} className={css.eventLink}>{event.title}</Link>
                    ) : (
                        <span>{event.title}</span>
                    )}
                </div>
            ))}
        </div>
    );
};
