
/*
    Forenkling
     - Kan ha flere polls - og hver poll kan ha flere spørsmål
     - man kan logge inn som ulike brukere
     - systemet skal lagre hvem som har stemt hva på hvilket spørsmål
*/

const model = {
    // app-ting
    app: {
        currentPage: 'vote', // options
        currentUser: 'per',
    },

    // inputs til hver side
    inputs: {
        votePage: {
        },
        optionsPage: {
            newOption: '',
        },
    },

    // felles data
    users: [
        { name: 'per', pwd: 'abc123' },
        { name: 'pål', pwd: 'abc123' },
        { name: 'joran', pwd: 'abc123', isAdmin: true },
    ],
    polls: [
        { id: 1, name: 'Evaluering' },
        { id: 2, name: 'Planlegging' },
    ],
    questions: [
        {
            id: 1,
            question: 'Hvordan var handleopplevelsen din?',
            options: ['Bra', 'Middels', 'Dårlig'],
            pollId: 1,
        },
        {
            id: 2,
            question: 'Hvordan var dagen din?',
            options: ['Bra', 'Middels', 'Dårlig'],
            pollId: 1,
        },
        {
            id: 3,
            question: 'Hva skal du gjøre i morgen?',
            options: [],
            pollId: 2,
        },
    ],
    answers: [
        {
            answer: 'Bra', user: 'per', questionId: 1,
        },
        {
            answer: 'Middels', user: 'pål', questionId: 1,
        },
        {
            answer: 'Dårlig', user: 'per', questionId: 2,
        },
        {
            answer: 'Bra', user: 'pål', questionId: 2,
        },
    ],


    // question: 'Hvordan var handleopplevelsen din?',
    // options: [
    //     {text: 'Bra', color: 'green', voteCount: 0},
    //     {text: 'Middels', color: 'yellow', voteCount: 3},
    //     {text: 'Dårlig', color: 'red', voteCount: 1},
    // ],
};