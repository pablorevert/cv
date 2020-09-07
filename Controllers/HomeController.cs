using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace React.Sample.Webpack.CoreMvc.Controllers
{
	public class HomeController : Controller
	{


		public ActionResult Index()
		{
			return View();
		}
	}
}
