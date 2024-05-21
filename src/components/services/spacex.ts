import { type Doc, type Spacex } from '../../types/api';

export const getLaunchById = async ({ id }: { id: string }) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${ id }`);
    const launch = await res.json() as Doc;
    console.log(launch)
    return launch;
}

export const getLatestLaunches = async () => {
    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            query: {},
            sort: {
                date_unix: 'asc',
            },
            limit: 12,
        })
    });
    const { docs: launches } = await res.json() as Spacex;
    return launches;
}
