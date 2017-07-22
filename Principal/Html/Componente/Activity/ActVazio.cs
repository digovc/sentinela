using NetZ.Web.Html;
using NetZ.Web.Html.Componente.Botao;
using NetZ.Web.Server.Arquivo.Css;

namespace Sentinela.Html.Componente.Activity
{
    internal class ActVazio : ActSentinelaBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private BotaoHtml _btnAddServidor;
        private Div _divBtnContainer;
        private Div _divInfo;

        private BotaoHtml btnAddServidor
        {
            get
            {
                if (_btnAddServidor != null)
                {
                    return _btnAddServidor;
                }

                _btnAddServidor = new BotaoHtml();

                return _btnAddServidor;
            }
        }

        private Div divBtnContainer
        {
            get
            {
                if (_divBtnContainer != null)
                {
                    return _divBtnContainer;
                }

                _divBtnContainer = new Div();

                return _divBtnContainer;
            }
        }

        private Div divInfo
        {
            get
            {
                if (_divInfo != null)
                {
                    return _divInfo;
                }

                _divInfo = new Div();

                return _divInfo;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override bool getBooMostrarLogo()
        {
            return true;
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.btnAddServidor.strConteudo = "Adicionar";

            this.divInfo.strConteudo = "Nenhum serviço adicionado";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divInfo.setPai(this);

            this.divBtnContainer.setPai(this);
            this.btnAddServidor.setPai(this.divBtnContainer);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.divBtnContainer.addCss(css.setTextAlign("center"));

            this.divInfo.addCss(css.setLineHeight(50));
            this.divInfo.addCss(css.setTextAlign("center"));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}