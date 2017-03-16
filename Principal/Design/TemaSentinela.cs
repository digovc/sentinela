using DigoFramework;
using System.Drawing;

namespace Sentinela.Design
{
    internal class TemaSentinela : TemaBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override Color getCorFonte()
        {
            return Color.White;
        }

        protected override Color getCorTema()
        {
            return ColorTranslator.FromHtml("#0d756c");
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}