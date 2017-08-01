/// <reference path="../../../../Web.TypeScript/erro/Erro.ts"/>
/// <reference path="../../../../Web.TypeScript/html/componente/botao/BotaoCircular.ts"/>
/// <reference path="../../../../Web.TypeScript/Objeto.ts"/>
/// <reference path="../../../../Web.TypeScript/OnClickListener.ts"/>

module Sentinela
{
    // #region Importações

    import BotaoCircular = Web.BotaoCircular;
    import Erro = Web.Erro;
    import Objeto = Web.Objeto;
    import OnClickListener = Web.OnClickListener;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ActHome extends ActSentinelaBase implements OnClickListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _btnAdicionar: BotaoCircular;

        private get btnAdicionar(): BotaoCircular
        {
            if (this._btnAdicionar != null)
            {
                return this._btnAdicionar;
            }

            this._btnAdicionar = new BotaoCircular(this.strId + "_btnAdicionar");

            return this._btnAdicionar;
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
            PagPrincipal.i.adicionar();
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