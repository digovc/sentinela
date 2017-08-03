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

        private static get STR_JSN_LISTA_APARELHO(): string { return "jsn-lista-aparelho" };

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
        private _arrObjServidor: Array<ServidorDominio>;

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

        private get arrObjServidor(): Array<ServidorDominio>
        {
            if (this._arrObjServidor != null)
            {
                return this._arrObjServidor;
            }

            this._arrObjServidor = this.getarrObjServidor();

            return this._arrObjServidor;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public adicionar(): void
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

        private getarrObjServidor(): Array<ServidorDominio>
        {
            var arrObjServidorResultado = new Array<ServidorDominio>();

            var jsnArrObjServidor = window.localStorage.getItem(PagPrincipal.STR_JSN_LISTA_APARELHO);

            if (Utils.getBooStrVazia(jsnArrObjServidor))
            {
                window.localStorage.setItem(PagPrincipal.STR_JSN_LISTA_APARELHO, JSON.stringify(arrObjServidorResultado));

                return arrObjServidorResultado;
            }

            jsnArrObjServidor = JSON.parse(jsnArrObjServidor);

            for (var i = 0; i < jsnArrObjServidor.length; i++)
            {
                var objServidor = new ServidorDominio();

                objServidor.copiarDados(jsnArrObjServidor[i]);

                arrObjServidorResultado.push(objServidor);
            }

            return arrObjServidorResultado;
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
            this.validar(objServidor);

            this.arrObjServidor.push(objServidor);

            window.localStorage.setItem(PagPrincipal.STR_JSN_LISTA_APARELHO, JSON.stringify(this.arrObjServidor));

            this.actHome.mostrar();
        }

        private validar(objServidor: ServidorDominio): void
        {
            if (objServidor == null)
            {
                throw new Error("O servidor não pode estar nulo.");
            }

            this.arrObjServidor.forEach(o => this.validarItem(o, objServidor));
        }

        private validarItem(objServidor: ServidorDominio, objServidorNovo: ServidorDominio): void
        {
            if (objServidor.strNome == objServidorNovo.strNome)
            {
                throw new Error("Já existe um servidor com este nome.");
            }

            if (objServidor.url == objServidorNovo.url)
            {
                throw new Error("Já existe um servidor com este endereço (URL).");
            }
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}