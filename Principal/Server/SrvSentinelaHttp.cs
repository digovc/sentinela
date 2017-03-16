using NetZ.Web.Server;
using Sentinela.Html.Pagina;

namespace Sentinela.Server
{
    internal sealed class SrvSentinelaHttp : SrvHttpBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private PagPrincipal _pagPrincipal;

        private PagPrincipal pagPrincipal
        {
            get
            {
                if (_pagPrincipal != null)
                {
                    return _pagPrincipal;
                }

                _pagPrincipal = new PagPrincipal();

                return _pagPrincipal;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        public override Resposta responder(Solicitacao objSolicitacao)
        {
            return base.responder(objSolicitacao) ?? this.responderLocal(objSolicitacao);
        }

        private Resposta responderLocal(Solicitacao objSolicitacao)
        {
            if (objSolicitacao == null)
            {
                return null;
            }

            return new Resposta(objSolicitacao).addHtml(this.pagPrincipal);
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}