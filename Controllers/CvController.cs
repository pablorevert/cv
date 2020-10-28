using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SampleApp.Controllers
{
    public class CvController : Controller
    {
        public IActionResult Index()
        {
            var items = new {
                items = new[] {
                    new { name = "Pablo" },
                    new { name = "Mirlet" }
                }
            };
            return Json(items);
        }
    }
}