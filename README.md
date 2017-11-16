# Landing Page

Landing page realizzata con Foundation 5.

## Requisiti 

- [Node.js](http://nodejs.org)
- [Bower](https://github.com/bower/bower): `[sudo] npm install -g bower`
- [Gulp](https://github.com/gulpjs/gulp): `[sudo] npm install -g gulp`

## Download e Dipendenze
Scaricare la **landing page** da GitHub.

Scaricare le dipendenze , posizionarsi sulla root della landing da shell ed eseguire i seguenti comandi:

- ``` $ bower install ```
- ``` $ npm install ```

## Build e visualizzazione

Per visualizzare la landing page è necessario buildare il codice. 

E' possibile eseguire solo la build e visualizzare il codice direttamente da browser aprendo l'index.html 
```
$ gulp build
```
oppure è possibile eseguire il codice su un servizio gestito da gulp. 
```
$ gulp 
```
Il comando sopra citato effettuerà la build e aprirà direttamente il browser sulla risorsa prestabilita. E' inoltre possibile accedere ( se le impostazioni di rete lo consentono) direttemente alla pagina da qualsiasi dispositivo posto sulla stessa rete

PS. in ambiente unix potrebbe essere necessario avviare gulp come sudoers
```
$ sudo gulp 
```