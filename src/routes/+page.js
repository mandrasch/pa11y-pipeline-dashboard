
import { base } from '$app/paths';

/** @type {import('./$types').PageLoad} */
export async function load(event) {
    // TODO: Is this the best way to load a local JSON file?
    // We need to use the special svelte event.fetch() method here:
    const result = await event.fetch(`${base}/pa11y-reports/reports.json`);
    const data = await result.json();
    const pa11yResults = data;
    return {
        pa11yResults
    }
}