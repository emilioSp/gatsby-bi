import * as React from "react"
import sprite from 'bootstrap-italia/dist/svg/sprite.svg';

export const Footer = () => {
  return (
    <footer className="it-footer">
      <div className="it-footer-main">
        <div className="container">
          <div className="row clearfix">
            <div className="col-sm-12">
              <div className="it-brand-wrapper"><a href="/"
                                                   className="flex-wrap flex-md-nowrap justify-content-center justify-content-md-start"><img
                src="https://innovazione.gov.it/images/logo-repubblica-italiana-56a773ac.svg" alt="Logo Repubblica Italiana" className="icon" /><img
                src="https://innovazione.gov.it/images/logo-mid-white-6d6c98f9.svg" alt="Logo Ministro Innovazione" style={{width: '120px'}}
                className="icon" />
                <div className="it-brand-text pr-0 pr-md-2">
                  <div className="h5 mt-4 mt-md-0 text-center text-md-left" style={{maxWidth: '400px'}}>
                    <span>Ministro</span> per l'innovazione tecnologica e la digitalizzazione
                  </div>
                </div></a></div>
            </div>
          </div>
        </div>
        <div className="py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xl-3 mb-3">
                <div className="h6 text-uppercase font-weight-bold text-center text-md-left mb-3">Contatti</div>
                <div className="mb-2">
                  <div className="text-center text-md-left">
                    <svg aria-label="Sede istituzionale" className="mb-3 align-top icon icon-sm icon-white"
                         focusable="false" role="img">
                      <use href={`${sprite}#it-pa`}></use>
                    </svg>
                    <div className="link-list-wrapper">
                      <ul className="link-list">
                        <li><a href="https://goo.gl/maps/V7vcjUCHqafhGChj8" className="list-item font-weight-semibold"
                               target="_blank" rel="noopener">Largo Pietro di Brazzà, 86 — 00187 Roma</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="text-center text-md-left">
                    <svg aria-label="Contatti email" className="mb-3 align-top icon icon-sm icon-white"
                         focusable="false" role="img">
                      <use href={`${sprite}#it-mail`}></use>
                    </svg>
                    <div className="link-list-wrapper">
                      <ul className="link-list">
                        <li>Segreteria del Ministro</li>
                        <li><a href="mailto:segreteriaministropisano@governo.it" className="list-item mid-footer-link"
                               target="_blank" rel="noopener">segreteriaministropisano@governo.it</a></li>
                      </ul>
                      <ul className="link-list">
                        <li>Media e comunicazione</li>
                        <li><a href="mailto:comunicazione@innovazione.gov.it" className="list-item mid-footer-link"
                               target="_blank" rel="noopener">comunicazione@innovazione.gov.it</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 mb-5">
                <div className="h6 text-uppercase font-weight-bold text-center text-md-left mb-3">Seguici su</div>
                <div className="d-flex justify-content-center ml-3 d-md-block ml-md-0">
                  <div className="d-flex align-items-center"><a href="https://twitter.com/InnovazioneGov"
                                                                className="d-block mr-3" target="_blank" rel="noopener"
                                                                aria-label="Twitter">
                    <svg aria-label="Vai a Twitter" className="icon icon-sm icon-white" focusable="false" role="img">
                      <use href={`${sprite}#it-twitter`}></use>
                    </svg>
                  </a><a href="https://www.linkedin.com/company/ministeroinnovazione/about/?viewAsMember=true"
                         className="d-block mr-3" target="_blank" rel="noopener" aria-label="Linkedin">
                    <svg aria-label="Vai a Linkedin" className="icon icon-sm icon-white" focusable="false" role="img">
                      <use href={`${sprite}#it-linkedin`}></use>
                    </svg>
                  </a><a href="https://www.facebook.com/DipartimentoTrasformazioneDigitale/" className="d-block mr-3"
                         target="_blank" rel="noopener" aria-label="facebook">
                    <svg aria-label="Vai a facebook" className="icon icon-sm icon-white" focusable="false" role="img">
                      <use href={`${sprite}#it-facebook`}></use>
                    </svg>
                  </a><a href="https://medium.com/blog-per-la-trasformazione-digitale" className="d-block mr-3"
                         target="_blank" rel="noopener" aria-label="Medium">
                    <svg aria-label="Vai a Medium" className="icon icon-sm icon-white" focusable="false" role="img">
                      <use href={`${sprite}#it-medium`}></use>
                    </svg>
                  </a></div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 mb-3">
                <div className="h6 text-uppercase font-weight-bold text-center text-md-left mb-3">Altri siti web</div>
                <div className="text-center text-md-left">
                  <div className="link-list-wrapper">
                    <ul className="link-list">
                      <li><a href="http://www.governo.it/" className="list-item mid-footer-link" target="_blank"
                             rel="noopener"
                             aria-label="Sito del Governo italiano: (Link esterno) Vai al sito del Governo">Sito del
                        Governo italiano</a></li>
                      <li><a href="https://www.agid.gov.it/" className="list-item mid-footer-link" target="_blank"
                             rel="noopener"
                             aria-label="AgID - Agenzia per l'Italia Digitale: (Link esterno) Val al sito AgID">AgID -
                        Agenzia per l'Italia Digitale</a></li>
                      <li><a href="https://www.pagopa.gov.it/" className="list-item mid-footer-link" target="_blank"
                             rel="noopener" aria-label="PagoPA S.p.A.: (Link esterno) Vai al sito">PagoPA S.p.A.</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 mb-3">
                <div className="h6 text-uppercase font-weight-bold text-center text-md-left mb-3">Trasparenza</div>
                <div className="text-center text-md-left">
                  <div className="link-list-wrapper">
                    <ul className="link-list">
                      <li><a href="/amministrazione-trasparente" className="list-item mid-footer-link">Amministrazione
                        Trasparente</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
