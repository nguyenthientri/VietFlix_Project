import { ResponseBody } from "../types/CombineCredit.type";
import { CreditResponse } from "../types/Credit.type";
import { Person } from "../types/Person.type";
import { fetchData } from "./Movies.api";

export const getCredits = (id: string, language = "en-US") => {
    return fetchData<CreditResponse>(`movie/${id}/credits`, { language });
};
export const getPersonInfo = (id: string, language = "en-US") => {
    return fetchData<Person>(`person/${id}`, { language });
};
export const getCombinedCredit = (id: string, language = "en-US") => {
    return fetchData<ResponseBody>(`person/${id}/combined_credits`, {
        language,
    });
};
