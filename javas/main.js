const { createApp } = Vue;

// invochiamo la funzione passando come argomento un oggetto

// crea l'istanza di Vue. Sull'istanza invochiamo la funzione
// mount. Questa si aspetta come un argomento un selettore html valido
createApp({
    // data: function () {}
    data() {
        // la funzione data deve SEMPRE ritornare un oggetto
        return {
            utenti: [{
                name: 'Michele',
                avatar: 'avatar_1.jpg',
                visible: true,
                messages: [{
                    date: luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/LL/yyyy HH:mm:ss').toFormat('dd/MM/yyyy HH:mm:ss'),
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/LL/yyyy HH:mm:ss').toFormat('dd/MM/yyyy HH:mm:ss'),
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/LL/yyyy HH:mm:ss').toFormat('dd/MM/yyyy HH:mm:ss'),
                    message: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'avatar_2.jpg',
                visible: true,
                messages: [{
                    date: luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/LL/yyyy HH:mm:ss').toFormat('dd/MM/yyyy HH:mm:ss'),
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/LL/yyyy HH:mm:ss').toFormat('dd/MM/yyyy HH:mm:ss'),
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/LL/yyyy HH:mm:ss').toFormat('dd/MM/yyyy HH:mm:ss'),
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'avatar_3.jpg',
                visible: true,
                messages: [{
                    date: luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/LL/yyyy HH:mm:ss').toFormat('dd/MM/yyyy HH:mm:ss'),
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/LL/yyyy HH:mm:ss').toFormat('dd/MM/yyyy HH:mm:ss'),
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/LL/yyyy HH:mm:ss').toFormat('dd/MM/yyyy HH:mm:ss'),
                    message: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'avatar_4.jpg',
                visible: true,
                messages: [{
                    date: luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/LL/yyyy HH:mm:ss').toFormat('dd/MM/yyyy HH:mm:ss'),
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                           date: luxon.DateTime.fromFormat('10/01/2020 15:50:00', 'dd/LL/yyyy HH:mm:ss').toFormat('dd/MM/yyyy HH:mm:ss'),
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
            ],
            selectedUser: -1,
            newMex: "",
        };

    },
    methods: {
        nuovoMessaggioInviato() {


            this.utenteSelezionato.messages.push({
                date: '10/01/2020 15:50:00',
                message: this.messaggioInviato,
                status: 'sent'
            })

            setTimeout(() => {
                this.utenteSelezionato.messages.push({
                    date: '10/01/2020 15:50:00',
                    message: 'Aiutami.',
                    status: 'received'
                })
            }, 2000);

            this.messaggioInviato = ""
        },

        ricercaMessaggioChat() {
            console.log(this.ricercaMessaggio)

        }

    },
    
    beforeMount() {
        this.utenteSelezionato = this.utenti[0]
    },

}).mount("#app")