import axios from "axios";

export default async function fetchSonarr(method: string, path: string, data: object) {


const request = await axios({
    method: method,
    url:  process.env.SONARR_URL +  path,
    data: data,
    headers: {
        "X-Api-Key": process.env.SONARR_API_KEY
    }, 

})

const response = await request

return  response;

}