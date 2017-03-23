using System;
using NetZ.Web.Server.Arquivo.Css;
using Sentinela.Html.Componente.Campo;
using Sentinela.Html.Componente.Mobile;
using NetZ.Web.Html.Componente.Botao.ActionBar;
using NetZ.Web;

namespace Sentinela.Html.Activity
{
    internal class ActServidorCadastro : ActSentinelaBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private CampoSentinela _cmpStrGrupo;
        private CampoSentinela _cmpStrNome;
        private CampoSentinela _cmpUrlEndereco;

        private CampoSentinela cmpStrGrupo
        {
            get
            {
                if (_cmpStrGrupo != null)
                {
                    return _cmpStrGrupo;
                }

                _cmpStrGrupo = new CampoSentinela();

                return _cmpStrGrupo;
            }
        }

        private CampoSentinela cmpStrNome
        {
            get
            {
                if (_cmpStrNome != null)
                {
                    return _cmpStrNome;
                }

                _cmpStrNome = new CampoSentinela();

                return _cmpStrNome;
            }
        }

        private CampoSentinela cmpUrlEndereco
        {
            get
            {
                if (_cmpUrlEndereco != null)
                {
                    return _cmpUrlEndereco;
                }

                _cmpUrlEndereco = new CampoSentinela();

                return _cmpUrlEndereco;
            }
        }

        private BotaoActionBar _btnSalvar;

        private BotaoActionBar btnSalvar
        {
            get
            {
                if (_btnSalvar != null)
                {
                    return _btnSalvar;
                }

                _btnSalvar = new BotaoActionBar();

                return _btnSalvar;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override bool getBooJs()
        {
            return true;
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.cmpStrGrupo.strTitle = "Grupo";
            this.cmpStrNome.strTitle = "Nome";
            this.cmpUrlEndereco.strTitle = "Endereço";

            this.inicializarAcb();
        }

        private void inicializarAcb()
        {
            this.acb.booMostrarMenu = false;
            this.acb.booMostrarVoltar = true;
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.btnSalvar.setPai(this.acb);

            this.cmpStrNome.setPai(this);
            this.cmpUrlEndereco.setPai(this);
            this.cmpStrGrupo.setPai(this);
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.btnSalvar.addCss(css.setBackgroundImage(AppWebBase.DIR_MEDIA_SVG + "save.svg"));
            this.btnSalvar.addCss(css.setFloat("right"));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}