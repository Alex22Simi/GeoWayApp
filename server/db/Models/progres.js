const Badge = require("./Badge")

const calculZileConsecutive = (accessLog) => {
    let zile = 0
    const today = new Date().toLocaleDateString('en-CA', { timezone: 'Europe/Bucharest' })
    let ziCurenta = today

    while (accessLog.includes(ziCurenta)) {
        zile++
        const ziAnterioara = new Date(ziCurenta)
        ziAnterioara.setDate(ziAnterioara.getDate() - 1)
        ziCurenta = ziAnterioara.toLocaleDateString('en-CA', { timezone: 'Europe/Bucharest' })
    }

    return zile
}


const calculBadgeZile = async (user) => {
    const zileConsecutive = calculZileConsecutive(user.progres.accessLog)
    for await (const badge of BADGEURI_ZILE) {
        if (zileConsecutive >= badge.minimZile) {
            if (!user?.progres?.badgeuri?.includes(badge.id)) {
                user.progres.badgeuri.push(badge.id)
            }
        } else {
            return
        }
    }
}

const calculBadgeQuizzuri = async (user) => {
    const rezultateQuizz = user?.progres?.lectiiFinalizate?.romania?.lectii?.map(o => o?.punctajQuizz)
    for await (const quizz of BADGEURI_QUIZZURI) {
        if (rezultateQuizz?.filter(q => q > quizz.punctajMinim)?.length > quizz.nrMinim) {
            user.progres.badgeuri.push(quizz.id)
        }
    }

}

const calculBadgeExamene = async (user) => {
    const rezExamen = user?.progres?.examene?.map(o => o?.punctaj)
    for await (const examen of BADGEURI_EXAMENE) {
        if (rezExamen?.filter(q => q > examen.punctajMinim)?.length > examen.nrMinim) {
            user.progres.badgeuri.push(examen.id)
        }
    }

}

const calculBadgeHarti = async (user) => {
    const rezHarti = user?.progres?.harti?.map(o => o?.faraGreseli)
    for await (const harta of BADGEURI_HARTI) {
        if (rezHarti?.filter(q => q == true)?.length > harta.nrMinim) {
            user.progres.badgeuri.push(harta.id)
        }
    }

}

const calculBadgeuri = async (user) => {
    await calculBadgeZile(user)
    await calculBadgeQuizzuri(user)
    await calculBadgeExamene(user)
    await calculBadgeHarti(user)
}

const BADGEURI_ZILE = [
    { minimZile: 1, id: '682ca7537b54ee9dd50ef132' },
    { minimZile: 5, id: '682ca9517b54ee9dd50ef139' },
    { minimZile: 10, id: '682caa017b54ee9dd50ef13b' },
    { minimZile: 20, id: '682dabd6804df575f36d679a' },
    { minimZile: 30, id: '682db022804df575f36d679c' },
    { minimZile: 60, id: '682db2b9804df575f36d679e' }
]

const BADGEURI_QUIZZURI = [
    { nrMinim: 3, punctajMinim: 90, id: '682cac4a7b54ee9dd50ef13f' },
    { nrMinim: 6, punctajMinim: 90, id: '682dbb5e804df575f36d67a0' },
    { nrMinim: 15, punctajMinim: 90, id: '682dbf3f804df575f36d67a2' },
    { nrMinim: 20, punctajMinim: 90, id: '682dc0ba804df575f36d67a4' }
]

const BADGEURI_EXAMENE = [
    { nrMinim: 3, punctajMinim: 90, id: '682cacd37b54ee9dd50ef141' },
    { nrMinim: 6, punctajMinim: 90, id: '682dc5f8804df575f36d67a6' },
    { nrMinim: 15, punctajMinim: 90, id: '682dc6d2804df575f36d67a8' },
    { nrMinim: 20, punctajMinim: 90, id: '682dc83a804df575f36d67aa' },
]

const BADGEURI_HARTI = [
    { nrMinim: 5, unitate: 'Romania', id: '682de418804df575f36d67ac' },
    { nrMinim: 2, unitate: 'Europa', id: '682de42d804df575f36d67ae' }
]



module.exports = {
    calculZileConsecutive,
    calculBadgeuri
}