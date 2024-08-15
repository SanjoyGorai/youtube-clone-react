
export default function timeAgo(date) {
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
