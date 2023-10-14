import fetchSonarr from "@/libs/fetch-sonarr";


export async function GET(request: Request) {

    const hearthbeat = await fetchSonarr('GET', '/api/v3/health', {});

    

    return new Response(JSON.stringify({
        status: hearthbeat.data.status,
    }), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
}

