/// <reference path="../../../Web.TypeScript/html/pagina/PagMobile.ts"/>

module Sentinela
{
    // #region Importações

    import PagMobile = Web.PagMobile;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class PagPrincipal extends PagMobile
    {
        // #region Constantes

        // #endregion Constantes

        // #region Atributos

        private static _i: PagPrincipal;

        public static get i(): PagPrincipal
        {
            if (PagPrincipal._i != null)
            {
                return PagPrincipal._i;
            }

            PagPrincipal._i = new PagPrincipal();

            return PagPrincipal._i;
        }

        private _actHome: ActHome;
        private _actServidorCadastro: ActServidorCadastro;
        private _actServidorDetalhe: ActServidorDetalhe;
        private _actSplashScreen: ActSplashScreen;

        private get actHome(): ActHome
        {
            if (this._actHome != null)
            {
                return this._actHome;
            }

            this._actHome = new ActHome();

            return this._actHome;
        }

        private get actServidorCadastro(): ActServidorCadastro
        {
            if (this._actServidorCadastro != null)
            {
                return this._actServidorCadastro;
            }

            this._actServidorCadastro = new ActServidorCadastro();

            return this._actServidorCadastro;
        }

        private get actServidorDetalhe(): ActServidorDetalhe
        {
            if (this._actServidorDetalhe != null)
            {
                return this._actServidorDetalhe;
            }

            this._actServidorDetalhe = new ActServidorDetalhe();

            return this._actServidorDetalhe;
        }

        private get actSplashScreen(): ActSplashScreen
        {
            if (this._actSplashScreen != null)
            {
                return this._actSplashScreen;
            }

            this._actSplashScreen = new ActSplashScreen();

            return this._actSplashScreen;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public adicionar(): void
        {
            this.actHome.esconder();

            this.actServidorCadastro.mostrar();
        }

        public fecharSplash(): void
        {
            this.actSplashScreen.esconder(undefined, (() => this.actSplashScreen.dispose()));
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.inicializarApp();

            this.actHome.iniciar();
            this.actServidorCadastro.iniciar();
            this.actServidorDetalhe.iniciar();
            this.actSplashScreen.iniciar();
        }

        private inicializarApp(): void
        {
            AppSentinela.i.pag = this;

            AppSentinela.i.iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}