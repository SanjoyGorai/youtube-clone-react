function formatViewsCount(views) {
    // Convert views to a number if it's a string
    if (typeof views === 'string') {
        views = Number(views);

        // Check if conversion was successful
        if (isNaN(views)) {
            return 'Invalid number';
        }
    }

    if (views >= 1_000_000_000) {
        return (views / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B views';
    } else if (views >= 1_000_000) {
        return (views / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M views';
    } else if (views >= 1_000) {
        return (views / 1_000).toFixed(1).replace(/\.0$/, '') + 'K views';
    } else {
        return views + ' views';
    }
}

export function timeAgo(date) {
    const now = new Date();
    const past = new Date(date);
    const seconds = Math.floor((now - past) / 1000);

    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };

    for (const [key, value] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / value);
        if (interval > 1) {
            return `${interval} ${key}s ago`;
        } else if (interval === 1) {
            return `1 ${key} ago`;
        }
    }

    return "just now";
}


export default formatViewsCount