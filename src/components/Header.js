import * as React from "react"
import { Link } from "gatsby"
import sprite from 'bootstrap-italia/dist/svg/sprite.svg';

export const Header = () => {
  return (

    <header className="it-header-wrapper" data-datocms-noindex="" lang="it">
      <div className="it-header-slim-wrapper px-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="it-header-slim-wrapper-content px-2"><a href="//www.governo.it/" target="_blank"
                                                                      rel="noopener" rel="noreferrer"
                                                                      className="navbar-brand font-weight-semibold">Governo
                Italiano</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="it-nav-wrapper">
        <div className="it-header-center-wrapper">
          <div className="container">
            <div className="row">
              <div className="it-header-center-content-wrapper px-2 px-sm-0">
                <div className="it-brand-wrapper pr-0 pr-md-5"><a href="/"><img
                  src="https://innovazione.gov.it/images/logo-repubblica-italiana-56a773ac.svg" alt="Logo Repubblica Italiana"
                  style={{maxHeight: '72px'}} className="icon" /><img src="https://innovazione.gov.it/images/logo-mid-white-6d6c98f9.svg"
                                                                  alt="Logo Ministro Innovazione"
                                                                  style={{width: '120px', maxHeight: '72px'}}
                                                                  className="icon" />
                                                                  PAGINA DI ESEMPIO
                  </a></div>
                <div className="it-right-zone">
                  <div className="it-socials d-none d-md-flex text-nowrap"><span>Seguici su</span>
                    <div className="ml-3">
                      <div className="d-flex align-items-center"><a href="https://twitter.com/InnovazioneGov"
                                                                    className="d-block mr-3" target="_blank"
                                                                    rel="noopener" rel="noreferrer" aria-label="Twitter">
                        <svg aria-label="Vai a Twitter" className="icon icon-sm icon-white" focusable="false"
                             role="img">
                          <use href={`${sprite}#it-twitter`}></use>
                        </svg>
                      </a><a href="https://www.linkedin.com/company/ministeroinnovazione/about/?viewAsMember=true"
                             className="d-block mr-3" target="_blank" rel="noopener" rel="noreferrer" aria-label="Linkedin">
                        <svg aria-label="Vai a Linkedin" className="icon icon-sm icon-white" focusable="false"
                             role="img">
                          <use href={`${sprite}#it-linkedin`}></use>
                        </svg>
                      </a><a href="https://www.facebook.com/DipartimentoTrasformazioneDigitale/"
                             className="d-block mr-3" target="_blank" rel="noopener" rel="noreferrer" aria-label="facebook">
                        <svg aria-label="Vai a facebook" className="icon icon-sm icon-white" focusable="false"
                             role="img">
                          <use href={`${sprite}#it-facebook`}></use>
                        </svg>
                      </a><a href="https://medium.com/blog-per-la-trasformazione-digitale" className="d-block mr-3"
                             target="_blank" rel="noopener" rel="noreferrer" aria-label="Medium">
                        <svg aria-label="Vai a Medium" className="icon icon-sm icon-white" focusable="false" role="img">
                          <use href={`${sprite}#it-medium`}></use>
                        </svg>
                      </a></div>
                    </div>
                  </div>
                  <div className="it-search-wrapper"><span
                    className="d-none d-md-block font-weight-semibold">Cerca</span><a href="/cerca"
                                                                                      className="search-link rounded-icon"
                                                                                      aria-label="Cerca">
                    <svg aria-label="Vai alla pagina di ricerca" className="icon" focusable="false" role="img">
                      <use href={`${sprite}#it-search`}></use>
                    </svg>
                  </a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="it-header-navbar-wrapper">
          <div className="container">
            <div className="row">
              <nav aria-label="Menu principale" className="navbar navbar-expand-lg has-megamenu theme-dark-mobile">
                <button aria-controls="nav02" aria-expanded="true" aria-label="Mostra/Nascondi la navigazione"
                        className="custom-navbar-toggler" data-target="#nav02" type="button">
                  <svg className="icon">
                    <use xlinkHref="/images/sprite-641d5a28.svg#it-burger"></use>
                  </svg>
                </button>
                <div className="navbar-collapsable" id="nav02" style={{display: 'none', zIndex: 2000}}>
                  <div className="overlay" style={{display: 'none'}}></div>
                  <div className="close-div sr-only">
                    <button className="btn close-menu" type="button"><span className="it-close">Chiudi</span></button>
                  </div>
                  <div className="menu-wrapper">
                    <div className="pl-4 pt-4 d-lg-none"><a href="/" className="d-inline-flex"><img
                      src="https://innovazione.gov.it/images/logo-repubblica-italiana-56a773ac.svg" alt="Logo Repubblica Italiana"
                      style={{maxHeight: '32px'}} className="mr-2"/><img src="https://innovazione.gov.it/images/logo-mid-white-6d6c98f9.svg"
                                                                      alt="Logo Ministro Innovazione"
                                                                      style={{width: '120px', maxHeight: '32px'}}
                                                                      className=""/></a></div>
                    <ul className="navbar-nav">
                      <li className="nav-item"><Link to="/dashboard/" className="nav-link font-weight-semibold">Dashboard</Link> </li>
                      <li className="nav-item">
                        <Link to="/dipartimento/" className="nav-link font-weight-semibold">Dipartimento</Link>
                      </li>
                      <li className="nav-item"><a href="/progetti/"
                                                  className="nav-link font-weight-semibold">Progetti</a></li>
                      <li className="nav-item"><a href="/notizie/" className="nav-link font-weight-semibold">Notizie</a>
                      </li>
                    </ul>
                    <div className="it-socials d-flex text-nowrap ml-4 pt-4 d-lg-none"><span className="text-white">Seguici su</span>
                      <div className="ml-3">
                        <div className="d-flex align-items-center"><a href="https://twitter.com/InnovazioneGov"
                                                                      className="d-block mr-3" target="_blank"
                                                                      rel="noopener" rel="noreferrer" aria-label="Twitter">
                          <svg aria-label="Vai a Twitter" className="icon icon-sm icon-white" focusable="false"
                               role="img">
                            <use xlinkHref="/images/sprite-641d5a28.svg#it-twitter"></use>
                          </svg>
                        </a><a href="https://www.linkedin.com/company/ministeroinnovazione/about/?viewAsMember=true"
                               className="d-block mr-3" target="_blank" rel="noreferrer" rel="noopener" aria-label="Linkedin">
                          <svg aria-label="Vai a Linkedin" className="icon icon-sm icon-white" focusable="false"
                               role="img">
                            <use xlinkHref="/images/sprite-641d5a28.svg#it-linkedin"></use>
                          </svg>
                        </a><a href="https://www.facebook.com/DipartimentoTrasformazioneDigitale/"
                               className="d-block mr-3" target="_blank" rel="noreferrer" rel="noopener" aria-label="facebook">
                          <svg aria-label="Vai a facebook" className="icon icon-sm icon-white" focusable="false"
                               role="img">
                            <use xlinkHref="/images/sprite-641d5a28.svg#it-facebook"></use>
                          </svg>
                        </a><a href="https://medium.com/blog-per-la-trasformazione-digitale" className="d-block mr-3"
                               target="_blank" rel="noreferrer" rel="noopener" aria-label="Medium">
                          <svg aria-label="Vai a Medium" className="icon icon-sm icon-white" focusable="false"
                               role="img">
                            <use xlinkHref="/images/sprite-641d5a28.svg#it-medium"></use>
                          </svg>
                        </a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
