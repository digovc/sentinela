using NetZ.Web.Html.Componente.Botao;
using NetZ.Web.Server.Arquivo.Css;

namespace Sentinela.Html.Componente.Activity
{
    internal class ActHome : ActSentinelaBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private BotaoCircular _btnAdicionar;

        private BotaoCircular btnAdicionar
        {
            get
            {
                if (_btnAdicionar != null)
                {
                    return _btnAdicionar;
                }

                _btnAdicionar = new BotaoCircular();

                return _btnAdicionar;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void inicializar()
        {
            base.inicializar();

            this.btnAdicionar.enmTamanho = BotaoCircular.EnmTamanho.GRANDE;
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.btnAdicionar.setPai(this);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.addCss(css.setDisplay("none"));

            this.btnAdicionar.addCss(css.setBottom(25));
            this.btnAdicionar.addCss(css.setPosition("absolute"));
            this.btnAdicionar.addCss(css.setRight(25));
        }

        protected override void setStrId(string strId)
        {
            base.setStrId(strId);

            this.btnAdicionar.strId = (strId + "_btnAdicionar");
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}