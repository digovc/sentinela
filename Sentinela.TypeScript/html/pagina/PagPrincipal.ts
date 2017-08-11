/// <reference path="../../../Web.TypeScript/html/pagina/PagMobile.ts"/>
/// <reference path="../../../Web.TypeScript/Utils.ts"/>

module Sentinela
{
    // #region Importações

    import PagMobile = Web.PagMobile;
    import Utils = Web.Utils;

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

        public abrirActServidorCadastro(): void
        {
            this.actHome.esconder();

            var actServidorCadastro = new ActServidorCadastro();

            this.tagBody.addHtml(actServidorCadastro.strLayoutFixo);

            actServidorCadastro.iniciar();
        }

        public fecharSplash(): void
        {
            this.actHome.booVisivel = true;

            this.actSplashScreen.esconder(undefined, (() => this.actSplashScreen.dispose()));
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.inicializarApp();

            this.actHome.iniciar();

            this.actSplashScreen.iniciar();
        }

        private inicializarApp(): void
        {
            AppSentinela.i.pag = this;

            AppSentinela.i.iniciar();
        }

        public salvar(objServidor: ServidorDominio): void
        {
            AppSentinela.i.salvar(objServidor);

            this.actHome.mostrar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}