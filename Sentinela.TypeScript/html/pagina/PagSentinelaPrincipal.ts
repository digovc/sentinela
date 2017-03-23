/// <reference path="../../../Web.TypeScript/html/pagina/PagMobile.ts"/>

module Sentinela
{
    // #region Importações

    import PagMobile = Web.PagMobile;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class PagSentinelaPrincipal extends PagMobile
    {
        // #region Constantes

        // #endregion Constantes

        // #region Atributos

        private static _i: PagSentinelaPrincipal;

        public static get i(): PagSentinelaPrincipal
        {
            if (PagSentinelaPrincipal._i != null)
            {
                return PagSentinelaPrincipal._i;
            }

            PagSentinelaPrincipal._i = new PagSentinelaPrincipal();

            return PagSentinelaPrincipal._i;
        }

        private _actHome: ActHome;

        private get actHome(): ActHome
        {
            if (this._actHome != null)
            {
                return this._actHome;
            }

            this._actHome = new ActHome();

            return this._actHome;
        }

        private _actLogin: ActLogin;

        private get actLogin(): ActLogin
        {
            if (this._actLogin != null)
            {
                return this._actLogin;
            }

            this._actLogin = new ActLogin();

            return this._actLogin;
        }

        private _actServidorCadastro: ActServidorCadastro;

        private get actServidorCadastro(): ActServidorCadastro
        {
            if (this._actServidorCadastro != null)
            {
                return this._actServidorCadastro;
            }

            this._actServidorCadastro = new ActServidorCadastro();

            return this._actServidorCadastro;
        }
        private _actServidorDetalhe: ActServidorDetalhe;

        private get actServidorDetalhe(): ActServidorDetalhe
        {
            if (this._actServidorDetalhe != null)
            {
                return this._actServidorDetalhe;
            }

            this._actServidorDetalhe = new ActServidorDetalhe();

            return this._actServidorDetalhe;
        }
        private _actSplashScreen: ActSplashScreen;

        private get actSplashScreen(): ActSplashScreen
        {
            if (this._actSplashScreen != null)
            {
                return this._actSplashScreen;
            }

            this._actSplashScreen = new ActSplashScreen();

            return this._actSplashScreen;
        }
        private _actVazio: ActVazio;

        private get actVazio(): ActVazio
        {
            if (this._actVazio != null)
            {
                return this._actVazio;
            }

            this._actVazio = new ActVazio();

            return this._actVazio;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            AppSentinela.i.pag = this;
        }

        protected montarLayout(): void
        {
            super.montarLayout();

            this.act
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }

    // #region Inicialização

    $(document).ready(() => { PagSentinelaPrincipal.i.iniciar(); });

    // #endregion Inicialização
}