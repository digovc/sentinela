using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace Sentinela.Html.Componente.Campo
{
    internal class CampoSentinela : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Input _txt;

        private Input txt
        {
            get
            {
                if (_txt != null)
                {
                    return _txt;
                }

                _txt = new Input();

                return _txt;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void montarLayout()
        {
            base.montarLayout();

            this.txt.setPai(this);
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.addCss(css.setHeight(50));
            this.addCss(css.setPaddingBottom(20));

            this.txt.addCss(css.setBackgroundColor("rgba(255,255,255,0.25)"));
            this.txt.addCss(css.setBorder(0));
            this.txt.addCss(css.setColor("white"));
            this.txt.addCss(css.setFontSize(20));
            this.txt.addCss(css.setHeight(100, "%"));
            this.txt.addCss(css.setWidth(100, "%"));
        }

        protected override void setStrTitle(string strTitle)
        {
            base.setStrTitle(strTitle);

            this.txt.strPlaceHolder = strTitle;
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}