using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVCAngular.Startup))]
namespace MVCAngular
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
