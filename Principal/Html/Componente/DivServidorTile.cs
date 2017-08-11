using NetZ.Web.Html;
using NetZ.Web.Html.Componente;

namespace Sentinela.Html.Componente
{
    internal class DivServidorTile : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divStatus;
        private Div _divTitulo;

        private Div divStatus
        {
            get
            {
                if (_divStatus != null)
                {
                    return _divStatus;
                }

                _divStatus = new Div();

                return _divStatus;
            }
        }

        private Div divTitulo
        {
            get
            {
                if (_divTitulo != null)
                {
                    return _divTitulo;
                }

                _divTitulo = new Div();

                return _divTitulo;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}