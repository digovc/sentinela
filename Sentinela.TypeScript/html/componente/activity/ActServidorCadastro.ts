/// <reference path="../../../../Web.TypeScript/erro/Erro.ts"/>
/// <reference path="../../../../Web.TypeScript/html/componente/botao/actionbar/BotaoActionBar.ts"/>
/// <reference path="../../../../Web.TypeScript/html/componente/Notificacao.ts"/>
/// <reference path="../../../../Web.TypeScript/Objeto.ts"/>
/// <reference path="../../../../Web.TypeScript/OnClickListener.ts"/>
/// <reference path="../../../../Web.TypeScript/Utils.ts"/>

module Sentinela
{
    // #region Importações

    import BotaoActionBar = Web.BotaoActionBar;
    import Erro = Web.Erro;
    import Notificacao = Web.Notificacao;
    import Objeto = Web.Objeto;
    import OnClickListener = Web.OnClickListener;
    import Utils = Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ActServidorCadastro extends ActSentinelaBase implements OnClickListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _btnSalvar: BotaoActionBar;
        private _cmpStrGrupo: CampoSentinela;
        private _cmpStrNome: CampoSentinela;
        private _cmpUrl: CampoSentinela;

        private get btnSalvar(): BotaoActionBar
        {
            if (this._btnSalvar != null)
            {
                return this._btnSalvar;
            }

            this._btnSalvar = new BotaoActionBar(this.strId + "_btnSalvar");

            return this._btnSalvar;
        }

        private get cmpStrGrupo(): CampoSentinela
        {
            if (this._cmpStrGrupo != null)
            {
                return this._cmpStrGrupo;
            }

            this._cmpStrGrupo = new CampoSentinela(this.strId + "_cmpStrGrupo");

            return this._cmpStrGrupo;
        }

        private get cmpStrNome(): CampoSentinela
        {
            if (this._cmpStrNome != null)
            {
                return this._cmpStrNome;
            }

            this._cmpStrNome = new CampoSentinela(this.strId + "_cmpStrNome");

            return this._cmpStrNome;
        }

        private get cmpUrl(): CampoSentinela
        {
            if (this._cmpUrl != null)
            {
                return this._cmpUrl;
            }

            this._cmpUrl = new CampoSentinela(this.strId + "_cmpUrl");

            return this._cmpUrl;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(null);

            this.strId = (ActServidorCadastro.name + "_" + this.intObjetoId);
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            this.cmpStrGrupo.iniciar();
            this.cmpStrNome.iniciar();
            this.cmpUrl.iniciar();

            this.mostrar();
        }

        protected montarLayoutFixo(strLayoutFixo: string): string
        {
            strLayoutFixo = super.montarLayoutFixo(strLayoutFixo);

            strLayoutFixo = strLayoutFixo.replace("_div_id", this.strId);

            strLayoutFixo = strLayoutFixo.replace("_btn_salvar_id", this.btnSalvar.strId);

            strLayoutFixo = Utils.replaceAll(strLayoutFixo, "_cmp_grupo_id", this.cmpStrGrupo.strId);

            strLayoutFixo = Utils.replaceAll(strLayoutFixo, "_cmp_nome_id", this.cmpStrNome.strId);

            strLayoutFixo = Utils.replaceAll(strLayoutFixo, "_cmp_url_id", this.cmpUrl.strId);

            return strLayoutFixo;
        }

        private salvar(): void
        {
            this.validar();

            var objServidor = new ServidorDominio();

            objServidor.strGrupo = this.cmpStrGrupo.txt.strValor;
            objServidor.strNome = this.cmpStrNome.txt.strValor;
            objServidor.url = this.cmpUrl.txt.strValor;

            PagPrincipal.i.salvar(objServidor);

            Notificacao.notificar("Servidor salvo com sucesso.");

            this.esconder(undefined, (() => this.dispose()));
        }

        protected setEventos(): void
        {
            super.setEventos();

            this.btnSalvar.addEvtOnClickListener(this);
        }

        private validar(): void
        {
            if (Utils.getBooStrVazia(this.cmpStrNome.txt.strValor))
            {
                throw new Error('O campo "Nome" deve ser informado.');
            }

            if (Utils.getBooStrVazia(this.cmpUrl.txt.strValor))
            {
                throw new Error('O campo "Endereço" deve ser informado.');
            }
        }

        // #endregion Métodos

        // #region Eventos

        public onClick(objSender: Objeto, arg: JQueryEventObject): void
        {
            try
            {
                switch (objSender)
                {
                    case this.btnSalvar:
                        this.salvar()
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