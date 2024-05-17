import {AxiosError} from "axios";

export const handleUnauthorizedError = (e: unknown) => {
    if (e instanceof AxiosError) {
        if (e.response && e.response.status === 401) {

        }
    }
    console.log('fetchHomeCardsWorker ошибка', e)
}
