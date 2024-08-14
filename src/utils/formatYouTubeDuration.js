export default function formatYouTubeDuration(duration) {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    const hours = (match[1] ? parseInt(match[1]) : 0);
    const minutes = (match[2] ? parseInt(match[2]) : 0);
    const seconds = (match[3] ? parseInt(match[3]) : 0);

    let result = '';

    if (hours > 0) {
        result += hours + ':';
    }

    // Ensure minutes and seconds are always two digits
    result += (minutes < 10 && hours > 0 ? '0' : '') + minutes + ':';
    result += (seconds < 10 ? '0' : '') + seconds;

    return result;
}
