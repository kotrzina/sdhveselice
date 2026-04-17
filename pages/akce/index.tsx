import {useEffect, useState} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import css from './akce.module.css';
import {events2026, EventItem} from '../../data/events';

const AkcePage = () => {
    const [today, setToday] = useState<string | null>(null);

    useEffect(() => {
        setToday(new Date().toISOString().slice(0, 10));
    }, []);

    const isPast = (event: EventItem) => today !== null && event.date < today;

    return (
        <>
            <Head>
                <title>Kalendář akcí | SDH Veselice</title>
            </Head>
            <div className={'contentCard'}>
                <h1>Kalendář akcí 2026</h1>
                <div className={css.eventList}>
                    {events2026.map((event, idx) => (
                        <div key={idx} className={`${css.eventRow} ${isPast(event) ? css.past : ''}`}>
                            <span className={css.dateBadge}>{event.dateLabel}</span>
                            <span className={css.eventTitle}>
                                {event.link ? (
                                    <Link href={event.link} className={css.eventLink}>{event.title}</Link>
                                ) : (
                                    <span>{event.title}</span>
                                )}
                                {isPast(event) && <span className={css.pastLabel}>(proběhlo)</span>}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AkcePage;
