

export interface ObjFormProps {
    ambito: string,
    ano: string,
    palavraChave: string
}

export interface ProjetosRes {
    id: number
    ambito: string
    orgao: string
    nome: string
    polo_id: null | number,
    orgao_id: null | number,
    programa_id: null | number,
    numero_instrumento: string
    numero_processo_admin: null | number,
    prazo: string
    termo_inicial: string
    termo_final: string,
    prorrogacao_data: null | string,
    valor: string
    quantidade: string
    aditivo: string
    aditivo_num: string
    uf: null | string,
    created_at: string
    updated_at: string
}