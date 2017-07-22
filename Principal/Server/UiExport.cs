using System.Collections.Generic;
using System.Reflection;
using Web.UiManager;

namespace Sentinela.Server
{
    internal class UiExport : UiExportBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override bool getBooExportarCss()
        {
            return true;
        }

        protected override void inicializarLstDllUi(List<Assembly> lstDllUi)
        {
            lstDllUi.Add(this.GetType().Assembly);
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}