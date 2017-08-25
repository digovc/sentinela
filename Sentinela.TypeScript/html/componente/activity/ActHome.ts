/// <reference path="../../../../Web.TypeScript/erro/Erro.ts"/>
/// <reference path="../../../../Web.TypeScript/html/componente/botao/BotaoCircular.ts"/>
/// <reference path="../../../../Web.TypeScript/html/Div.ts"/>
/// <reference path="../../../../Web.TypeScript/Objeto.ts"/>
/// <reference path="../../../../Web.TypeScript/OnClickListener.ts"/>
/// <reference path="../../../../Web.TypeScript/Utils.ts"/>

module Sentinela
{
    // #region Importações

    import BotaoCircular = Web.BotaoCircular;
    import Div = Web.Div;
    import Erro = Web.Erro;
    import Objeto = Web.Objeto;
    import OnClickListener = Web.OnClickListener;
    import Utils = Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ActHome extends ActSentinelaBase implements OnClickListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arrDivServidorGrupo: Array<DivServidorGrupo>;
        private _btnAdicionar: BotaoCircular;
        private _divLista: Div;

        private get arrDivServidorGrupo(): Array<DivServidorGrupo>
        {
            if (this._arrDivServidorGrupo != null)
            {
                return this._arrDivServidorGrupo;
            }

            this._arrDivServidorGrupo = new Array<DivServidorGrupo>();

            return this._arrDivServidorGrupo;
        }

        private get btnAdicionar(): BotaoCircular
        {
            if (this._btnAdicionar != null)
            {
                return this._btnAdicionar;
            }

            this._btnAdicionar = new BotaoCircular(this.strId + "_btnAdicionar");

            return this._btnAdicionar;
        }

        private get divLista(): Div
        {
            if (this._divLista != null)
            {
                return this._divLista;
            }

            this._divLista = new Div(this.strId + "_divLista");

            return this._divLista;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(ActHome.name);
        }

        // #endregion Construtores

        // #region Métodos

        private adicionar(): void
        {
            PagPrincipal.i.abrirActServidorCadastro();
        }

        private carregarLista(): void
        {
            if (AppSentinela.i.arrObjServidor.length < 1)
            {
                return;
            }

            this.divLista.strConteudo = null;

            AppSentinela.i.arrObjServidor.forEach((o) => this.carregarListaItem(o));
        }

        private carregarListaItem(objServidor: ServidorDominio): void
        {
            if (objServidor == null)
            {
                return;
            }

            if (Utils.getBooStrVazia(objServidor.strNome))
            {
                return;
            }

            var divServidorTile = new DivServidorTile(this, objServidor);

            this.divLista.addHtml(divServidorTile.strLayoutFixo);

            divServidorTile.iniciar();
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.carregarLista();
        }

        protected setEventos(): void
        {
            super.setEventos();

            this.btnAdicionar.addEvtOnClickListener(this);
        }

        // #endregion Métodos

        // #region Eventos

        public onClick(objSender: Objeto, arg: JQueryEventObject): void
        {
            try
            {
                switch (objSender)
                {
                    case this.btnAdicionar:
                        this.adicionar();
                        return;
                }
            }
            catch (ex)
            {
                new Erro("Algo deu errado.", ex);
            }
        }

        // #endregion Eventos
    }
}