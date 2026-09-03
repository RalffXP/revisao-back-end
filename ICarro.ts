import z from 'zod'

export const ICarro = z.object({
    marca: z.string().min(2),
    placa: z.string().min(8).max(8).describe("placas devem ter 8 caracteres"),
    ano: z.string().min(1).max(4),
    cor: z.string().min(1),
    preco: z.number().min(0)
})

    export type ICarro = z.infer<typeof ICarro>;