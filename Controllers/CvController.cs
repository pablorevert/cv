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
                    new { name = "Pablo", Age = 7 },
                    new { name = "Mirlet", Age = 7 }
                }
            };
            return Json(items);
        }
    }
}