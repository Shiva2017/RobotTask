using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(RobotTask.Startup))]
namespace RobotTask
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
