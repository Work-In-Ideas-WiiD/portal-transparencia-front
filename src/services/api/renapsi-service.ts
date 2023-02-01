import { apiRenapsi } from "./api";


export async function getProjetos(ano: string | number, ambito: string, like: string, order?: string, mostrar?: number) {

    const { data } = await apiRenapsi.get(`lancamentos?ano=${ano}&ambito=${ambito}&like=${like}&order=${order}&mostrar=${mostrar}`);

    return data;
}