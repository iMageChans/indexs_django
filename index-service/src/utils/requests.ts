import axios from "axios";

async function request(data: any, urls: string) {
    const localUrl = 'http://web1:7000';
    const url = `${localUrl}${urls}`;
    try {
        const jsonData = JSON.stringify(data, (key, value) =>
            typeof value === 'bigint' ? value.toString() : value
        );
        const response = await axios.post(url, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*'
            }
        });
        console.log('Response:', jsonData);
    } catch (error) {
        console.error('Post Event Data Error:', error);
    }
}

export async function TokenTransfers(data: any){
    await request(data, '/api/transfers/')
}

export async function GreenPointTransfers(data: any){
    await request(data, '/api/green/point/transfers/')
}

export async function SwapTransfers(data: any){
    await request(data, '/api/swap/transfers/')
}