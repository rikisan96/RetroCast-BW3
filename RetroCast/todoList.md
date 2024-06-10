
# Retrocast

## Pagine da creare

1. Login Page (id, pass)
2. Register Page (id_new_user, password, NomeProfile (visibile agli altri utenti), eta' )
3. Utenti (Nome utente, giochi giocati, amici)
4. STORE (
      - Landing page Store/home,
      - Pagine selected Game (tutte le info sul gioco: Nome, immagine, genere)
        Interazioni su Game:
       Aggiungi alla lista desideri,
        Like,
         Acquista gioco
         Correlated Games (.filter su generi in comune tra tutti i giochi e quello scelto (max 3)))


      - Libreria:

        menu' a tendina sulla sinistra:
          lista giochi installati/acquitati (text-gray non installati, text-white installati)
          sezione Giochi Preferiti

      Libreria_Landing page
        lista cards con tutti giochi (db.json => AllGames[])

      Libreria_selected_game
        Immagine in testata con titolo
        Div bottone INSTALLA/gioca
          btn-dropdown:
            impostazioni
              disinstalla
            Aggiungi ai Preferiti
        Info generiche gioco: genere, screenshots, requisiti pc
        link a: pagina del negozio (Dettaglio Gioco)

      Pagina Dettaglio Utente Loggato (Da mostrare come Titolo Pagina):

    Header:
      UserID,
      user_image,
      user_name,
      user_region

    <section>Last 3 Games played


      Dettaglio Gioco (popolata dinamicamemnte da JS)
