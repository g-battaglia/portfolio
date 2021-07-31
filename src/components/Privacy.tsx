import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #0000007a;
  z-index: 100000;

  .close {
    position: fixed;
    left: 0;
    top: 0;
    font-size: 1.5rem;
    border-radius: 8px;
    color: black;
  }
  .inner {
    border-radius: 8px;
    padding: 4rem;
    position: fixed;
    height: 70vh;
    width: 70vw;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: scroll;
    z-index: 1000001;
    background-color: #fff;
    text-align: justify;
    @media screen and (max-width: 1024px) {
      width: 90%;
      padding: 4rem 1rem;
    }
  }
`;

type Props = {
  privacy: boolean;
  setPrivacy: Function;
};
const Privacy: React.FC<Props> = ({ privacy, setPrivacy }) => {
  function clickHandler() {
    setPrivacy(false);
  }
  return (
    <Div className={privacy ? "" : "hide"} onClick={clickHandler}>
      <div className="inner">
        <button className="button is-white close">
          <FontAwesomeIcon onClick={clickHandler} icon="times" />
        </button>
        <div id="ca_info_plus">
          <p>
            <strong>INFORMATIVA PRIVACY</strong>
            <br />
            In ottemperanza degli obblighi derivanti dalla normativa nazionale
            (D. Lgs 30 giugno 2003 n. 196, Codice in materia di protezione dei
            dati personali) e comunitaria (Regolamento europeo per la protezione
            dei dati personali n. 679/2016, GDPR) e successive modifiche, il
            presente sito rispetta e tutela la riservatezza dei visitatori e
            degli utenti, ponendo in essere ogni sforzo possibile e
            proporzionato per non ledere i diritti degli utenti.
          </p>
          <p>
            <br />
            La presente privacy policy si applica esclusivamente alle attività
            online del presente sito ed è valida per i visitatori/utenti del
            sito. Non si applica alle informazioni raccolte tramite canali
            diversi dal presente sito web. Lo scopo dell'informativa privacy è
            di fornire la massima trasparenza relativamente alle informazioni
            che il sito raccoglie e come le usa.
          </p>
          <p>
            <strong>Base giuridica del trattamento</strong>
            <br />
            Il presente sito tratta i dati in base al consenso. Con l'uso o la
            consultazione del presente sito i visitatori e gli utenti approvano
            esplicitamente la presente informativa privacy e acconsentono al
            trattamento dei loro dati personali in relazione alle modalità e
            alle finalità di seguito descritte, compreso l'eventuale diffusione
            a terzi se necessaria per l'erogazione di un servizio.
            <br />
            Il conferimento dei dati e quindi il Consenso alla raccolta e al
            trattamento dei dati è facoltativo, l'Utente può negare il consenso,
            e può revocare in qualsiasi momento un consenso già fornito (tramite
            il link Contatti a fondo pagina). Tuttavia negare il consenso può
            comportare l'impossibilità di erogare alcuni servizi e l'esperienza
            di navigazione nel sito potrebbe essere compromessa.
          </p>
          <p>
            A partire dal 25 maggio 2018 (data di entrata in vigore del GDPR),
            il presente sito tratterà alcuni dei dati in base ai legittimi
            interessi del titolare del trattamento.
          </p>
          <p>
            <strong>Dati raccolti e finalità</strong>
            <br />
            Come tutti i siti web anche il presente sito fa uso di log files nei
            quali vengono conservate informazioni raccolte in maniera
            automatizzata durante le visite degli utenti. Le informazioni
            raccolte potrebbero essere le seguenti:
          </p>
          <p>
            - indirizzo internet protocol (IP);
            <br />- tipo di browser e parametri del dispositivo usato per
            connettersi al sito;
            <br />- nome dell'internet service provider (ISP);
            <br />- data e orario di visita;
            <br />- pagina web di provenienza del visitatore (referral) e di
            uscita;
            <br />- eventualmente il numero di click.
          </p>
          <p>
            <br />
            Le suddette informazioni sono trattate in forma automatizzata e
            raccolte in forma esclusivamente aggregata al fine di verificare il
            corretto funzionamento del sito, e per motivi di sicurezza (dal 25
            maggio 2018 tali informazioni saranno trattate in base ai legittimi
            interessi del titolare).
            <br />A fini di sicurezza (filtri antispam, firewall, rilevazione
            virus), i dati registrati automaticamente possono eventualmente
            comprendere anche dati personali come l'indirizzo Ip, che potrebbe
            essere utilizzato, conformemente alle leggi vigenti in materia, al
            fine di bloccare tentativi di danneggiamento al sito medesimo o di
            recare danno ad altri utenti, o comunque attività dannose o
            costituenti reato. Tali dati non sono mai utilizzati per
            l'identificazione o la profilazione dell'utente, ma solo a fini di
            tutela del sito e dei suoi utenti (dal 25 maggio 2018 tali
            informazioni saranno trattate in base ai legittimi interessi del
            titolare).
          </p>
          <p>
            Per quanto riguarda servizi forniti all'utente del sito, come la
            newsletter, il sito rileva e registra alcuni dati identificativi
            dell'utente, compreso l’indirizzo mail. Tali dati si intendono
            volontariamente forniti dall'utente al momento della richiesta di
            erogazione del servizio. Inserendo un commento o altra informazione
            l'utente accetta espressamente l'informativa privacy. I contenuti
            NON verranno forniti a terzi.
          </p>
          <p>
            I dati ricevuti verranno utilizzati esclusivamente per l'erogazione
            del servizio richiesto e per il solo tempo necessario per la
            fornitura del servizio.
            <br />
            Le informazioni che gli utenti del sito riterranno di rendere
            pubbliche tramite i servizi e gli strumenti messi a disposizione
            degli stessi, sono fornite dall'utente consapevolmente e
            volontariamente, esentando il presente sito da qualsiasi
            responsabilità in merito ad eventuali violazioni delle leggi. Spetta
            all'utente verificare di avere i permessi per l'immissione di dati
            personali di terzi o di contenuti tutelati dalle norme nazionali ed
            internazionali.
          </p>
          <p>
            <br />
            <strong>Utilizzo informazioni</strong>
            <br />I dati raccolti dal sito durante il suo funzionamento sono
            utilizzati esclusivamente per le finalità sopra indicate e
            conservati per il tempo strettamente necessario a svolgere le
            attività precisate. In ogni caso i dati rilevati dal sito non
            saranno forniti mai a terzi, per nessuna ragione, a meno che non si
            tratti di legittima richiesta da parte dell’autorità giudiziaria e
            nei soli casi previsti dalla legge.
          </p>
          <p>
            <strong>Luogo del trattamento</strong>
            <br />I dati raccolti dal sito sono trattati presso la sede del
            Titolare del Trattamento, e presso il datacenter del web Hosting. Il
            web hosting (Ergonet spa.), che è responsabile del trattamento dei
            dati, elaborando i dati per conto del titolare, si trova nello
            Spazio Economico Europeo e agisce in conformità delle norme europee.
          </p>
          <p>
            <strong>Cookie</strong>
            <br />
            Come è d'uso su tutti i siti web, anche questo sito fa uso di
            cookies, piccoli file di testo che consentono di conservare
            informazioni sulle preferenze dei visitatori, per migliorare le
            funzionalità del sito, per semplificarne la navigazione
            automatizzando le procedure (es. Login, lingua sito) e per l'analisi
            dell'uso del sito.
          </p>
          <p>
            &nbsp;
            <br />
            Questo sito utilizza i cookies relativi ai collegamente con i social
            facebook, twitter, linkedin e instagram.
            <br />
            Utilizza cookies da google analytics.
            <br />
            <br />I cookie di sessione sono essenziali per poter distinguere tra
            gli utenti collegati, e sono utili per evitare che una funzionalità
            richiesta possa essere fornita all'utente sbagliato, nonché per fini
            di sicurezza per impedire attacchi informatici al sito. I cookie di
            sessione non contengono dati personali e durano per la sola sessione
            in corso, cioè fino alla chiusura del browser. Per essi non occorre
            consenso.
            <br />I functionality cookie utilizzati dal sito sono strettamente
            necessari per l'uso del sito, in particolare sono collegati ad una
            espressa richiesta di funzionalità da parte dell'utente (come il
            Login), per i quali non occorre alcun consenso.
          </p>
          <p>
            <br />
            Utilizzando il sito il visitatore acconsente espressamente all'uso
            dei cookies.
          </p>
          <p>
            Disabilitazione cookie
            <br />
            Scelte e obblighi - I cookies sono collegati al browser utilizzato e
            POSSONO ESSERE DISABILITATI DIRETTAMENTE DAL BROWSER, così
            rifiutando/revocando il consenso all'uso dei cookies. Occorre tenere
            presente che la disabilitazione dei cookies potrebbe impedire il
            corretto utilizzo di alcune funzioni del sito stesso.
            <br />
            Le istruzioni per la disabilitazione dei cookies si trovano alle
            seguenti pagine web:
          </p>
          <p>
            Mozilla Firefox - Microsoft Internet Explorer - Microsoft Edge -
            Google Chrome - Opera - Apple Safari
          </p>
          <p>
            <strong>Cookies di terze parti</strong>
          </p>
          <p>
            <br />
            Il presente sito funge anche da intermediario per cookies di terze
            parti, utilizzati per poter fornire ulteriori servizi e funzionalità
            ai visitatori e per migliorare l'uso del sito stesso, come i
            pulsanti per i social, oppure video. Questo sito non ha alcun
            controllo sui cookie delle terze parti, interamente gestiti dalle
            terze parti. In conseguenza di ciò le informazioni sull'uso dei
            detti cookies e sulle finalità degli stessi, nonché sulle modalità
            per l'eventuale disabilitazione, sono fornite direttamente dalle
            terze parti alle pagine indicate di seguito.
          </p>
          <p>
            <br />
            In particolare il presente sito utilizza cookies delle seguenti
            terze parti:
          </p>
          <p>
            - Google Analytics: uno strumento di analisi di Google che
            attraverso l'uso di cookies (performance cookies), raccoglie dati di
            navigazione anonimi (IP troncati all'ultimo ottetto) ed
            esclusivamente aggregati allo scopo di esaminare l'uso del sito da
            parte degli utenti, compilare report sulle attività nel sito e
            fornire altre informazioni, compreso il numero dei visitatori e le
            pagine visitate. Google può anche trasferire queste informazioni a
            terzi ove ciò sia imposto dalla legge o laddove tali terzi trattino
            le suddette informazioni per conto di Google. Google non assocerà
            l'indirizzo Ip a nessun altro dato posseduto da Google. I dati
            trasmessi a Google sono depositati presso i server di Google negli
            Stati Uniti.
            <br />
            In base a specifico accordo con Google, che è designato quale
            responsabile del trattamento dei dati, questi si impegna a trattare
            i dati in base alle richieste del Titolare (vedi in fondo
            all'informativa), impartite tramite le impostazioni del software. In
            base a tali impostazioni le opzioni pubblicitarie e di condivisione
            dei dati sono disattivate.
          </p>
          <p>
            <br />
            Ulteriori informazioni sui cookies di Google Analytics si trovano
            alla pagina Google Analytics Cookie Usage on Websites.
          </p>
          <p>
            scelte e obblighi L'utente può disabilitare in modo selettivo la
            raccolta di dati da parte di Google Analytics installando sul
            proprio browser l'apposito componente fornito da Google (opt out).
          </p>
          <p>
            Per ulteriori informazioni sull'uso dei dati e sul loro trattamento
            da parte di Google si raccomanda di prendere visione delle
            informazioni all'apposita pagina predisposta da Google, e alla
            pagina sulle Modalità di utilizzo dei dati da parte di Google quando
            si utilizzano siti o app dei partner.
          </p>
          <p>
            <strong>Plugin Social Network</strong>
            <br />
            Il presente sito incorpora anche plugin e/o bottoni per i social
            network, al fine di consentire una facile condivisione dei contenuti
            sui vostri social network preferiti. Tali plugin sono programmati in
            modo da non impostare alcun cookie all'accesso della pagina, per
            salvaguardare la privacy degli utenti. Eventualmente i cookie
            vengono impostati, se così previsto dai social network, solo quando
            l'utente fa effettivo e volontario uso del plugin. Si tenga presente
            che se l'utente naviga essendo loggato nel social network allora ha
            già acconsentito all'uso dei cookie veicolati tramite questo sito al
            momento dell'iscrizione al social network.
            <br />
            La raccolta e l'uso delle informazioni ottenute a mezzo del plugin
            sono regolati dalle rispettive informative privacy dei social
            network, alle quali si prega di fare riferimento.
          </p>
          <p>
            &nbsp;
            <br />- Facebook e Instagram-
            <a
              title="link informativa facebook"
              href="https://www.facebook.com/policies/cookies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;(link informativa cookie)
            </a>
            <br />- Twitter -&nbsp;
            <a
              title="informativa twitter"
              href="https://help.twitter.com/it/rules-and-policies/update-privacy-policy?lang=browser"
              target="_blank"
              rel="noopener noreferrer"
            >
              (link informativa cookie)
            </a>
            <br />
            <a
              title="informativa google"
              href="https://www.google.com/analytics/learn/privacy.html?hl=it"
              target="_blank"
              rel="noopener noreferrer"
            >
              - Google+ - (link informativa cookie).
            </a>
          </p>
          <p>
            <br />
            Trasferimento di dati in paesi extra UE
            <br />
            informazioni importanti Il presente sito potrebbe condividere alcuni
            dei dati raccolti con servizi localizzati al di fuori dell'area
            dell'Unione Europea. In particolare con Google, Facebook e Microsoft
            (LinkedIn) tramite i social plugin e il servizio di Google
            Analytics. Il trasferimento è autorizzato in base a specifiche
            decisioni dell'Unione Europea e del Garante per la tutela dei dati
            personali, in particolare la decisione 1250/2016 (Privacy Shield -
            qui la pagina informativa del Garante italiano), per cui non occorre
            ulteriore consenso. Le aziende sopra menzionate garantiscono la
            propria adesione al Privacy Shield.
          </p>
          <p>
            Misure di sicurezza
            <br />
            Il presente sito tratta i dati degli utenti in maniera lecita e
            corretta, adottando le opportune misure di sicurezza volte ad
            impedire accessi non autorizzati, divulgazione, modifica o
            distruzione non autorizzata dei dati. Il trattamento viene
            effettuato mediante strumenti informatici e/o telematici, con
            modalità organizzative e con logiche strettamente correlate alle
            finalità indicate. Oltre al titolare, in alcuni casi, potrebbero
            avere accesso ai dati categorie di incaricati coinvolti
            nell’organizzazione del sito (personale amministrativo, commerciale,
            marketing, legali, amministratori di sistema) ovvero soggetti
            esterni (come fornitori di servizi tecnici terzi, corrieri postali,
            hosting provider, società informatiche, agenzie di comunicazione).
          </p>
          <p>
            Diritti dell'utente
            <br />
            Ai sensi del Regolamento europeo 679/2016 (GDPR) e della normativa
            nazionale, l'Utente può, secondo le modalità e nei limiti previsti
            dalla vigente normativa, esercitare i&nbsp;seguenti diritti:
          </p>
          <p>
            - richiedere la conferma dell'esistenza di dati personali che lo
            riguardano (diritto di accesso);
            <br />- conoscerne l'origine;
            <br />- riceverne comunicazione intelligibile;
            <br />- avere informazioni circa la logica, le modalità e le
            finalità del trattamento;
            <br />- richiederne l'aggiornamento, la rettifica, l'integrazione,
            la cancellazione, la trasformazione in forma anonima, il blocco dei
            dati trattati in violazione di legge, ivi compresi quelli non più
            necessari al perseguimento degli scopi per i quali sono stati
            raccolti;
            <br />- nei casi di trattamento basato su consenso, ricevere al solo
            costo dell’eventuale supporto, i suoi dati forniti al titolare, in
            forma strutturata e leggibile da un elaboratore di dati e in un
            formato comunemente usato da un dispositivo elettronico;
            <br />- il diritto di presentare un reclamo all’Autorità di
            controllo (Garante Privacy – link alla pagina del Garante);
            <br />- nonché, più in generale, esercitare tutti i diritti che gli
            sono riconosciuti dalle vigenti disposizioni di legge.
          </p>
          <p>
            <br />
            Le richieste vanno rivolte al Titolare del trattamento.
          </p>
          <p>
            Nel caso in cui i dati siano trattati in base ai legittimi interessi
            sono comunque garantiti i diritti degli interessati al trattamento
            (tranne il diritto alla portabilità che non è previsto dalle norme),
            in particolare il diritto di opposizione al trattamento che può
            essere esercitato inviando una richiesta al titolare del
            trattamento.
          </p>
          <p>
            Titolare del trattamento
            <br />
            Titolare del trattamento ai sensi delle leggi vigenti è
            l’amministratore del sito, Giacomo Battaglia, contattabile tramite
            il tasto &nbsp;"Contattami".
          </p>
          <p>
            Responsabile del Trattamento
            <br />
            Il web hosting (Ergonet spa), è nominato responsabile del
            trattamento, elaborando i dati per conto del titolare. Aruba si
            trova nello Spazio Economico Europeo e agisce in conformità delle
            norme europee (policy privacy di Ergonet).
            <br />
            Google è nominato responsabile del trattamento, elaborando dati per
            conto del titolare (Google Analytics).
          </p>
          <p>Aggiornamenti</p>
          <p>
            La presente privacy policy è aggiornata alla data del&nbsp;30 aprile
            2020 -&nbsp; Ti forniamo un attrezzo utile per gestire i cookies&gt;
            http://www.youronlinechoices.com/it/le-tue-scelte
          </p>{" "}
        </div>
      </div>
    </Div>
  );
};

export default Privacy;
