// src/data/timeline.js

const todasFotos =
    import.meta.glob(
        '../assets/img/timeline/**/*.{jpg,jpeg,png,webp}', {
            eager: true
        }
    )

export const timeline = Object.entries(todasFotos)
    .reduce((acc, [path, mod]) => {
        const arquivo = path.split('/').pop() // ex: sommerfest_2024-1.jpg
        const semExtensao = arquivo.replace(/\.(jpg|jpeg|png|webp)$/, '') // sommerfest_2024-1
        const partes = semExtensao.split('-') // ['sommerfest_2024', '1']
        const ordem = parseInt(partes[partes.length - 1]) // 1
        const chave = partes.slice(0, -1).join('-') // sommerfest_2024


        const anoMatch = chave.match(/(\d{4})$/)
        const ano = anoMatch ? anoMatch[1] : 'Sem data'

        const titulo = chave
            .replace(/_\d{4}$/, '')
            .replace(/[_-]/g, ' ')
            .split(' ')
            .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
            .join(' ')

        const grupo = acc.find((g) => g.chave === chave)

        if (grupo) {
            grupo.fotos.push({
                src: mod.default,
                ordem
            })
        } else {
            acc.push({
                chave,
                ano,
                titulo,
                fotos: [{
                    src: mod.default,
                    ordem
                }],
            })
        }

        return acc
    }, [])
    .map((grupo) => ({
        ...grupo,
        fotos: grupo.fotos
            .sort((a, b) => a.ordem - b.ordem) // ordena pelo número
            .map((f) => f.src),
    }))
    .sort((a, b) => a.ano.localeCompare(b.ano)) // ordena por ano