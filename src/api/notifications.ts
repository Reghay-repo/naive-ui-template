import { type EventSourceMessage, fetchEventSource } from '@microsoft/fetch-event-source';
import { toast } from 'vue-sonner'
import endpoints from '@/api/endpoints';

const url = import.meta.env.VITE_API_URL + endpoints.NOTIFICATIONS;
export const onopen = async (response: Response) =>  {
    if (response.ok) {
        return; // everything's good
    } else if (response.status >= 400 && response.status < 500 && response.status !== 429) {
        // client-side errors are usually non-retriable:
        console.log('On open response error from sse')
        throw new Error(response.status.toString());
    } else {
        console.log('On open response unknown error from sse')
        throw Error(response.status.toString());
    }
}

export const onmessage = (msg: EventSourceMessage) => {
    // if the server emits an error message, throw an exception
    // so it gets handled by the onerror callback below:
    let data =  msg.data.toString()
    if(msg.data) {
        toast.success(`Data for : ${data} have been extracted !`)
    }
}

export const onclose = () => {
    // if the server closes the connection unexpectedly, retry:
    console.log('On close message from sse !')
}

export const onerror = (err: any) => {
    console.log('On Error message from sse !')
}

export const notificationsInit = async (signal: AbortSignal, token: string) => {
    await fetchEventSource(url, { keepalive: true,
        openWhenHidden: true,
        signal: signal,
        headers: {
        "Authorization": "Bearer " + token,
        },
        onopen: onopen,
        onmessage: onmessage,
        onclose: onclose,
        onerror: onerror
    });
}