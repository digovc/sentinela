using NetZ.Web;
using NetZ.Web.Html.Componente.Botao.ActionBar;
using NetZ.Web.Server.Arquivo.Css;
using Sentinela.Html.Componente.Campo;

namespace Sentinela.Html.Componente.Activity
{
    internal class ActServidorCadastro : ActSentinelaBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private BotaoActionBar _btnSalvar;
        private CampoSentinela _cmpStrGrupo;
        private CampoSentinela _cmpStrNome;
        private CampoSentinela _cmpUrl;

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

        private CampoSentinela cmpUrl
        {
            get
            {
                if (_cmpUrl != null)
                {
                    return _cmpUrl;
                }

                _cmpUrl = new CampoSentinela();

                return _cmpUrl;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void inicializar()
        {
            base.inicializar();

            this.strId = "_div_id";

            this.btnSalvar.strId = "_btn_salvar_id";

            this.cmpStrGrupo.strId = "_cmp_grupo_id";
            this.cmpStrGrupo.strTitle = "Grupo";

            this.cmpStrNome.strId = "_cmp_nome_id";
            this.cmpStrNome.strTitle = "Nome";

            this.cmpUrl.strId = "_cmp_url_id";
            this.cmpUrl.strTitle = "Endereço";

            this.acb.booMostrarMenu = false;
            this.acb.booMostrarVoltar = true;
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.btnSalvar.setPai(this.acb);

            this.cmpStrNome.setPai(this);
            this.cmpUrl.setPai(this);
            this.cmpStrGrupo.setPai(this);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.addCss(css.setDisplay("none"));

            this.btnSalvar.addCss(css.setBackgroundImage(AppWebBase.DIR_MEDIA_SVG + "save.svg"));
            this.btnSalvar.addCss(css.setFloat("right"));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}